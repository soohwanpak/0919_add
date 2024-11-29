import styles from '@/components/LoadingSpinner.module.css';

export default function LoadingSpinner() {
    return (
        <div className={styles.loadingWrapper}>
            <div className={styles.spinner}></div>
            <p>로딩중입니다...</p>
        </div>
    );
}
