import classe from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={classe.header}>
      Samuel Rubens
      <hr className={classe.hr_header} />
    </header>
  )
}