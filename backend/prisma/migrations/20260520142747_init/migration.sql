-- CreateTable
CREATE TABLE "TowJob" (
    "id" TEXT NOT NULL,
    "towNumber" TEXT NOT NULL,
    "vehicle" TEXT NOT NULL,
    "driver" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TowJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cdlExpiry" TIMESTAMP(3) NOT NULL,
    "medicalExpiry" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Violation" (
    "id" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "towJobId" TEXT NOT NULL,

    CONSTRAINT "Violation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TowJob_towNumber_key" ON "TowJob"("towNumber");

-- AddForeignKey
ALTER TABLE "Violation" ADD CONSTRAINT "Violation_towJobId_fkey" FOREIGN KEY ("towJobId") REFERENCES "TowJob"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
