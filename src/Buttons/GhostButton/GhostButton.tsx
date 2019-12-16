import React, { forwardRef } from 'react';
import cn from 'classnames/bind';

import Icon, { IconElement } from '../../Icon';
import { BaseButtonsProps } from '../Base';
import { Text, Caption } from '../../Typography';
import * as baseStyles from '../Base.css';
import * as styles from './GhostButton.css';

interface GhostProps {
  /**  Размер кнопки */
  size?: 'small' | 'medium';
  /**  В состоянии disabled */
  disabled?: boolean;
  /**  Иконка справа */
  icon?: IconElement | null;
  /** Дополнительный класс */
  className?: string;
}

const cx = cn.bind(styles);

type Props = GhostProps & BaseButtonsProps;

export const GhostButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      size = 'medium',
      disabled = false,
      icon = null,
      children,
      className,
      ...nativeProps
    }: Props,
    ref,
  ) => {
    const hasChildren = Boolean(children);
    const TextComponent = size === 'small' ? Caption : Text;
    return (
      <button
        className={cx(baseStyles.button, 'common', size, className, {
          'just-icon': !hasChildren,
        })}
        disabled={disabled}
        ref={ref}
        {...nativeProps}
      >
        {icon && (
          <Icon
            children={icon}
            size={size}
            className={cx('icon', { 'right-space': hasChildren })}
          />
        )}
        <TextComponent>{children}</TextComponent>
      </button>
    );
  },
);