import styles from './styles.module.sass';

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps): JSX.Element => {
  return (
    <div className={styles.errorMessage}>
      <p>{text}</p>
    </div>
  );
};

export default ErrorMessage;
