import styles from './footer.module.css';
import Link from 'next/link';
import TiktokIcon from '../public/icons/tiktok';
import InstagramIcon from '../public/icons/instagram';
import LinkedInIcon from '../public/icons/linkedin';
import { useState } from 'react';

export default function Footer(props) {
    const [tags, setTags] = useState(["Alat Interpreter", "Sewa Alat Interpreter", "Alat Interpreter Jakarta", "Rental Tour Guide System", "Sewa Mic Delegate", "Interpreter Equipment Jakarta", "Interpreter Equipment Rental"])

    return (
        <footer id='contact-us'>
            <div className={styles["footer-sections"]}>
                <div className={styles["footer-section"]}>
                    <h2 className={styles["footer-section-title"]}>Our Office</h2>
                    <div className={styles["footer-section-txt"]}>
                        <p>Woodland Residence Tower Matoa, Jl. Raya Kalibata, RT.6/RW.7, Rawajati, Kec. Pancoran, Kota Jakarta Selatan, Daerah khusus Ibukota Jakarta 12750</p>
                        <Link href={`https://wa.me/6287735615623?text=Halo,%20saya%20tertarik%20untuk%20menggunakan%20layanan%20anda`}>
                            <p>Phone:&nbsp;+62 887-3561-5623</p>
                        </Link>
                        <Link href="mailto:info@bbstrans.com?subject=Informasi%20BBS">
                            <p>Email:&nbsp;info@bbstrans.com</p>
                        </Link>
                        <Link href="https://www.tiktok.com/@bbstrans">
                            <p className={styles["social-media"]}><TiktokIcon/>&nbsp;BBSTrans</p>
                        </Link>
                        <Link href="https://www.instagram.com/bbstrans/">
                            <p className={styles["social-media"]}>
                                <InstagramIcon/>&nbsp;BBSTranslation
                            </p>
                        </Link>
                        <Link href="https://www.linkedin.com/in/bilingual-business-services-b26a0b162/">
                            <p className={styles["social-media"]}><LinkedInIcon/>&nbsp;BBSTranslation</p>
                        </Link>
                    </div>
                </div>
                <div className={styles["footer-section"]}>
                    <h2 className={styles["footer-section-title"]}>Our Links</h2>
                    <div className={styles["footer-section-txt"]}>
                        <Link href="https://www.alatinterpreter.com">
                            <p className={styles.url}>
                                www.alatinterpreter.com
                            </p>
                        </Link>
                        <Link href="https://www.bbspenerjemah.com">
                            <p className={styles.url}>
                                www.bbspenerjemah.com
                            </p>
                        </Link>
                    </div>
                </div>
                <div className={styles["footer-section"]}>
                    <h2 className={styles["footer-section-title"]}>Tags</h2>
                    <div className={styles["footer-section-txt"]}>
                        <div className={styles.tags}>
                            {tags.map((tag) => 
                                <p className={styles.tag}>{tag}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles["footer-section"]}>
                <h2 className={styles["footer-section-title"]}>Help & Support</h2>
                <div className={styles["footer-section-txt"]}>
                    <p className={styles["support-url"]}>Terms & Conditions</p>
                    <Link href="mailto:info@bbstrans.com?subject=Informasi%20BBS">
                        <p className={styles["support-url"]}>Contact Us</p>
                    </Link>
                </div>
                </div>
            </div>
            <p className={styles.copyright}>Ⓒ Copyright 2023 Billingual Business Service</p>
        </footer>
    
    );
}