/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import styles from './styles.module.sass';

interface InputProps {
  placeholder?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onClick?: () => React.MouseEventHandler<HTMLInputElement> | undefined;
  onBlur?: {
    (e: React.FocusEvent): void;
    <T>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}
const Input = ({ ...props }: InputProps): JSX.Element => {
  return <input className={styles.input} {...props} />;
};

export default Input;
