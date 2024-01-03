import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import styles from '../styles/teste.module.css'
import Head from 'next/head'

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const users = await prisma.user.findMany(); // findMany(): Acha quantos usuarios tem
    return {
      props: {
        users, // Retorna os usuarios encontrados
      },
    };
  }

export default function ShowData({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mostrar usuarios</title> {/* Título */}
      </Head>
      <h1 className={styles.title}>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className={styles.list}>
            Name: {user.name}, Email: {user.email} {/* Mostra o nome e email dos usuarios */}
          </li>
        ))}
      </ul>
      <h1>
        <Link href='/' className={styles.button}>Voltar</Link>
      </h1>
    </div>
  );
}