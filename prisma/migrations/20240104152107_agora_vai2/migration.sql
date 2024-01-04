/*
  Warnings:

  - You are about to drop the column `notas` on the `Aluno` table. All the data in the column will be lost.
  - Added the required column `nota1` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota10` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota2` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota3` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota4` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota5` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota6` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota7` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota8` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota9` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Aluno` DROP COLUMN `notas`,
    ADD COLUMN `nota1` INTEGER NOT NULL,
    ADD COLUMN `nota10` INTEGER NOT NULL,
    ADD COLUMN `nota2` INTEGER NOT NULL,
    ADD COLUMN `nota3` INTEGER NOT NULL,
    ADD COLUMN `nota4` INTEGER NOT NULL,
    ADD COLUMN `nota5` INTEGER NOT NULL,
    ADD COLUMN `nota6` INTEGER NOT NULL,
    ADD COLUMN `nota7` INTEGER NOT NULL,
    ADD COLUMN `nota8` INTEGER NOT NULL,
    ADD COLUMN `nota9` INTEGER NOT NULL;
