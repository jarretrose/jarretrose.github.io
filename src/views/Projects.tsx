import { FC, useState } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';
import { GameOfLife } from '../projects/gameOfLife/GameOfLife';

export const Projects: FC = () => {
  const [view, setView] = useState('boring');

  return (
    <>
      <header>
        <PageTitle_H2
          title='Projects'
          subtitle='Some things I have done or am doing.'
        />
      </header>
      <div>
        <ul>
          <li>
            <button onClick={() => setView('boring')}>This Website</button>
          </li>
          {/* <li>
            <button onClick={() => setView('gol')}>
              Conway's Game of Life
            </button>
          </li> */}
        </ul>
        <br />
        <hr />
      </div>
      {view === 'boring' && <div>Um...</div>}
      {/* {view === 'gol' && <GameOfLife />} */}
    </>
  );
};
