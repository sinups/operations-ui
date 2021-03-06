import React from 'react';
import classnames from 'classnames/bind';

import { Typography } from '../internal/Typography';
import styles from './Subtitle.css';

const cx = classnames.bind(styles);

interface Props {
  /** Контент */
  children: React.ReactNode;

  /** Дополнительный класс */
  className?: string;

  /** Тег, в который будет срендерен компонент */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

  /** Должен ли подзаголовок быть жирным */
  bold?: boolean;
}

export const Subtitle = ({
  children,
  className,
  tag = 'span',
  bold = false,
}: Props) => {
  const weight = bold ? 'bold' : 'normal';

  return (
    <Typography className={cx('subtitle', weight, className)} tag={tag}>
      {children}
    </Typography>
  );
};
