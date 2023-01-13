-- AlterTable
ALTER TABLE "Community" ADD COLUMN     "communityBigImage" VARCHAR NOT NULL DEFAULT 'https://asset.cloudinary.com/dv1dmymg2/dc187ec0302e9b767ecc77d25260a7a3',
ADD COLUMN     "communitySmallImage" VARCHAR NOT NULL DEFAULT 'https://res.cloudinary.com/dv1dmymg2/image/upload/v1673187625/PlantBuddy/PlantTypes/template_primary_tofeqr.jpg';
