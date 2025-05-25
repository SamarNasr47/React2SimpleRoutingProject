import styles from './Nav.module.css'

export default function Nav() {
    return (
        <>
            <nav className='bg-success mx-5 px-5 py-2 d-flex gap-5 justify-content-between'>
            <h2>Logo</h2>
            <ul className={`${styles.link} list-unstyled d-flex gap-3 ml-5 px-5 fw-3 fs-4 `}>
                <li className='px-3'><a href="">home</a></li>
                <li className='px-3'><a href="">about</a></li>
                <li className='px-3'><a href="">contact</a></li>
            </ul>
            <div className={`d-flex gap-5 align-self-right`}>
                <button className='btn btn-dark text-light rounded'>login</button>
                <button className='btn btn-dark text-light rounded'>sing up</button>
            </div>
        </nav>
        </>
    )
}
