import { FC } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';

export const AboutMe: FC = () => {
  return (
    <div>
      <PageTitle_H2
        title='About'
        subtitle='My Page About Me'
      />
      <p>
        This is where I'll put other random stuff. Listen, I just wanted another
        page.
      </p>
    </div>
  );
};
