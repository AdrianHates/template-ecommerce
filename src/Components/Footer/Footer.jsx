import './Styles/Footer.css'
export default function Footer ( { array } ) {
  return(
    <section id='footer'>
      <div>
      {
        array.map((x, i) => {
          return(
            
            <div key={i}>
              
              <a>{x}</a>
            </div>
          )
        })
      }
      </div>      
      <div>
      © 2023 adidas Perú SAC, RUC 20347100316. Av. 28 de Julio 1011, interior 1001, Miraflores, Código Postal Lima 18
      </div>
    </section>
  )
}