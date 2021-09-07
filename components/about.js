import classe from '../styles/About.module.css'
import Link from 'next/link'
import { ImTelegram } from "react-icons/im";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function About() {
    return (
        <div className={classe.leftcolumn}>
            <section className={classe.about}>
                Undergrad Student at Computer Engineering | USP (University of São Paulo)
                <br />
                <div className={classe.ico}>
                    <Link href="https://www.linkedin.com/in/samuel-rubens-37b385197/"><a className={classe.space}><SiLinkedin /></a></Link>
                    <Link href="https://github.com/rubenszinho"><a className={classe.space}><SiGithub /></a></Link>
                    <Link href="https://t.me/Rubenszinho"><a className={classe.space}><ImTelegram /></a></Link>
                </div>
            </section>

        </div>
    )
}