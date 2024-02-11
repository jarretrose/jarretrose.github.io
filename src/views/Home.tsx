import { FC } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';

export const Home: FC = () => {
  return (
    <>
      <PageTitle_H2
        title='Home'
        subtitle='Home again, home again, jiggity-jig.'
      />
      <p>This is me. This is a work in progress. This is incomplete.</p>
    </>
  );
};
