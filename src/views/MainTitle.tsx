import { AppTexts } from '../main.enums';
import './index.views.css';

export const MainTitle = () => (
  <div className='flex-1'>
    <h1 className='text-4xl font-bold'>{AppTexts.NAME}</h1>
  </div>
);
