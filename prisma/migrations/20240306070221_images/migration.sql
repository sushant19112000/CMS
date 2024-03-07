-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_downloadpage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL DEFAULT 'imageUrl',
    "imageHeight" TEXT NOT NULL DEFAULT 'imageHeight',
    "imageWidth" TEXT NOT NULL DEFAULT 'imageWidth',
    CONSTRAINT "downloadpage_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_downloadpage" ("assetId", "id", "title", "url") SELECT "assetId", "id", "title", "url" FROM "downloadpage";
DROP TABLE "downloadpage";
ALTER TABLE "new_downloadpage" RENAME TO "downloadpage";
CREATE TABLE "new_landingpage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "formdata" TEXT NOT NULL DEFAULT 'formData',
    "downloadpageurl" TEXT NOT NULL DEFAULT 'Download url',
    "content" TEXT NOT NULL DEFAULT 'Html Content',
    "imageUrl" TEXT NOT NULL DEFAULT 'imageUrl',
    "imageHeight" TEXT NOT NULL DEFAULT 'imageHeight',
    "imageWidth" TEXT NOT NULL DEFAULT 'imageWidth',
    CONSTRAINT "landingpage_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_landingpage" ("assetId", "content", "data", "downloadpageurl", "formdata", "id", "title", "url") SELECT "assetId", "content", "data", "downloadpageurl", "formdata", "id", "title", "url" FROM "landingpage";
DROP TABLE "landingpage";
ALTER TABLE "new_landingpage" RENAME TO "landingpage";
CREATE TABLE "new_mailer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    "content" TEXT NOT NULL DEFAULT 'Html Content',
    "imageUrl" TEXT NOT NULL DEFAULT 'imageUrl',
    "imageHeight" TEXT NOT NULL DEFAULT 'imageHeight',
    "imageWidth" TEXT NOT NULL DEFAULT 'imageWidth',
    "landingpageurl" TEXT NOT NULL DEFAULT 'landingpage url',
    CONSTRAINT "mailer_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_mailer" ("assetId", "content", "id", "landingpageurl", "title", "url") SELECT "assetId", "content", "id", "landingpageurl", "title", "url" FROM "mailer";
DROP TABLE "mailer";
ALTER TABLE "new_mailer" RENAME TO "mailer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
