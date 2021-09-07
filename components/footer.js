import classe from '../styles/Footer.module.css'
import { RiKey2Fill } from "react-icons/ri";

export default function Footer() {
  return (
    <section className={classe.footer}>
      <hr className={classe.hr_footer} />
      eu@rubenzinho.me | samuelrubens@usp.br
      <br /><RiKey2Fill /> PGP: 3F75 BC47 2FBF 03D5 B7CC AE8A 83B8 E42F 96A1 661B
    </section>
  )
}