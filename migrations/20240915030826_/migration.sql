-- CreateTable
CREATE TABLE `TeamMember` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `position` VARCHAR(191) NOT NULL DEFAULT '',
    `bio` VARCHAR(191) NOT NULL DEFAULT '',
    `image_filesize` INTEGER NULL,
    `image_extension` VARCHAR(191) NULL,
    `image_width` INTEGER NULL,
    `image_height` INTEGER NULL,
    `image_id` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
