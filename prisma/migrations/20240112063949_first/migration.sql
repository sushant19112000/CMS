-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "is_admin" BOOLEAN NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Blogs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Blogs_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "BlogCategories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BlogCategories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CaseStudies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "CaseStudies_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CaseStudiesCategories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CaseStudiesCategories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Research" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Research_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ResearchCategories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ResearchCategories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Insights" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Insights_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "InsightsCategories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InsightsCategories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Whitepapers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Whitepapers_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "WhitepapersCategories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WhitepapersCategories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "businessEmail" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "services" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "optIn" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Subscribe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "comment" TEXT NOT NULL
);
