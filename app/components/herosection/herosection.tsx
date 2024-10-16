import Herostyle from "./herosection.module.css"

const Herosection = () => {
  return (
    <div className={Herostyle.container}>
        <h1 className= {Herostyle.heading}>THIS IS HEROSECTION COMPONENT.</h1>
        <h2 className={Herostyle.headings}>THIS IS OUR PERFUME SELLING WEBSITE. WE SELLS ALL DIFFERENT PERFUMES FOR MEN AND WOMEN</h2>
        <h3 className={Herostyle.products}>
            <ul>
                <li>ZARAR</li>
                <li>CHARLIE</li>
                <li>Dior Sauvage</li>
                <li> Joop! Homme</li>
                <li>FOG</li>
                <li> J DIORE</li>
                 <li> Eternity</li>
               <li>Shalimar</li>
                <li>GUCCI FLORA</li>
                
            </ul>
        </h3>
        <h3>Indulge your senses with our vast selection of fragrances,
Discover new scents and classic favorites on our platform.
Get ready to smell amazing with fast shipping and great deals,
Explore our website today and find your signature perfume!"</h3>
    </div>
  )
}

export default Herosection