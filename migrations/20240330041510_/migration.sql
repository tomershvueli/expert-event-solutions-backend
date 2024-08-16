-- CreateTable
CREATE TABLE IF NOT EXISTS `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `email` VARCHAR(191) NOT NULL DEFAULT '',
    `password` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastLoginDate` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),


    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `ees-contact-info` (
    `CONTACT_INFO_ID` INT PRIMARY KEY,
    `EMAIL` VARCHAR(255),
    `PHONE` VARCHAR(255),
    `ADDRESS` VARCHAR(255),
    `CITY` VARCHAR(255),
    `STATE` VARCHAR(255),
    `ZIP` VARCHAR(255),
    `COUNTRY` VARCHAR(255)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO
    `ees-contact-info` (
        `CONTACT_INFO_ID`,
        `EMAIL`,
        `PHONE`,
        `ADDRESS`,
        `CITY`,
        `STATE`,
        `ZIP`,
        `COUNTRY`
    )
VALUES (
        1,
        'email',
        '555-555-5555',
        'address',
        'city',
        'state',
        'zip',
        'country'
    );