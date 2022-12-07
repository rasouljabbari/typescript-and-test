import * as yup from 'yup'
import '../yup/yupLocale'

export const registerFormSchema = yup.object().shape({
  name: yup.string().required().matches(/^[\u0600-\u06FF\s]+$/, 'Only persian chars').min(3),
  username: yup.string().required().min(6),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  about: yup.string().required(),
  type: yup.string().required().matches(/(admin|user)/),
  role: yup.boolean().required()
})