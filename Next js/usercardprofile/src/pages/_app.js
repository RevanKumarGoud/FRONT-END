import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from '../components/Navbar'
import { ToastContainer,toast } from 'react-toastify'
 function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Navbar {...pageProps} />
    <ToastContainer {...pageProps}  theme='colored' position='top-center'></ToastContainer>
    </>
}
export default App