import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'PUT') { // Verifica se o método da requisição é PUT
    const { id, name, email } = req.body; // Extrai 'id', 'name' e 'email' do corpo da requisição
    try {
      const updatedUser = await prisma.user.update({ // Atualiza os dados do usuário no banco de dados utilizando o Prisma
        where: { id: parseInt(id) }, // Especifica o usuário a ser atualizado com base no 'id' fornecido
        data: { name, email }, // Define os novos valores para 'name' e 'email'
      });
      res.status(200).json({ message: 'Data updated successfully!', user: updatedUser }); // Responde com um status 200 e o usuário atualizado em caso de sucesso
    } catch (error) {
      res.status(500).json({ error: 'Error updating data.' }); // Em caso de erro, responde com um status 500 indicando erro na atualização
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' }); // Se o método da requisição não for PUT, retorna um status 405 (Method Not Allowed)
  }
}