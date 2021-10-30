import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

// TODO a real fav.ico using the moxed logo [x]
// * try to animate that thing

export default function Home() {
  return (
    <div>
      <Head>
        <title>M4XLR | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/M.ico" />
      </Head>
      <Navbar></Navbar>

      <main className={styles.main}>
        <h1>content</h1>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
