import PropTypes from 'prop-types';
import "./Styles/News.css"
import { leftArrow, rightArrow } from '../../assets/icons';
import { useEffect, useRef, useState } from 'react';

export default function News ( { array } ) {
  const [isHovered, setIsHovered] = useState(false);
  const contenedorRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleScrollRight = () => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollLeft += 1150; // Puedes ajustar la cantidad que deseas desplazar
    }
  };
  const handleScrollLeft = () => {

    if (contenedorRef.current) {
      contenedorRef.current.scrollLeft -= 1150; // Puedes ajustar la cantidad que deseas desplazar
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollLeft(contenedorRef.current.scrollLeft);
    };

    if (contenedorRef.current) {
      contenedorRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contenedorRef.current) {
        contenedorRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }); 
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return(
    <section className='news'>
      <h3>News</h3>      
        <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        >
        {  
        array &&
        <div className='container' ref={contenedorRef}>
          
          {
            array.map( (element,i) => {
              return(
                <div key={i}>
                  <div>
                  <img src={element.image} />
                  <div>${element.price}</div>
                  </div>
                  

                  

                <div>
                  <h3>{element.title}</h3>
                  <p>{element.category}</p>
                </div>

              </div>
              )
              
            })
          }          
        </div>
        }
        {
          <div          
          style={{opacity:`${scrollLeft!==0 && isHovered?'1':'0'}`}} 
          onClick={handleScrollLeft} className='left arrow'>
          {leftArrow('black')}
          </div>
        }
        {          
          <div 
          style={{opacity:`${scrollLeft+contenedorRef.current?.clientWidth !== 5268 && isHovered?'1':'0'}`}}
          onClick={handleScrollRight} className='right arrow'>
            
          {rightArrow('black')}
          </div>
        }
        </div>
      
    </section>
  )
}

News.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      // Otras propiedades que debería tener cada elemento del array
    })
  ),
};

News.defaultProps = {
  array: null, // Valor predeterminado para array: null
};