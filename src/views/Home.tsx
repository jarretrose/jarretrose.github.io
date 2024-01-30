import { FC } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';

export const Home: FC = () => {
  return (
    <div>
      <PageTitle_H2
        title='Home'
        subtitle='This is just a project with which I can goof around; it is absolutely
        bare minimum. Please pay it no mind.'
      />
    </div>
  );
};
