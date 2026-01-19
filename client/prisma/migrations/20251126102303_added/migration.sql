/*
  Warnings:

  - The `imageUrl` column on the `Design` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `link` on the `Record` table. All the data in the column will be lost.
  - The `imageUrl` column on the `Record` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `imageUrl` column on the `Site` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Design" DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[];

-- AlterTable
ALTER TABLE "Record" DROP COLUMN "link",
ADD COLUMN     "links" TEXT[],
DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[];

-- AlterTable
ALTER TABLE "Site" DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[];

-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "genres" TEXT[],
    "imageUrl" TEXT[],
    "audioUrl" TEXT[],
    "links" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);
