-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_landingpage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "headerBackgroundColor" TEXT NOT NULL,
    "campaignCode" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "formdata" TEXT NOT NULL DEFAULT 'formData',
    "downloadpageurl" TEXT NOT NULL DEFAULT 'Download url',
    "content" TEXT NOT NULL DEFAULT 'Html Content',
    "logoSrc" TEXT NOT NULL DEFAULT 'imageUrl',
    "logoHeight" TEXT NOT NULL DEFAULT 'imageHeight',
    "logoWidth" TEXT NOT NULL DEFAULT 'imageWidth',
    "template" TEXT NOT NULL DEFAULT 'JBW',
    CONSTRAINT "landingpage_campaignCode_fkey" FOREIGN KEY ("campaignCode") REFERENCES "campaign" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_landingpage" ("campaignCode", "content", "data", "downloadpageurl", "formdata", "headerBackgroundColor", "id", "logoHeight", "logoSrc", "logoWidth", "template", "title", "url") SELECT "campaignCode", "content", "data", "downloadpageurl", "formdata", "headerBackgroundColor", "id", "logoHeight", "logoSrc", "logoWidth", "template", "title", "url" FROM "landingpage";
DROP TABLE "landingpage";
ALTER TABLE "new_landingpage" RENAME TO "landingpage";
CREATE TABLE "new_mailer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "campaignCode" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT 'Html Content',
    "imageUrl" TEXT NOT NULL DEFAULT 'imageUrl',
    "imageHeight" TEXT NOT NULL DEFAULT 'imageHeight',
    "imageWidth" TEXT NOT NULL DEFAULT 'imageWidth',
    "landingpageurl" TEXT NOT NULL DEFAULT 'landingpage url',
    "logoSrc" TEXT NOT NULL DEFAULT 'imageUrl',
    "logoHeight" TEXT NOT NULL DEFAULT 'imageHeight',
    "logoWidth" TEXT NOT NULL DEFAULT 'imageWidth',
    "footer" TEXT NOT NULL DEFAULT '561 7th Ave 4th fl, New York NY 10018, United States',
    "unsubscribe" TEXT NOT NULL,
    "privacy" TEXT NOT NULL,
    "template" TEXT NOT NULL DEFAULT 'JBW',
    "updateProfile" TEXT NOT NULL,
    CONSTRAINT "mailer_campaignCode_fkey" FOREIGN KEY ("campaignCode") REFERENCES "campaign" ("code") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_mailer" ("campaignCode", "content", "footer", "id", "imageHeight", "imageUrl", "imageWidth", "landingpageurl", "logoHeight", "logoSrc", "logoWidth", "privacy", "template", "title", "unsubscribe", "updateProfile", "url") SELECT "campaignCode", "content", "footer", "id", "imageHeight", "imageUrl", "imageWidth", "landingpageurl", "logoHeight", "logoSrc", "logoWidth", "privacy", "template", "title", "unsubscribe", "updateProfile", "url" FROM "mailer";
DROP TABLE "mailer";
ALTER TABLE "new_mailer" RENAME TO "mailer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
