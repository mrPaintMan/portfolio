import styles from '@/styles/toBeCoded.module.css'
import { useRouter } from 'next/router'

export default function ToBeCoded({ title }) {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div>
        <button onClick={() => router.back()} className={styles.back}>Back</button>
      </div>
      <div className={styles.content}>{title} - To be coded!</div>
    </div>
  )
}
