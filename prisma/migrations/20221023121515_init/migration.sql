-- CreateEnum
CREATE TYPE "userType" AS ENUM ('user', 'admin');

-- CreateEnum
CREATE TYPE "careRoutineStepFrequency" AS ENUM ('threeTimesADay', 'twoTimesADay', 'daily', 'everyTwoDays', 'everyThreeDays', 'everyFourDays', 'everyFiveDays', 'everySixDays', 'weekly', 'everyTwoWeeks', 'everyThreeWeeks', 'onceAMonth', 'onceAYear', 'other', 'default');

-- CreateEnum
CREATE TYPE "userContentFlag" AS ENUM ('offfensive', 'useful', 'best', 'default');

-- CreateEnum
CREATE TYPE "plantState" AS ENUM ('thriving', 'good', 'needsAttention', 'thirsty', 'forgotten', 'dead', 'default');

-- CreateEnum
CREATE TYPE "plantPlacement" AS ENUM ('inside', 'outside', 'default');

-- CreateEnum
CREATE TYPE "gender" AS ENUM ('male', 'female', 'other', 'preferNotToTell');

-- CreateTable
CREATE TABLE "CareRoutine" (
    "id" UUID NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isShared" BOOLEAN NOT NULL DEFAULT false,
    "flag" "userContentFlag" NOT NULL DEFAULT 'default',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "plantId" UUID NOT NULL,

    CONSTRAINT "CareRoutine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoutineStep" (
    "id" UUID NOT NULL,
    "description" VARCHAR(500) DEFAULT '',
    "stepFrequency" "careRoutineStepFrequency" NOT NULL DEFAULT 'default',
    "otherFrequency" VARCHAR(40),
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMPTZ(6),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "careRoutineId" UUID NOT NULL,

    CONSTRAINT "RoutineStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plant" (
    "id" UUID NOT NULL,
    "plantName" VARCHAR(255) NOT NULL,
    "plantTypeId" UUID NOT NULL,
    "plantImage" VARCHAR DEFAULT '',
    "plantState" "plantState" NOT NULL DEFAULT 'default',
    "plantPlacement" "plantPlacement" NOT NULL DEFAULT 'default',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" UUID NOT NULL,

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlantType" (
    "id" UUID NOT NULL,
    "species" VARCHAR(255) DEFAULT '',
    "type" VARCHAR(255) DEFAULT '',
    "description" VARCHAR(1000) DEFAULT '',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PlantType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "id" UUID NOT NULL,
    "communityName" VARCHAR(255) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" UUID NOT NULL,
    "postBody" VARCHAR(2000) DEFAULT '',
    "image" VARCHAR DEFAULT '',
    "points" INTEGER NOT NULL DEFAULT 0,
    "flag" "userContentFlag" NOT NULL,
    "isAnnouncement" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" UUID NOT NULL,
    "communityId" UUID NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" UUID NOT NULL,
    "commentBody" VARCHAR(500) NOT NULL,
    "image" VARCHAR DEFAULT '',
    "points" INTEGER NOT NULL DEFAULT 0,
    "flag" "userContentFlag" NOT NULL DEFAULT 'default',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" UUID NOT NULL,
    "postId" UUID NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(15),
    "password" VARCHAR(255) NOT NULL,
    "gender" "gender" NOT NULL DEFAULT 'other',
    "points" INTEGER NOT NULL DEFAULT 0,
    "userType" "userType" NOT NULL DEFAULT 'user',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Badge" (
    "id" UUID NOT NULL,
    "badgeName" VARCHAR(255) NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBadges" (
    "userId" UUID NOT NULL,
    "badgeId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserBadges_pkey" PRIMARY KEY ("userId","badgeId")
);

-- CreateTable
CREATE TABLE "CommunityUsers" (
    "userId" UUID NOT NULL,
    "communityId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunityUsers_pkey" PRIMARY KEY ("userId","communityId")
);

-- CreateIndex
CREATE UNIQUE INDEX "CareRoutine_plantId_key" ON "CareRoutine"("plantId");

-- CreateIndex
CREATE UNIQUE INDEX "Plant_userId_key" ON "Plant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_userId_key" ON "Post"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_communityId_key" ON "Post"("communityId");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_userId_key" ON "Comment"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_postId_key" ON "Comment"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "UserBadges_userId_key" ON "UserBadges"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserBadges_badgeId_key" ON "UserBadges"("badgeId");

-- CreateIndex
CREATE UNIQUE INDEX "CommunityUsers_userId_key" ON "CommunityUsers"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CommunityUsers_communityId_key" ON "CommunityUsers"("communityId");

-- AddForeignKey
ALTER TABLE "CareRoutine" ADD CONSTRAINT "CareRoutine_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoutineStep" ADD CONSTRAINT "RoutineStep_careRoutineId_fkey" FOREIGN KEY ("careRoutineId") REFERENCES "CareRoutine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plant" ADD CONSTRAINT "Plant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plant" ADD CONSTRAINT "Plant_plantTypeId_fkey" FOREIGN KEY ("plantTypeId") REFERENCES "PlantType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBadges" ADD CONSTRAINT "UserBadges_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBadges" ADD CONSTRAINT "UserBadges_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "Badge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityUsers" ADD CONSTRAINT "CommunityUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityUsers" ADD CONSTRAINT "CommunityUsers_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
