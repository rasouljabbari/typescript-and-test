import * as yup from 'yup'
import './yupLocale'


export const formSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8)
})