import { useState, useEffect } from "react"
import './Styles/Navbar.css'
import LoginCar from "./LoginCar"

const opciones = [
  {
    name: 'MEN',
    url: 'url1'
  },
  {
    name: 'WOMEN',
    url: 'url2'
  },
  {
    name: 'JEWELERY',
    url: 'url3'
  },
  {
    name: 'ELECTRONICS',
    url: 'url4'
  }
]

const messages = ["ENVÍO GRATIS EXCLUSIVO PARA MIEMBROS ADICLUB🚚",'AHORA PUEDES COMUNICARTE CON NOSOTROS A TRAVÉS DE WHATSAPP']


export default function Navbar( { logo } ) {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2500);
  
    return () => clearInterval(interval);
  }, [])
  return(
    <>
    {messages && 
          <div className="nav-slider">
            {
              messages.map((x,i) => <div key={i} className={`nav-slide ${currentIndex === i ? 'nav-fade' : ''}`} >
              {x}
            </div>)
            }
          </div>
          
    }

    <nav>
      <a>
        <img alt='logo' src={logo} />

      </a>
      <ul>
        {
          opciones.map( (x,i) => 
            <div key={i}>
              {x.name}
            </div>
            )
        }
      </ul>
      <LoginCar />
    </nav>
    </>
  )
}