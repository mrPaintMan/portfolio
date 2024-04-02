import styles from '@/styles/section.module.css'

export default function Section({ title, CCW, CW, children, ...props }) {
  return (
    <section {...props}>
      <div className={CW ? styles.CW : styles.CCW} />
      <div className={styles.positiveZ}>
        <div className={CW ? styles.containerCW : styles.containerCCW}>
          <span className={styles.title}>{title}</span>
        </div>
        {children}
      </div>
    </section>
  )
}
