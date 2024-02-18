import { FC, InputHTMLAttributes } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/**
 *
 * @param param0
 * @returns
 */
export const TextField: FC<TextFieldProps> = (props) => {
  return (
    <div className='h-min grid grid-cols-12 gap-2 items-center my-3'>
      <label
        className='col-span-1'
        htmlFor={props.name}
      >{`${props.label}: `}</label>
      <input
        className='col-span-4 border border-gray-400 rounded-md w-full px-1'
        {...props}
      />
    </div>
  );
};
