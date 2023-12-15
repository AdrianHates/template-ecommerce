import ReactDOM from 'react-dom/client'
import Theme from './Theme.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Theme />
    </BrowserRouter>
)
