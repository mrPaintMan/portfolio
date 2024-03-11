import Head from "next/head";
import Image from "next/image";
import profilePic from '@/../public/profilePic1.jpg'
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image alt="profile-photo" src={profilePic} width={200} className={styles.pic} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.text}>Hi, I&apos;m Filip</h1>
        <p className={styles.text}>
          I am a tech all-arounder who loves programming in general. Either it is web development, 
          machine learning, database management or cryptographic security, I&apos;m down. Im currently studying 
          the 4th year of M.SC in computer science and engineering at Uppsala University. A part from all coding, 
          raquet sports and nature lies close to heart. 
        </p>
        <h2>Projects</h2>
        <div className={styles.projects}>
          Update coming soon
        </div>
        <h2>Experiences</h2>
          Update coming soon
        <h2>Contact</h2>
          Update coming soon

      </div>
    </div>
  );
}

export const getServerSideProps = () => {
  return { props: { title: 'Filips Portfolio' } }
}


