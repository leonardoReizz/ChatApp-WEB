/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import styles from './styles.module.sass';

interface InputFormikProps {
  placeholder?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onClick?: () => React.MouseEventHandler<HTMLInputElement> | undefined;
  onBlur?: {
    (e: React.FocusEvent): void;
    <T>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  errorMessage?: string | undefined;
}
const InputFormik = ({
  errorMessage,
  ...props
}: InputFormikProps): JSX.Element => {
  return (
    <div className={styles.input}>
      <input {...props} />
      <p className={styles.formError}>{errorMessage}</p>
    </div>
  );
};

export default InputFormik;
