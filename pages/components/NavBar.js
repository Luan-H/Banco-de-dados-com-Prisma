import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/NavBar.module.css'
export default function NavBar() {
    return (
        <div>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link href='/'>
                            <Image
                                src='/favicon.ico'
                                width={60}
                                height={80}
                                alt="Teste"
                                className={styles.imagem}
                            />
                        </Link>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link href='/' className={styles.link}>Pagina inicial</Link></li>
                            <li><Link href='/showData' className={styles.link}>Listar Avaliações</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}
