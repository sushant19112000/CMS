/*
  Warnings:

  - Added the required column `link` to the `downloadpage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdfSrc` to the `downloadpage` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_downloadpage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "campaignCode" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL DEFAULT 'imageUrl',
    "imageHeight" TEXT NOT NULL DEFAULT 'imageHeight',
    "imageWidth" TEXT NOT NULL DEFAULT 'imageWidth',
    "logoSrc" TEXT NOT NULL DEFAULT 'imageUrl',
    "logoHeight" TEXT NOT NULL DEFAULT 'imageHeight',
    "logoWidth" TEXT NOT NULL DEFAULT 'imageWidth',
    "link" TEXT NOT NULL,
    "pdfSrc" TEXT NOT NULL,
    CONSTRAINT "downloadpage_campaignCode_fkey" FOREIGN KEY ("campaignCode") REFERENCES "campaign" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_downloadpage" ("campaignCode", "id", "imageHeight", "imageUrl", "imageWidth", "logoHeight", "logoSrc", "logoWidth", "title", "url") SELECT "campaignCode", "id", "imageHeight", "imageUrl", "imageWidth", "logoHeight", "logoSrc", "logoWidth", "title", "url" FROM "downloadpage";
DROP TABLE "downloadpage";
ALTER TABLE "new_downloadpage" RENAME TO "downloadpage";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
