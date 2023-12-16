import ReactDOM from 'react-dom/client'
import Theme from './Theme.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Theme />
    </HashRouter>
)
