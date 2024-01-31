import { FC } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';

export const Projects: FC = () => {
  return (
    <>
      <header>
        <PageTitle_H2
          title='Projects'
          subtitle='Some things I have done or am doing.'
        />
      </header>
      <div>
        <>This website</>
      </div>
    </>
  );
};
