-- DropForeignKey
ALTER TABLE "TaskToUser" DROP CONSTRAINT "TaskToUser_taskId_fkey";

-- DropForeignKey
ALTER TABLE "TaskToUser" DROP CONSTRAINT "TaskToUser_userId_username_fkey";

-- AddForeignKey
ALTER TABLE "TaskToUser" ADD CONSTRAINT "TaskToUser_userId_username_fkey" FOREIGN KEY ("userId", "username") REFERENCES "User"("userId", "username") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskToUser" ADD CONSTRAINT "TaskToUser_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
