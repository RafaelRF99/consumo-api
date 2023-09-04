import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {

  return (
    <div className={styles.container}>
      <h1>Consumo API</h1>
      <Link href='axios'><p>Axios</p></Link>
      <Link href='reactQuery'><p>ReactQuery</p></Link>
    </div>
  )
}
