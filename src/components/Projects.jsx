import Hackathons from './projects/Hackathons'
import Minesweeper from './projects/Minesweeper'
import MoBlog from './projects/MoBlog'
import Plingplong from './projects/Plingplong'
import Quizzy from './projects/Quizzy'
import ScreenPlayer from './projects/ScreenPlayer'
import Section from './Section'
import styles from '@/styles/projects.module.css'
import { useState } from 'react'

const projects = [
  {
    name: 'Quizzy',
    render: (props) => <Quizzy {...props} />
  },
  {
    name: 'MoBlog',
    render: (props) => <MoBlog {...props} />
  },
  {
    name: 'Plingplong',
    render: (props) => <Plingplong {...props} />
  },
  {
    name: 'Hackathons',
    render: (props) => <Hackathons {...props} />
  },
  {
    name: 'Mine Sweeper',
    render: (props) => <Minesweeper {...props} />
  },
  {
    name: 'Screen player',
    render: (props) => <ScreenPlayer {...props} />
  }
]

export default function Projects(props) {
  const [selected, setSelected] = useState(0)
  return (
    <Section title={'Projects'} CW {...props}>
      <div className={styles.container}>
        <div className={styles.list}>
          {projects.map((proj, i) => (
            <div key={i} onClick={() => setSelected(i)} className={selected === i ? styles.selected : styles.listItem}>
              {proj.name}
            </div>
          ))}
        </div>
        {projects[selected].render({ className: styles.content })}
      </div>
    </Section>
  )
}
