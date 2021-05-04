import React from 'react';
import styles from './Nav.module.scss';

function Nav() {
    return(
        <nav className={styles.container}>
            <div className={styles.left}>
                <a href="/">
                    <h3>I<span className={styles.grey}>M</span></h3>
                </a>
                <a href="https://www.metmuseum.org/" target="_blank" className={styles.link}>
                    <h4>The Met Musuem</h4>
                </a>
            </div>
            <ul className={styles.right}>
                <li>
                    <a href="/" className={styles.link}>
                        <h4>Find Art</h4>
                    </a>
                </li>
                <li>
                    <a href="/" className={styles.link}>
                        <h4>Exhibitions</h4>
                    </a>
                </li>
                <li>
                    <a href="/" className={styles.link}>
                        <h4>Create Account / Login</h4>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;