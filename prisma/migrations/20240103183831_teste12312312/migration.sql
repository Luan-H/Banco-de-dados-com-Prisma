/*
  Warnings:

  - You are about to drop the `Materia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Matricula` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nota` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `notas` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Matricula` DROP FOREIGN KEY `Matricula_alunoId_fkey`;

-- DropForeignKey
ALTER TABLE `Matricula` DROP FOREIGN KEY `Matricula_materiaId_fkey`;

-- DropForeignKey
ALTER TABLE `Nota` DROP FOREIGN KEY `Nota_matriculaId_fkey`;

-- AlterTable
ALTER TABLE `Aluno` ADD COLUMN `notas` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Materia`;

-- DropTable
DROP TABLE `Matricula`;

-- DropTable
DROP TABLE `Nota`;
