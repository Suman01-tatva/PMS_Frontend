import axios from 'axios';
import { getAccessToken, removeAccessToken } from '../../utils/manageAccessToken';

export default function API(method: string, endPoint: string, data: Record<string,undefined> | null = null) {
    return axios({
        method: method,
        url: endPoint,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`
        },
        data: data,
        params: data && data.params ? data.params : null
    })
        .then(function (response) {
            return response;
        })
        .catch((error) => {
            if (error.response.status === 401) {
                alert('Session expired! Please, Login again.');
                removeAccessToken();
                window.location.href = `/login`;
                return false;
            } else {
                throw error.response;
            }
        });
}

export { API };