import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <title>Samuel Rubens | About</title>
      
      <header>Samuel Rubens</header>

      <section className="about">
        Undergrad Student at Computer Engineering | USP (University of São Paulo)
      </section>

      <section className="footer">
        eu@rubenzinho.me | samuelrubens@usp.br
        PGP: 3F75 BC47 2FBF 03D5 B7CC AE8A 83B8 E42F 96A1 661B
      </section>
    </div>
  )
}
