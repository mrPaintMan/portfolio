import Section from './Section'
import styles from '@/styles/projects.module.css'

export default function Projects(props) {
  return (
    <Section title={'Projects'} CW {...props}>
      <div className={styles.container}>
        To be coded!
      </div>
    </Section>
  )
}