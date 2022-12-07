import * as yup from 'yup'
import '../yupLocale'

export const loginSchema = yup.object().shape({
  first_name: yup.string().matches(/^[\u0600-\u06FF\s]+$/).min(3),
  last_name: yup.string().matches(/^[\u0600-\u06FF\s]+$/).min(3),
  email: yup.string().required().email(),
  industry: yup.string().required().matches(/^[\u0600-\u06FF\s]+$/),
  education_level: yup.string().required().matches(/(کاردانی|کارشناسی|دیپلم|کارشناسی ارشد|دکتری)/),
  age_range: yup.string().required().matches(/(20-29|30-39|40-49|50-59|60-69)/),
  score: yup.string().required(),
})