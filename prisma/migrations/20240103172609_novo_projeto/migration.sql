/*
  Warnings:

  - You are about to drop the column `alunoId` on the `Nota` table. All the data in the column will be lost.
  - You are about to drop the column `materiaId` on the `Nota` table. All the data in the column will be lost.
  - You are about to alter the column `valor` on the `Nota` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - Added the required column `matriculaId` to the `Nota` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Nota` DROP FOREIGN KEY `Nota_alunoId_fkey`;

-- DropForeignKey
ALTER TABLE `Nota` DROP FOREIGN KEY `Nota_materiaId_fkey`;

-- AlterTable
ALTER TABLE `Nota` DROP COLUMN `alunoId`,
    DROP COLUMN `materiaId`,
    ADD COLUMN `matriculaId` INTEGER NOT NULL,
    MODIFY `valor` DOUBLE NOT NULL,
    MODIFY `criterio` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Matricula` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alunoId` INTEGER NOT NULL,
    `materiaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_alunoId_fkey` FOREIGN KEY (`alunoId`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_materiaId_fkey` FOREIGN KEY (`materiaId`) REFERENCES `Materia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nota` ADD CONSTRAINT `Nota_matriculaId_fkey` FOREIGN KEY (`matriculaId`) REFERENCES `Matricula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
