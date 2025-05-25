import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className="my-1 mx-5">
                <div className={`${styles.d} ${styles.con} d-flex gap-5 fw-5 fs-3`}>
                <span>discover more</span>
                <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </footer>
        </>
    )
}
