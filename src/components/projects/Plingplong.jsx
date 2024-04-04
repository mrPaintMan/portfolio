import Image from 'next/image'
import Link from 'next/link'
import plingplongSrc from '@/../public/plingplong/plingplong1.png'
import styles from '@/styles/projects/plingplong.module.css'

export default function Plingplong({ className, ...props }) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <Image className={styles.image} src={plingplongSrc} alt='plingplong-image' height={550} />
      <div className={styles.info}>
        <p className={styles.text}>
          In 2022, I made an app for my partner to send push notifications to my phone whenever she wanted my
          attention. In a way, the project was a mistake, due to the abusive nature of this feature, but not a
          mistake I regret making! This application utilizes Apple&apos;s APNS servers to enable push notifications.
        </p>
        <Link href={'https://github.com/mrPaintMan/plingplong'} className={styles.btn}>View on Github</Link>
      </div>
    </div>
  )
}
