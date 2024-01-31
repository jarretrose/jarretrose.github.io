import { AppTexts } from '../main.enums';
import './index.components.css';

export const MainTitle = () => (
  <div className='flex-1'>
    <h1 className='text-blue-600 text-4xl font-bold'>{AppTexts.NAME}</h1>
  </div>
);
