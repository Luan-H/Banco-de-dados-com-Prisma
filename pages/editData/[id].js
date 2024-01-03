import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../styles/teste.module.css'
import Link from 'next/link';
import Head from 'next/head'

export default function EditData() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (id) { // Busca os detalhes do usuário com o ID fornecido
      axios.get(`/api/getUser?id=${id}`)
        .then((response) => {
          const userData = response.data.user; // Define userData como os dados do usuario
          setName(userData.name);
          setEmail(userData.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleUpdate = async (e) => { // Função para Editar os dados
    e.preventDefault();
    try {
      // Envia uma requisição PUT para atualizar os dados do usuário
      await axios.put(`/api/editData`, { id, name, email });
      alert('Data updated successfully!');
    } catch (error) {
      alert('Error updating data!');
      console.error(error);
    }
  };

  const handleDelete = async () => { // Função para deletar os dados do usuario
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        // Envia uma requisição DELETE para excluir o usuário com o ID fornecido
        await axios.delete(`/api/deleteData?id=${id}`);
        alert('User deleted successfully!');
        router.push('/'); // Redireciona para a página inicial após a exclusão
      } catch (error) {
        alert('Error deleting user!');
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Editar usuario</title> {/* Título */}
      </Head>
      <h1 className={styles.title}>Edit Data</h1>
      <form onSubmit={handleUpdate} className={styles.form}>
        <input
          type="text" // Tipo
          placeholder="Name" // Texto
          value={name} // Tipo de valor
          onChange={(e) => setName(e.target.value)} // Envia para a função
        />
        <input
          type="email" // Tipo
          placeholder="Email" // Texto
          value={email} // Tipo de valor
          onChange={(e) => setEmail(e.target.value)} // Envia para a função
        />
        <button className={styles.button} type="submit">Update Data</button>
        <button className={styles.button} type="button" onClick={handleDelete}>Delete User</button>
        <Link href='/editData' className={styles.button}>Voltar</Link>
      </form>
    </div>
  );
}
