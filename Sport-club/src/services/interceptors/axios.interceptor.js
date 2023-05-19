import axios from 'axios';
import { enqueueSnackbar } from 'notistack'

export const AxiosInterceptor = () => {

  axios.interceptors.response.use(
    (response) => {

      if (response.config?.notify) {
        enqueueSnackbar(response?.data?.message, { variant: 'success' })
      }

      return response;
    },
    (error) => {
      if (error.response.data) {
        enqueueSnackbar(error.response.data, {
          variant: 'error'
        })
      } else {
        enqueueSnackbar(error.message, {
          variant: 'error'
        })
      }
      return Promise.reject(error)
    }
  );
};