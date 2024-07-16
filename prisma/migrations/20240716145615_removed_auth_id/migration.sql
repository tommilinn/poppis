/*
  Warnings:

  - You are about to drop the column `authId` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_authId_fkey";

-- DropIndex
DROP INDEX "Profile_authId_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "authId";

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_id_fkey" FOREIGN KEY ("id") REFERENCES "Auth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
