import { PrismaClient } from '@prisma/client';
import { useState } from 'react';
import Link from 'next//link'
import Head from 'next/head'
import styles from '../styles/teste.module.css'
const prisma = new PrismaClient();

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Cancela o recarregar da pagina quando clicar no botão
    try {
      const response = await fetch('/api/addData', { // Fetch no diretorio da API de Adicionar dados no banco
        method: 'POST', // POST: Postar/Enviar
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }), // Envia nome e e-mail
      });
      if (response.ok) {
        console.log('Data added successfully!'); // Funcionou
      } else {
        alert('Error adding data!'); // Não funcionou
      }
    } catch (error) {
      alert('Error adding data!');
      console.error(error); // Envia o erro no console
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Criar usuario</title> 
      </Head>
      <h1 className={styles.title}>Add Data</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text" // Tipo
          placeholder="Name" // Texto
          value={name} // Tipo de valor
          onChange={(e) => setName(e.target.value)} // Envia pra função
        />
        <input
          type="email" // Tipo
          placeholder="Email" // Texto
          value={email} // Tipo de valor
          onChange={(e) => setEmail(e.target.value)} // Envia pra função
        />
        <button type="submit" className={styles.button}>Add Data</button>
      </form>
        <Link href='/ShowData' className={styles.button}>Ver dados</Link>
        <Link href='/editData' className={styles.button}>Editar</Link>
    </div>
  );
}

