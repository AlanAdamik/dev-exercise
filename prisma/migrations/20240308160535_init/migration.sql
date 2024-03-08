-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "showroom" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "customer" TEXT NOT NULL
);
