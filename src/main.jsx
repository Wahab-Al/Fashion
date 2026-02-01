import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

// import Satisfy of Google Fonts
import "@fontsource/satisfy";
import "@fontsource/righteous";

// import Playwrite variable of version Satisfy of Google Fonts
import "@fontsource-variable/playwrite-dk-loopet";
import "@fontsource-variable/playwrite-us-modern";


// invoke & import bootstrap: 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// import Font Awesome icons
import '@fortawesome/fontawesome-free/css/all.min.css'

// import SweetAlert2 
import 'sweetalert2/dist/sweetalert2.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>,
)
