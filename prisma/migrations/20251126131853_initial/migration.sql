/*
  Warnings:

  - Added the required column `artist` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Genres" AS ENUM ('JAZZ', 'SOUL', 'EXPERIMENTAL', 'BLUES', 'ACOUSTIC', 'CHAOS', 'TRASH', 'ELECTRONIC', 'ALTERNATIVE', 'INDIE', 'POETIC', 'LIVE', 'AMBIENT');

-- AlterTable
ALTER TABLE "Record" ADD COLUMN     "artist" TEXT NOT NULL;
