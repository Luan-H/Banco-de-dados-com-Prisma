import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') { // Verifica se o método da requisição é POST
    try {
      const { name, email } = req.body; // Extrai os campos 'name' e 'email' do corpo da requisição
      const newUser = await prisma.user.create({ // Cria um novo usuário no banco de dados utilizando o Prisma
        data: {
          name,
          email,
        },
      });
      console.log('Novo usuário criado:', newUser); // Registra no console o novo usuário criado
      res.status(200).json({ message: 'Data added successfully!', user: newUser }); // Responde com um status 200 e um objeto JSON indicando sucesso
    } catch (error) {
      console.error('Erro ao adicionar dados:', error); // Envia os dados de erro no console
      res.status(500).json({ error: 'Error adding data.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' }); // Se o método da requisição não for POST, retorna um status 405 (Method Not Allowed)
  }
}
