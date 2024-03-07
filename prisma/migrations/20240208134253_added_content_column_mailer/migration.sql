-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mailer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "assetId" INTEGER NOT NULL,
    "content" TEXT NOT NULL DEFAULT 'Html Content',
    "landingpageurl" TEXT NOT NULL DEFAULT 'landingpage url',
    CONSTRAINT "mailer_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "asset" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_mailer" ("assetId", "id", "landingpageurl", "title", "url") SELECT "assetId", "id", "landingpageurl", "title", "url" FROM "mailer";
DROP TABLE "mailer";
ALTER TABLE "new_mailer" RENAME TO "mailer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
