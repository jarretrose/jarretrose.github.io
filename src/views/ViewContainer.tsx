import { FC, PropsWithChildren } from 'react';

type ViewContainerProps = PropsWithChildren;

export const ViewContainer: FC<ViewContainerProps> = ({ children }) => {
  return <div className='flex flex-col gap-8'>{children}</div>;
};
