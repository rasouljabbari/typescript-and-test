import * as yup from 'yup'
import '../../i18n'
import i18next from "../../i18n";

yup.setLocale({
  mixed: {
    required: ({ path }) => i18next.t("validation.required", { field: i18next.t(`validation.fields.${path}`) })
  },
  string: {
    min: ({ path, min }) => `حداقل طول ${path} ${min} کاراکتر می باشد`
  }
});

export const registerFormSchema = yup.object().shape({
  name: yup.string().required().min(3),
  username: yup.string().required().min(6),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  about: yup.string().required(),
  type: yup.string().required().matches(/(admin|user)/),
  role: yup.boolean().required()
})