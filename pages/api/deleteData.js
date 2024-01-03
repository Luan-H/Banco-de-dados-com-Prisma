import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query; // Alterado para req.query
    try {
      await prisma.user.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json({ message: 'Data deleted successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting data.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
