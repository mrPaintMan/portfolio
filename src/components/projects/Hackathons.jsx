import styles from '@/styles/projects/hackathons.module.css'

export default function Hackathons({ url, ...props }) {
  return (
    <div className={styles.container} {...props}>
      Hackathon projects - to be coded
    </div>
  )
}
