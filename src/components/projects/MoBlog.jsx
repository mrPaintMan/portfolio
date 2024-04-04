import Image from 'next/image'
import Link from 'next/link'
import moblog0Src from '@/../public/moblog/moblog0.png'
import moblog1Src from '@/../public/moblog/moblog1.png'
import moblog2Src from '@/../public/moblog/moblog2.png'
import moblog3Src from '@/../public/moblog/moblog3.png'
import styles from '@/styles/projects/moBlog.module.css'

export default function MoBlog({ className, ...props }) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <div className={styles.images}>
        <Image src={moblog0Src} alt={'moblog-imag-1'} height={350} />
        <Image src={moblog1Src} alt={'moblog-imag-2'} height={350} />
        <Image src={moblog2Src} alt={'moblog-imag-3'} height={350} />
        <Image src={moblog3Src} alt={'moblog-imag-4'} height={350} />
      </div>
      <div className={styles.info}>
        <p className={styles.text}>
          MoBlog is a news platform for gamers, where users can follow the development of their favorite games. It was
          developed by me in 2019, for the sole purpose of allowing the platform to notify me when there are new
          development posts available. This project was developed in Swift and uses Apple&apos;s APNS servers for push
          notifications.
        </p>
        <div className={styles.btns}>
          <Link href={'/projects/moblog'} className={styles.btn}>Read more</Link>
          <Link href={'https://github.com/mrPaintMan/MoBlog'} target={'_blank'} className={styles.btn}>
            View on Github
          </Link>
        </div>
      </div>
    </div>
  )
}
