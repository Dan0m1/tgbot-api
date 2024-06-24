-- AlterTable
CREATE SEQUENCE jaruser_id_seq;
ALTER TABLE "JarUser" ALTER COLUMN "id" SET DEFAULT nextval('jaruser_id_seq');
ALTER SEQUENCE jaruser_id_seq OWNED BY "JarUser"."id";
