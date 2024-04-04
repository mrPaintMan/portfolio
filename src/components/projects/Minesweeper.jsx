import styles from '@/styles/projects/minesweeper.module.css'

export default function Minesweeper({ className, ...props }) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      Mine sweeper is an ongoing project in a course im currently taking. Stay tuned for updates!
    </div>
  )
}
