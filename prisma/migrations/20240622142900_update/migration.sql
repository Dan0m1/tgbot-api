-- DropForeignKey
ALTER TABLE "JarUser" DROP CONSTRAINT "JarUser_id_fkey";

-- AlterTable
ALTER TABLE "JarUser" ADD COLUMN     "userId" TEXT,
ADD COLUMN     "username" TEXT;

-- AddForeignKey
ALTER TABLE "JarUser" ADD CONSTRAINT "JarUser_userId_username_fkey" FOREIGN KEY ("userId", "username") REFERENCES "User"("userId", "username") ON DELETE SET NULL ON UPDATE CASCADE;
