import Contact from '@/components/Contact'
import Experiences from '@/components/Experiences'
import Image from 'next/image'
import Link from 'next/link'
import Projects from '@/components/Projects'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.headerText}>
          <div>
            <div>&nbsp;Hi, I&apos;m</div>
            <div className={styles.bigName}>Filip Palmqvist</div>
          </div>
          <div className={styles.headerBtns}>
            <Link href={'#aboutMe'} className={styles.btn}>About me</Link>
            <Link href={'#contact'} className={styles.btn}>Contact</Link>
          </div>
          <p className={styles.headerp}>
            I&apos;m an Uppsala resident currently studying my fourth year
            of the computer science and engineering programme
            at Uppsala university. Scroll down to find out more
            about me!
          </p>
        </div>
        <Image alt="profile-photo" src={'/maskedPic.png'} width={400} height={650} className={styles.pic} />
      </section>
      <section className={styles.aboutme} id="aboutMe">
        <div className={styles.aboutMeText}>Who is Filip?</div>
        <p className={styles.aboutp}>
          Im a guy who grew up just north of Stockholm, that loves sport and IT. I graduated the swedish gymnasium in 2018,
          and worked for two years before I enrolled the masters in computer science and engineering programme in Uppsala.
          Currently I work part time besides my studies, and will graduate next summer, in 2025. When I dont work
          or study, I play badminton, or dream of going skiing. I pride myself of being thorough when working, ensuring
          quality in the work done, and robustness in the code produced.
        </p>
      </section>
      <Experiences className={styles.section} id="experiences" />
      <Projects className={styles.section} id="projects" />
      <Contact className={styles.section} id="contact" />
    </div>
  )
}

export const getServerSideProps = () => {
  return { props: { title: 'Filips Portfolio', googleAnalyticsId: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID } }
}
