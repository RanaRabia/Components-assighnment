import Headerstyle from "./header.module.css"

const Headercomponent = () => {
  return (
    <div className={Headerstyle.container}>
        <h1 className={Headerstyle.heading}>THIS IS HEADER COMPONENT</h1>
        <h2 className={Headerstyle.info}> ALL IN ONE PERFUMES</h2>
    </div>
  )
}

export default Headercomponent