import { FC } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';
import './index.views.css';

export const Contact: FC = () => {
  return (
    <>
      <PageTitle_H2
        title='Contact'
        subtitle='Get in touch.'
      />
      <div className='flex flex-col gap-4'>
        <div>
          <ul>
            <li>
              <a href='mailto: jarretrose@gmail.com'>jarretrose@gmail.com</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/jarret-rose/'>LinkedIn</a>
            </li>
          </ul>
        </div>
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
    </>
  );
};
