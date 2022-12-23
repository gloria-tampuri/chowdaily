import { DeleteContext, DeleteContextProvider } from '../Context/DeleteContext'
import { EditContextProvider } from '../Context/EditContext'
import { ModalContextProvider } from '../Context/ModalContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <DeleteContextProvider>
    <ModalContextProvider>
   <EditContextProvider>
   <Component {...pageProps} />
   </EditContextProvider>
  </ModalContextProvider>
  </DeleteContextProvider>
}
