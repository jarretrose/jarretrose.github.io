import { FC } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';

export const Info: FC = () => {
  return (
    <div>
      <PageTitle_H2
        title='Info'
        subtitle='My Info'
      />
      <p>
        My Narrative Resume -- <i>TBD</i>
      </p>
      <p>
        Professional Resume -- <i>TBD</i>
      </p>
      <p>
        Academic C.V. -- <i>TBD</i>
      </p>
    </div>
  );
};
