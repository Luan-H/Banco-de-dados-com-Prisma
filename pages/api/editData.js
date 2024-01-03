import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, name, email } = req.body;
    try {
      const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: { name, email },
      });
      res.status(200).json({ message: 'Data updated successfully!', user: updatedUser });
    } catch (error) {
      res.status(500).json({ error: 'Error updating data.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
