import { SnackbarProvider } from 'notistack'
import {AxiosInterceptor} from './services/interceptors/axios.interceptor'
import Router from '../src/routes/Routes'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

AxiosInterceptor()

function App() {

  return (
    <>
      <SnackbarProvider 
        maxSnack={2}  
        autoHideDuration={3000}
        preventDuplicate={true}
      >
          <Router />
      </SnackbarProvider>

    </>
  )
}

export default App
