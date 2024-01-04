import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/teste.module.css'
import Head from 'next/head'

const criterios = [
  'Mostra interesse em livros/contação de histórias.',
  'Compreende instruções verbais.',
  'Expressa ideias claramente.',
  'Usa vocabulário variado.',
  'Compreende histórias contadas/lidas.',
  'Participa ativamente de rimas/jogos de palavras.',
  'Conta histórias ou eventos de maneira coerente.',
  'Identifica sons ou ritmos na linguagem.',
  'Entende e responde a perguntas sobre uma história.',
  'Mostra prazer em aprender novas palavras.',
];

const NotasPage = () => {
  const [nome, setNome] = useState('');
  const [notas, setNotas] = useState(Array(10).fill(0));

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/Data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          ...notas.reduce((acc, nota, index) => {
            acc[`nota${index + 1}`] = nota;
            return acc;
          }, {}),
        }),
      });

      if (response.ok) {
        console.log('Notas enviadas com sucesso!');
        // Lógica para lidar com sucesso no envio das notas
      } else {
        console.error('Falha ao enviar notas.');
        // Lógica para lidar com falha no envio das notas
      }
    } catch (error) {
      console.error('Erro ao enviar notas:', error);
      // Lógica para lidar com erro no envio das notas
    }
  };

  const handleNotaChange = (index, value) => {
    const newNotas = [...notas];
    newNotas[index] = parseInt(value);
    setNotas(newNotas);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pagina inicial</title>
      </Head>
      <h1 className={styles.title}>Avaliação Linguística</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <span className={styles.nome}>Nome do Aluno:</span>   
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Critérios</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {
              criterios.map((criterio, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{criterio}</td>
                  <td className={styles.tableData}>
                    {[...Array(7)].map((_, buttonIndex) => (
                      <div key={buttonIndex}>
                        <input
                          type="radio"
                          id={`nota-${index}-${buttonIndex}`}
                          name={`nota-${index}`}
                          value={buttonIndex + 1}
                          checked={notas[index] === buttonIndex + 1}
                          onChange={() => handleNotaChange(index, buttonIndex + 1)}
                          className={styles.radioInput}
                        />
                        <label htmlFor={`nota-${index}-${buttonIndex}`} className={styles.radioLabel}>
                          {buttonIndex + 1}
                        </label>
                      </div>
                    ))}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <button type="submit" className={styles.button}>Salvar</button>
      </form>
    </div>
  );
};

export default NotasPage;
