import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') { // Verifica se o método da requisição é DELETE
    const { id } = req.query; // Obtém o parâmetro 'id' da query da requisição
    try {
      await prisma.user.delete({ // Deleta o usuário do banco de dados utilizando o Prisma
        where: { id: parseInt(id) }, // Especifica a condição para a deleção (nesse caso, pelo ID)
      });
      res.status(200).json({ message: 'Data deleted successfully!' }); // Responde com um status 200 indicando sucesso na deleção
    } catch (error) {
      res.status(500).json({ error: 'Error deleting data.' }); // Em caso de erro, responde com um status 500 indicando erro na deleção
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' }); // Se o método da requisição não for DELETE, retorna um status 405 (Method Not Allowed)
  }
}