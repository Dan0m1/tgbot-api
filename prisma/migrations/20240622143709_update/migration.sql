/*
  Warnings:

  - You are about to drop the column `userId` on the `JarUser` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `JarUser` table. All the data in the column will be lost.
  - Added the required column `name` to the `JarUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "JarUser" DROP CONSTRAINT "JarUser_userId_username_fkey";

-- AlterTable
ALTER TABLE "JarUser" DROP COLUMN "userId",
DROP COLUMN "username",
ADD COLUMN     "name" TEXT NOT NULL;
