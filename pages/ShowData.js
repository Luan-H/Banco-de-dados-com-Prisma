import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/teste2.module.css'
import Image from 'next/image';
import Head from 'next/head';

const ShowData = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getUser');
        if (response.ok) {
          const data = await response.json();
          setAlunos(data.dados);
        } else {
          throw new Error('Erro ao buscar dados');
        }
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ver notas</title>
      </Head>
      <h1 className={styles.title}>Dados dos Alunos</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome do Aluno</th>
            {[...Array(10)].map((_, index) => (
              <th key={index}>Nota {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              {[...Array(10)].map((_, index) => (
                <td key={index}>{aluno[`nota${index + 1}`]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/" className={styles.button}>Voltar para a página inicial</Link>
    </div>
  );
};

export default ShowData;
