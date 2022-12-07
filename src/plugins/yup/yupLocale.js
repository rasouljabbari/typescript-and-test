import * as yup from "yup";
import i18next from "../../i18n";

yup.setLocale({
  mixed: {
    required: ({ path }) => i18next.t("validation.required", { field: i18next.t(`validation.fields.${path}`) })
  },
  string: {
    min: ({ path, min }) => `حداقل طول ${i18next.t(`validation.fields.${path}`)} ${min} کاراکتر می باشد`,
    matches: ({ path}) => `فیلد ${i18next.t(`validation.fields.${path}`)} باید فارسی وارد شود`,
    max: ({ path, max }) => `حداکثر طول ${i18next.t(`validation.fields.${path}`)} ${max} کاراکتر می باشد`,
  },
});