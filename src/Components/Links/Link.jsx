import './Styles/Links.css'
export default function Links ( { array } ) {
  console.log(array[1].arrayObjects)

  return(
    <section className="links">
      {
        array.map((element, i) => {
          if(element.type === 'lists') {
            return(
              <div className='lists' key={i}> 
                <h3>{element.h3}</h3>
              
              {
                element.links.map((underElementArray,y) => 
                    <div key={y}>
                      {
                      underElementArray.map( (underElementElement, k) => 
                      <div key={k}>{underElementElement}</div>)
                      }                    
                    </div>)
              }
              </div>
              )
            }

          if(element.type === 'sets') {
            return(
              <div className='sets' key={i}>                
              {element.arrayObjects.map((object, j) => 
              <div key={j}>
                <h3>{object.h3}</h3>
                {
                  object.list.map((element, k) => 
                    <div key={k}>
                      {
                        element.ancor && <a href={element.ancor}>
                          {
                            element.src && <img alt={k} src={element.src} />
                          }
                          {
                            element.p && element.p
                          }
                        </a>
                      }
                    </div>
                  )
                }
              </div>
              )}
              </div>
              )
            }
            if(element.type === 'list') {
              return(
                <div className={element.type} key={i}>
                  <h3>{element.h3}</h3>
                  <div>
                  {element.links.map((x,j) => <div key={j}>
                    {x}
                  </div>)}
                  </div>
                </div>
              )
            }
          }
        )
      
        
      }
    </section>
  )
}