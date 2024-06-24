/*
  Warnings:

  - The primary key for the `TaskToUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId,username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `TaskToUser` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "TaskToUser" DROP CONSTRAINT "TaskToUser_userId_fkey";

-- AlterTable
ALTER TABLE "TaskToUser" DROP CONSTRAINT "TaskToUser_pkey",
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "TaskToUser_pkey" PRIMARY KEY ("userId", "username", "taskId");

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_username_key" ON "User"("userId", "username");

-- AddForeignKey
ALTER TABLE "TaskToUser" ADD CONSTRAINT "TaskToUser_userId_username_fkey" FOREIGN KEY ("userId", "username") REFERENCES "User"("userId", "username") ON DELETE RESTRICT ON UPDATE CASCADE;
