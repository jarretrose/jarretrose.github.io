import { FC } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';

export const Contact: FC = () => {
  return (
    <div>
      <PageTitle_H2
        title='Contact'
        subtitle='My Contact Info'
      />
      <div>
        <ul>
          <li>
            <a href='mailto: jarretrose@gmail.com'>jarretrose@gmail.com</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/jarret-rose/'>LinkedIn</a>
          </li>
        </ul>
        <div>
          <h3>Send me a message!</h3>
          <div>
            <form
              action=''
              method=''
              className='contactForm'
            >
              <div>
                <div>
                  <label htmlFor='name'>Name:</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                  />
                </div>
                <div>
                  <label htmlFor='email'>Email:</label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                  />
                </div>
                <div>
                  <label htmlFor='message'>Message:</label>
                  <textarea
                    name='message'
                    id='message'
                    cols={30}
                    rows={10}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
