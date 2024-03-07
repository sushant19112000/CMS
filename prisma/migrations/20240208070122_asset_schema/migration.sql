/*
  Warnings:

  - You are about to drop the `Asset` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Asset";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "asset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "mailer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    CONSTRAINT "mailer_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "downloadpage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    CONSTRAINT "downloadpage_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "landingpage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    CONSTRAINT "landingpage_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "asset_name_key" ON "asset"("name");
