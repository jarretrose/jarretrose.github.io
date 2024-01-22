import { FC } from 'react';
import { loremIpsumOne, loremIpsumTwo } from '../utils';
import { PageTitle_H2 } from '../components/PageTitle_H2';

export const Home: FC = () => {
  return (
    <div>
      <PageTitle_H2
        title='Home'
        subtitle='Welcome to my website!'
      />
      <p>{loremIpsumOne}</p>
      <p>{loremIpsumTwo}</p>
    </div>
  );
};
