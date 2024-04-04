import Image from 'next/image'
import Link from 'next/link'
import getthemarsSrc from '@/../public/hackathons/getthemars.png'
import styles from '@/styles/projects/hackathons.module.css'
import suezcontrolSrcSrc from '@/../public/hackathons/suezcontrol.png'

export default function Hackathons({ className, ...props }) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <div className={styles.images}>
        <div className={styles.image}>
          <Image src={getthemarsSrc} alt='image for Get the mars game' height={320} />
          <p>Get the mars</p>
        </div>
        <div className={styles.image}>
          <Image src={suezcontrolSrcSrc} alt='image for Suez control game' height={320} />
          <p>Suez control</p>
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.text}>
          During a two year period, I participated
          in <Link href={'https://outyard.github.io'} className={styles.link} target='_blank'>OutYard&apos;s</Link>
          &nbsp;yearly hackathon, a student held hackathon with the goal of creating a game in 24 hours. The first
          year, there was a Mars theme, leading to the creation of Get the mars. The second year had a Suez canal theme,
          which made me and my
          friend <Link href={'https://manswe.github.io/my-app/'} className={styles.link} target='_blank'>Måns</Link>
          &nbsp;create Suez control. The games are done with the Phaser js framework.
        </p>
        <Link href={'/projects/hackathons'} className={styles.btn}>Try them out!</Link>
      </div>
    </div>
  )
}
