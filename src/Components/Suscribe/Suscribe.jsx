import './Styles/Suscribe.css'
export default function Suscribe ( { object } ) {
  return(
    <section className="suscribe">
      <h2>{object.h2}</h2>
      <button className='button-first-design'>{object.button}</button>
    </section>
  )
}