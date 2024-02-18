import { FC, useState } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';

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
        </ul>
        <br />
        <hr />
      </div>
      {view === 'boring' && <div>Um...</div>}
    </>
  );
};
