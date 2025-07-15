/*
  Warnings:

  - You are about to drop the column `validaotrId` on the `WebsiteTick` table. All the data in the column will be lost.
  - Added the required column `validatorId` to the `WebsiteTick` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WebsiteTick" DROP CONSTRAINT "WebsiteTick_validaotrId_fkey";

-- AlterTable
ALTER TABLE "WebsiteTick" DROP COLUMN "validaotrId",
ADD COLUMN     "validatorId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "WebsiteTick" ADD CONSTRAINT "WebsiteTick_validatorId_fkey" FOREIGN KEY ("validatorId") REFERENCES "Validator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
