import LottieControl from '../LottieControl';
import loading from '../../assets/lottie/loading.json';
import styles from './styles.module.sass';

const Loading = (): JSX.Element => {
  return (
    <div className={styles.loading}>
      <LottieControl animationData={loading} play loop />
    </div>
  )
}

export default Loading;