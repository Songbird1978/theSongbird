/*
  Warnings:

  - You are about to drop the column `artist` on the `Record` table. All the data in the column will be lost.
  - Added the required column `artistId` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Record" DROP COLUMN "artist",
ADD COLUMN     "artistId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
