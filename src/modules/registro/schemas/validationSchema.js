import * as yup from 'yup';

 export const Schema = yup.object({
    nombre: yup.string().required(),
    email: yup.string().email().required()
});
