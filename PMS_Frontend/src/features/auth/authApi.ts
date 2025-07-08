import API from '../../common/api/apiConfig';
import { PUBLIC_ROUTES } from '../../consts/routes';


// PRIVATE_ROUTES.USER_ROUTES.CREATE;
// export const getProduct = () => {
//   return API('GET', product.index)
//     .then((res) => {
//       return res;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

export const loginUser = (data: LoginFormValues) => {
    return API<LoginFormValues, LoginResponse>('POST', PUBLIC_ROUTES.LOGIN, data)
      .then(res => {
        return res.data;
    })    
      .catch(error => {
        throw error;
      });
  };

// export const getEditProduct = (id) => {
//   return API('GET', `${product.index}/${id}`)
//     .then((res) => {
//       return res;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// export const updateProduct = (id, data) => {
//   return API('PUT', `${product.index}/${id}`, data)
//     .then((res) => {
//       return res;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// export const deleteProduct = (id) => {
//   return API('DELETE', `${product.index}/${id}`)
//     .then((res) => {
//       return res;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };
