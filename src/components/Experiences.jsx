import Image from 'next/image'
import Section from './Section'
import d2vSrc from '@/../public/d2v.svg'
import hittaSrc from '@/../public/hitta.png'
import realpalSrc from '@/../public/realpal.png'
import styles from '@/styles/experiences.module.css'
import uppsalaSrc from '@/../public/uppsala.png'
import { useState } from 'react'

const companies = [
  {
    name: 'Hitta.se',
    ImageComponent: (props) => (<Image src={hittaSrc} alt='hitta-logo' className={styles.logo} {...props} />),
    duration: '2018 - 2020',
    text: `I worked as a backend developer between September 2018 and July 2020 at Hitta.se. My role 
           included development and maintenance of a data warehouse written in .net core, but maintenance 
           of other systems, including their website, could occacionally be assigned to me aswell.
          `
  },
  {
    name: 'Realpal',
    ImageComponent: (props) => (<Image src={realpalSrc} alt='hitta-logo' className={styles.logo} {...props} />),
    duration: '2021 - ongoing',
    text: `Realpal is a startup I've had the privilage of working with since 2021, mainly with the development 
           of a data warehouse, operations regarding their machine klearning models, and the refinement of 
           existing data pipelines.
          `
  },
  {
    name: 'Datatovalue',
    ImageComponent: (props) => (<Image src={d2vSrc} alt='hitta-logo' className={styles.logo} {...props} />),
    duration: '2023 - ongoing',
    text: `My bachelor thesis was written together with five other undergraduates regarding a project conducted for 
           Datatovalue. From the summer 2023 and onwards I have been working with the company as their lead developer, 
           besides my studies. Both frontend and backend development is included in the role, together with managing 
           projects including up to 30 developers.
          `
  },
  {
    name: 'Uppsala University',
    ImageComponent: (props) => (<Image src={uppsalaSrc} alt='hitta-logo' {...props} />),
    duration: '2023',
    text: `During the autumn of 2023 I had the role of teaching assistant in two courses at Uppsala University. 
           The first course, Imperative and Object Oriented Programming Methodology, covered C and Java thoroughly. 
           The other course, IT in Society, consisted of a larger project conducted in cooperation with Datatovalue, 
           where I had the role of project coordinator.
          `
  }
]

export default function Experiences(props) {
  const [selected, setSelected] = useState(0)
  return (
    <Section title={'Experiences'} CCW {...props}>
      <div className={styles.cmpContainer}>
        <div className={styles.companies}>
          {companies.map(({ ImageComponent }, i) =>
            <ImageComponent onClick={() => setSelected(i)} className={selected === i ? styles.selected : styles.logo} />
          )}
        </div>
        <div className={styles.cmpMeta}>
          <span>{companies[selected].name + ': ' + companies[selected].duration}</span>
        </div>
        <div className={styles.cmpText}>
          {companies[selected].text}
        </div>
      </div>

    </Section>
  )
}