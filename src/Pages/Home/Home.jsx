import { Link } from "react-router-dom";
import News from "../../Components/News/News";
import Portada from "../../Components/Portada/Portada";
import Suscribe from "../../Components/Suscribe/Suscribe";
import Links from "../../Components/Links/Link";

export default function HomePage( { products } ) {

  const contenido1 = {
    h2: '¡REGALOS Y MÁS REGALOS!',
    p: 'Nada mejor que tener un look nuevo para estas fiestas. ¡Aquí tenemos regalos para todos!',
    button: 'MIRA LA GUÍA DE REGALOS',
    path: 'https://img.freepik.com/foto-gratis/composicion-moderna-deporte-elementos-gimnasio_23-2147915649.jpg?w=900&t=st=1701079306~exp=1701079906~hmac=9ec51baeecdd94dbc31db43c5bcb2e5508de7da03276acba78988eee115ed1e2',
    color: 'white',
    letterColorButton: 'black',
    filter: true
  }

  const contenido2 = {
    h2: 'PERÚ ES ORIGINALS',
    p: 'Nueva colección adicolor en homenaje a las icónicas camisetas de la FPF que tantas alegrías nos dieron. Eleva tu estilo con un toque de orgullo peruano.',
    button: 'COMPRAR AHORA',
    path: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/bringback_mh_D_c22b58cc87.jpg',
    color: 'black',
    letterColorButton: 'white',
    filter: false
  }
  
  const suscribe = {
    h2: 'ÚNETE AL CLUB Y RECIBE 300 PUNTOS DE BIENVENIDA',
    button: 'REGÍSTRATE GRATIS'
  }

  const link = [
    {
      h3: 'PRODUCTOS',
      type: 'lists',
      links: [['Calzado','Zapatillas','Ropa','Accesorios','Chimpunes','Cortavientos','Buzos'],
      [
        'Novedades',
        'Cyber Wow',
        'Cyber Monday',
        'Cyber Days',
        'Black Friday',
        'Outlet',
      ], [
        'adiClub',
        'adidas app',
        'adidas Runners'
      ]]
    },
    {
      type: 'sets',
      arrayObjects: [
        {
          h3: 'DEPORTES',
          list: [
            {
              ancor: '#',
              p:'Sporting Cristal',
            }, {
              ancor: '#',

              p: 'Fútbol',
            }, {
              ancor: '#',

              p: 'Running',          
            }, {
              p: 'Básquet',              ancor: '#',

            }, {
              p: 'Training',              ancor: '#',

            }            
          ]
        },
        {
          h3: 'COLECCIONES',
            list: [
              {
                ancor: '#',
                p:'Ultraboost',
              }, {
                ancor: '#',  
                p: 'Originals',
              }, {
                ancor: '#',  
                p: 'Forum',          
              }, {
                p: 'adicolor',
                ancor: '#'  
              }, {
                p: 'Superstar',
                ancor: '#'  
              }, {
                p: 'Falcon',
                ancor: '#'
              } ]
        }]},   
    {
      type: 'list',
      h3: 'ASISTENCIA',
      links: ['Dudas Frecuentes',
      'Realizar Pedidos',
      'Productos adidas',
      'Pago',
      'Envío',
      'Solicitar mi Devolución',
      'Devoluciones',
      'Cambio en Tiendas',
      'Como Usar Nuestro Sitio',
      'Como Saber la Talla de tu Bra',
      'Guia de Tallas',
      'Mapa del Sitio']
    },
    {
      type: 'sets',
      arrayObjects: [
        {
          h3: 'INFORMACIÓN DE LA EMPRESA',
          list: [
            {
              p: 'Acerca de adidas',
              ancor: '#'

            },
            {
              p: 'Trabaja en Nuestro Equipo',
              ancor: '#'

            },
            {
              p: 'Prensa',
              ancor: '#'

            }
            
          ]
        },
        {
          h3: 'TIENDAS',
          list: [
            {
              ancor: 'stores',
              p: 'Buscador de Tiendas'
            },
            {
              src: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/LibroPE_tcm202-841885.png',
              ancor: 'iopjasdiasd'
            },
            {
              src: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esPE/Images/EscudoPE_tcm202-841884.png',
              ancor: '#'
            }

          ]
        }




      ]
    }
     
  ]
    return(
    <main>
        <Portada contenido={contenido1} />
        <Portada contenido={contenido2} />

        <News array = {products} />
        <Suscribe object={suscribe}/>
        <Links array={link} />
    </main>
  )
}