import Image from 'next/image'
import Link from 'next/link'
import quizzyCodeSrc from '@/../public/quizzy/quizzy-code.png'
import quizzyMngSrc from '@/../public/quizzy/quizzy-manage.png'
import quizzyQSrc from '@/../public/quizzy/quizzy-q.png'
import styles from '@/styles/projects/quizzy.module.css'

export default function Quizzy({ className, ...props }) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <div className={styles.images}>
        <Image src={quizzyCodeSrc} height={350} alt='quizzy code' />
        <Image src={quizzyQSrc} height={350} alt='quizzy question' />
        <Image src={quizzyMngSrc} height={350} alt='quizzy management' />
      </div>
      <div className={styles.info}>
        <p className={styles.text}>
          This funky quiz is developed by me together with friends. It started as a
          school project and is now developed on our free time. The idea is to create
          a system similar to Kahoot, where quizzes can be created and played with
          friends online.
        </p>
        <Link href={'/projects/quizzy'} className={styles.btn}>Read more</Link>
      </div>
    </div>
  )
}
