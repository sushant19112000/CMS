-- CreateTable
CREATE TABLE "Asset" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "mailerContent" TEXT NOT NULL,
    "landingContent" TEXT NOT NULL,
    "downloadContent" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Asset_name_key" ON "Asset"("name");
