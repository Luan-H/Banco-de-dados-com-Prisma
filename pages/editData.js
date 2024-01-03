import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../styles/teste.module.css'
import Link from 'next/link';
import Head from 'next/head'


export default function EditData() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Busca a lista de usuários ao carregar a página
    axios.get('/api/getUser') // Manda pra função de resgatar os usuarios
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error(error); // Envia os erros no console
      });
    if (id) { // Verifica se há um ID válido para edição
      axios.get(`/api/getUser?id=${id}`) // Busca os detalhes do usuário com o ID fornecido
        .then((response) => {
          const userData = response.data.user; // Define userData como os dados do usuario
          setName(userData.name);
          setEmail(userData.email);
        })
        .catch((error) => {
          console.error(error); // Envia os erros no console
        });
    }
  }, [id]);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Editar usuario</title> {/* Título */}
      </Head>
      <h1 className={styles.title}>Edit Data</h1>
      <form className={styles.form}>
        <select
          className={styles.select} // Estilo
          value={id} // Tipo de Valor
          onChange={(e) => router.push(`/editData/${e.target.value}`)}> {/*Envia para a pagina de edição*/}
          <option value="">Select a user</option>
          {users.map((user) => (
            <option // Mostra o nome de todos os usuarios
              key={user.id}
              value={user.id}> 
              {user.name}
            </option>
          ))}
        </select>
        <Link href='/' className={styles.button}>Voltar</Link>
      </form>
    </div>
  );
}
