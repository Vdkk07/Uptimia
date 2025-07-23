/*
  Warnings:

  - You are about to drop the column `Latency` on the `WebsiteTick` table. All the data in the column will be lost.
  - Added the required column `latency` to the `WebsiteTick` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WebsiteTick" DROP COLUMN "Latency",
ADD COLUMN     "latency" DOUBLE PRECISION NOT NULL;
