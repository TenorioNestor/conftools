import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Conftools Software</title>
        <meta name="description" content="Conftools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Vamos tirar sua ideia do papel!
          </p>
          <div className={styles.button}>
            <a
              href="https://form.jotform.com/240657019494664"
              target="_blank"
              rel="noopener noreferrer"
            >
            {" Vamos conversar? Clique aqui!"}

            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/background.png"
            alt="Conftool logo"
            width={600}
            height={300}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              APPs <span>-&gt;</span>
            </h2>
            <p>
              Criamos aplicativos para automatizar e melhorar processos em sua empresa.
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Forms <span>-&gt;</span>
            </h2>
            <p>
              Criação de formulários personalizados, feitos sob medida para sua demanda.
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              PWA <span>-&gt;</span>
            </h2>
            <p>
              Aplicações que rodam em IOS, Android e WEB.
            </p>

          </a>

          <a
            href=""
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Foco <span>-&gt;</span>
            </h2>
            <p>
              As aplicações são focadas em pequenas e médias empresas, com valores acessíveis.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
