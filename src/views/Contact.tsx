import { FC } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';
import './index.views.css';
import { TextField } from '../components/TextField';
import { TextArea } from '../components/TextArea';

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
                  <TextField
                    label={'Name'}
                    name={'name'}
                    placeholder='Your name here.'
                  />
                </div>
                <div>
                  <TextField
                    label={'Email'}
                    name={'email'}
                    type='email'
                  />
                </div>
                <div>
                  <TextArea
                    label='Message'
                    name='message'
                    placeholder='Your message here.'
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
