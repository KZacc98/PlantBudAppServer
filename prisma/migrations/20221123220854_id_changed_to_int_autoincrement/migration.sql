/*
  Warnings:

  - The primary key for the `Badge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Badge` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CareRoutine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CareRoutine` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Comment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Community` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Community` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CommunityUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Plant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Plant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `PlantType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `PlantType` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `RoutineStep` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `RoutineStep` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `UserBadges` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `plantId` on the `CareRoutine` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `postId` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `CommunityUsers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `communityId` on the `CommunityUsers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `plantTypeId` on the `Plant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Plant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `communityId` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `careRoutineId` on the `RoutineStep` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `UserBadges` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `badgeId` on the `UserBadges` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "CareRoutine" DROP CONSTRAINT "CareRoutine_plantId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "CommunityUsers" DROP CONSTRAINT "CommunityUsers_communityId_fkey";

-- DropForeignKey
ALTER TABLE "CommunityUsers" DROP CONSTRAINT "CommunityUsers_userId_fkey";

-- DropForeignKey
ALTER TABLE "Plant" DROP CONSTRAINT "Plant_plantTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Plant" DROP CONSTRAINT "Plant_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_communityId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "RoutineStep" DROP CONSTRAINT "RoutineStep_careRoutineId_fkey";

-- DropForeignKey
ALTER TABLE "UserBadges" DROP CONSTRAINT "UserBadges_badgeId_fkey";

-- DropForeignKey
ALTER TABLE "UserBadges" DROP CONSTRAINT "UserBadges_userId_fkey";

-- DropIndex
DROP INDEX "Badge_id_key";

-- DropIndex
DROP INDEX "CareRoutine_id_key";

-- DropIndex
DROP INDEX "Comment_id_key";

-- DropIndex
DROP INDEX "Community_id_key";

-- DropIndex
DROP INDEX "Plant_id_key";

-- DropIndex
DROP INDEX "PlantType_id_key";

-- DropIndex
DROP INDEX "Post_id_key";

-- DropIndex
DROP INDEX "RoutineStep_id_key";

-- DropIndex
DROP INDEX "User_id_key";

-- AlterTable
ALTER TABLE "Badge" DROP CONSTRAINT "Badge_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Badge_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CareRoutine" DROP CONSTRAINT "CareRoutine_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "plantId",
ADD COLUMN     "plantId" INTEGER NOT NULL,
ADD CONSTRAINT "CareRoutine_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "postId",
ADD COLUMN     "postId" INTEGER NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Comment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Community" DROP CONSTRAINT "Community_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Community_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CommunityUsers" DROP CONSTRAINT "CommunityUsers_pkey",
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "communityId",
ADD COLUMN     "communityId" INTEGER NOT NULL,
ADD CONSTRAINT "CommunityUsers_pkey" PRIMARY KEY ("userId", "communityId");

-- AlterTable
ALTER TABLE "Plant" DROP CONSTRAINT "Plant_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "plantTypeId",
ADD COLUMN     "plantTypeId" INTEGER NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Plant_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PlantType" DROP CONSTRAINT "PlantType_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "PlantType_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "communityId",
ADD COLUMN     "communityId" INTEGER NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "RoutineStep" DROP CONSTRAINT "RoutineStep_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "careRoutineId",
ADD COLUMN     "careRoutineId" INTEGER NOT NULL,
ADD CONSTRAINT "RoutineStep_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UserBadges" DROP CONSTRAINT "UserBadges_pkey",
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "badgeId",
ADD COLUMN     "badgeId" INTEGER NOT NULL,
ADD CONSTRAINT "UserBadges_pkey" PRIMARY KEY ("userId", "badgeId");

-- CreateIndex
CREATE UNIQUE INDEX "CareRoutine_plantId_key" ON "CareRoutine"("plantId");

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
