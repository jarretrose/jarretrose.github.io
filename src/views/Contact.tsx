import { FC } from 'react';
import { PageTitle_H2 } from '../components/PageTitle_H2';
import './index.views.css';
import { TextField } from '../components/TextField';
import { TextArea } from '../components/TextArea';
import { PrimaryButton } from '../components/PrimaryButton';

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
          <form
            action=''
            method=''
            className='contactForm'
          >
            <TextField
              label={'Name'}
              name={'name'}
              placeholder='Your name here.'
            />

            <TextField
              label={'Email'}
              name={'email'}
              type='email'
              placeholder='youremail@email.com'
            />

            <TextArea
              label='Message'
              name='message'
              placeholder='Your message here.'
              cols={30}
              rows={10}
            />

            <PrimaryButton buttonText='Submit' />
          </form>
        </div>
      </div>
    </>
  );
};
