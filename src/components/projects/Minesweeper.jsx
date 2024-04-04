import styles from '@/styles/projects/minesweeper.module.css'

export default function Minesweeper({ url, className, ...props }) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      Mine sweeper - to be coded
    </div>
  )
}
