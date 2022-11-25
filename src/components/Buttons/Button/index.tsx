
import { ReactNode } from 'react';
import styles from './styles.module.sass';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
}

const Button = ({ children, type, ...props }: ButtonProps) => {
  return (
    <button type={!type ? 'button' : type} className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
