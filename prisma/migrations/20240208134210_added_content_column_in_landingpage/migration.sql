-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_landingpage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "downloadpageurl" TEXT NOT NULL DEFAULT 'Download url',
    "content" TEXT NOT NULL DEFAULT 'Html Content',
    CONSTRAINT "landingpage_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_landingpage" ("assetId", "data", "downloadpageurl", "id", "title", "url") SELECT "assetId", "data", "downloadpageurl", "id", "title", "url" FROM "landingpage";
DROP TABLE "landingpage";
ALTER TABLE "new_landingpage" RENAME TO "landingpage";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
