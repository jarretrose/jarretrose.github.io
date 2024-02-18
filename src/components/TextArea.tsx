import { FC } from 'react';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextArea: FC<TextAreaProps> = (props) => {
  return (
    <div className='h-min grid grid-cols-12 gap-2 items-top my-3'>
      <label
        className='col-span-12'
        htmlFor={props.name}
      >{`${props.label}: `}</label>
      <textarea
        className='col-span-12 border border-gray-400 rounded-md px-1'
        {...props}
      />
    </div>
  );
};
