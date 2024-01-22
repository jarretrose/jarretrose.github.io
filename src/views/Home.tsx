import { FC } from 'react';
import { loremIpsumOne, loremIpsumTwo } from '../utils';

export const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>{loremIpsumOne}</p>
      <p>{loremIpsumTwo}</p>
    </div>
  );
};
