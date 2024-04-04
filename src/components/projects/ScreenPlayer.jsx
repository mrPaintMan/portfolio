import styles from '@/styles/projects/screenPlayer.module.css'

export default function ScreenPlayer({ className, ...props }) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      Screen player is a project utilized in a commercial setting aiming to provide a way of
      displaying advertisement on a large screen endlessly using a web server. It is a work in
      progress. Stay tuned for updates!
    </div>
  )
}
