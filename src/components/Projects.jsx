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
    render: (props) => <Quizzy url='/projects/quizzy' {...props} />
  },
  {
    name: 'MoBlog',
    render: (props) => <MoBlog url='/projects/moblog' {...props} />
  },
  {
    name: 'Plingplong',
    render: (props) => <Plingplong url='/projects/plingplong' {...props} />
  },
  {
    name: 'Hackathons',
    render: (props) => <Hackathons url='/projects/hackathons' {...props} />
  },
  {
    name: 'Mine Sweeper',
    render: (props) => <Minesweeper url='/projects/minesweeper' {...props} />
  },
  {
    name: 'Screen player',
    render: (props) => <ScreenPlayer url='/projects/screenplayer' {...props} />
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
