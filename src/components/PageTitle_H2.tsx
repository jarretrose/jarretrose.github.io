import { FC } from 'react';

type PageTitle_H2Props = {
  // TODO: page title enums
  title: string;
  subtitle: string;
};

/**
 *
 * @param title
 * @param subtitle
 * @returns Component display for page title and subtitle followed by a horizontal rule.
 */
export const PageTitle_H2: FC<PageTitle_H2Props> = ({ title, subtitle }) => {
  return (
    <>
      <header>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className='text-base'>{subtitle}</p>
      </header>
    </>
  );
};
