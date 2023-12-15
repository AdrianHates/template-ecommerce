import PropTypes from 'prop-types';
import './Styles/Portada.css'
import { rightArrow } from '../../assets/icons';
import { useState } from 'react'

export default function Portada ( { contenido } ) {
  const [hoverColorButton, setHoverColorButton] = useState(false)

  const hoverButton = () => {
    setHoverColorButton(true)
  }
  const hoverOutButton = () => {
    setHoverColorButton(false)
  }
  return(
    <div className="portada">
      {
        contenido.filter && <div className='filter'></div>
      }
      <img alt='portada' src={contenido.path} />
      
      {
        contenido && 
        <div>
        {
          contenido.h2 && <h2 style={{color:`${contenido.color}`}}>{contenido.h2}</h2>
        }
        {
          contenido.p && <p style={{color:`${contenido.color}`}}>{contenido.p}</p>
        }
        {
          contenido.button && <button 
          onMouseEnter={hoverButton}
          onMouseLeave={hoverOutButton}
          style={{backgroundColor: `${contenido.color}`, border: `1px solid ${contenido.color}`, color:`${hoverColorButton?'gray':contenido.letterColorButton}`}}>{contenido.button}{rightArrow(contenido.letterColorButton)}</button>
        }
      </div>
      }
    </div>
  )
}

Portada.propTypes = {
  contenido: PropTypes.object.isRequired
};
