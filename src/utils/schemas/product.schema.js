import * as Yup from 'yup';

export const productSchema = Yup.object({
  name: Yup
    .string('Name err')
    .required('Required'),
  price: Yup
    .number('Enter price err')
    .required('Required'),
})