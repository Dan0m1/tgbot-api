-- CreateTable
CREATE TABLE "Jar" (
    "id" TEXT NOT NULL,
    "sendId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "currencyCode" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,
    "goal" INTEGER NOT NULL,

    CONSTRAINT "Jar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JarUser" (
    "id" INTEGER NOT NULL,
    "fulfilled" BOOLEAN NOT NULL,
    "jarId" TEXT NOT NULL,

    CONSTRAINT "JarUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JarUser" ADD CONSTRAINT "JarUser_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JarUser" ADD CONSTRAINT "JarUser_jarId_fkey" FOREIGN KEY ("jarId") REFERENCES "Jar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
