import Footerstyle from "./footer.module.css"

const Footercomponent = () => {
  return (
    <div  className={Footerstyle.container}>
        <h1 className= {Footerstyle.heading}>THIS IS FOOTER COMPONENT</h1>
        <h2 className={Footerstyle.headings}>CONTACT INFO</h2>
        <h3 className={Footerstyle.info}> PHONE NO: <b>03431287650</b></h3>
        <h3 className={Footerstyle.style}>EMAIL ADDRESS: <b>razia768@gmail.com</b></h3>
        <h3 className={Footerstyle.styling}>WEBSITE: <b>www.raziamubeen.com</b></h3>
    </div>
  )
}

export default Footercomponent
