import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') { // Verifica se o método da requisição é GET
    try {
      const users = await prisma.user.findMany(); // Busca todos os usuários no banco de dados utilizando o Prisma
      res.status(200).json({ users }); // Responde com um status 200 e um objeto JSON contendo os usuários obtidos
    } catch (error) {
      res.status(500).json({ error: 'Error fetching users' }); // Em caso de erro, responde com um status 500 indicando erro na busca dos usuários
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' }); // Se o método da requisição não for GET, retorna um status 405 (Method Not Allowed)
  }
}