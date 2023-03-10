import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" ></link>
      </Head>
      <main className={styles.body}>
        <div className={styles.main}>
          <Link href='/useEffectOne' className={styles.link}>UseEffectOne</Link>
          <Link href='/useEffectTwo' className={styles.link}>UseEffectTwo</Link>
          <Link href='/useEffectThree' className={styles.link}>UseEffectThree</Link>
          <Link href='/carouselPage' className={styles.link}>carouselPage</Link>
        </div>
      </main>
    </>
  )
}
