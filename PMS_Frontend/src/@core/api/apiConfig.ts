import axios, { type AxiosResponse } from 'axios';
import { removeAccessToken } from '../../utils/autUtils';

export default function API<TRequest, TResponse>(
    method: string,
    endPoint: string,
    data: TRequest | null = null
  ): Promise<AxiosResponse<TResponse>> {
    console.log(data,endPoint, method);
    return axios({
      method: method,
      url: endPoint,
    //   headers: {
    //     Authorization: `Bearer ${getAccessToken()}`
    //   },
      data: data,
      params: data && data ? data : null
    })
      .then(
        response => {
            console.log('API Response:', response)
            return response
        }
    )
      .catch(error => {
        if (error.response.status === 401) {
          alert('Session expired! Please, Login again.');
          removeAccessToken();
          window.location.href = `/login`;
          return Promise.reject(new Error('Session expired!'));
        } else {
          throw error.response;
        }
      });
    }

export { API };