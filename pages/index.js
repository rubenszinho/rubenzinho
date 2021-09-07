import Image from 'next/image'
import Header from '../components/header'
import SideBar from '../components/sideBar'
import About from '../components/about'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <div className="main">
        <Header key="header" />
        <About key="about" />
      </div>
      <section className="sideBar">
        <SideBar key="sideBar" />
      </section>

      <Footer key="footer" />
    </div>
  )
}
