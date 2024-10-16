import Header from "./components/header/header"
import Herosection from "./components/herosection/herosection"
import Footer from "./components/footer/footer"
import Pagestyle from "./page.module.css"

const Homepage = () => {
  return (
    <div className={Pagestyle.container}>
      <Header></Header>
      <Herosection></Herosection>
      <Footer></Footer>
      
      <h1 className={Pagestyle.heading}>THIS IS OUR HOME PAGE </h1>
    <h2 className={Pagestyle.info}>THIS IS OUR MAIN PAGE</h2>
      </div>
  )
}

export default Homepage