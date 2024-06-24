/*
  Warnings:

  - The primary key for the `TaskToUser` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "TaskToUser" DROP CONSTRAINT "TaskToUser_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "TaskToUser_pkey" PRIMARY KEY ("id");
