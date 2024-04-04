import styles from '@/styles/projects/hackathons.module.css'

export default function Hackathons({ url, className, ...props }) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      Hackathon projects - to be coded
    </div>
  )
}
