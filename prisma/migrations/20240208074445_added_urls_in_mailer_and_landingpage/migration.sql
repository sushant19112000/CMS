-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_landingpage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "downloadpageurl" TEXT NOT NULL DEFAULT 'Download url',
    CONSTRAINT "landingpage_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_landingpage" ("assetId", "data", "id", "title", "url") SELECT "assetId", "data", "id", "title", "url" FROM "landingpage";
DROP TABLE "landingpage";
ALTER TABLE "new_landingpage" RENAME TO "landingpage";
CREATE TABLE "new_mailer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    "landingpageurl" TEXT NOT NULL DEFAULT 'landingpage url',
    CONSTRAINT "mailer_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_mailer" ("assetId", "id", "title", "url") SELECT "assetId", "id", "title", "url" FROM "mailer";
DROP TABLE "mailer";
ALTER TABLE "new_mailer" RENAME TO "mailer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
