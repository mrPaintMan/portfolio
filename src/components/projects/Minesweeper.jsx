import styles from '@/styles/projects/minesweeper.module.css'

export default function Minesweeper({ url, ...props }) {
  return (
    <div className={styles.container} {...props}>
      Mine sweeper - to be coded
    </div>
  )
}
