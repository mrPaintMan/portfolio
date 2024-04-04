import styles from '@/styles/projects/screenPlayer.module.css'

export default function ScreenPlayer({ url, className, ...props }) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      Screen player - to be coded
    </div>
  )
}
