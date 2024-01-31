import { FC } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';

export const Info: FC = () => {
  return (
    <>
      <PageTitle_H2
        title='Info'
        subtitle='Me stuff.'
      />
      <ul>
        <li>
          My Narrative Resume -- <i>TBD</i>
        </li>
        <li>
          Professional Resume -- <i>TBD</i>
        </li>
        <li>
          Academic C.V. -- <i>TBD</i>
        </li>
      </ul>
    </>
  );
};
