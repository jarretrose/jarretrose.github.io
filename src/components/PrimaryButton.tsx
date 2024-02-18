import { FC } from 'react';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  return (
    <button
      className='border border-gray-400 rounded-md py-1 px-6'
      {...props}
    >
      {props.buttonText}
    </button>
  );
};
