import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { loginSchema } from "./loginSchema";
import TextInput from "../../formik/components/textInput";
import i18next from "../../../i18n";
import CheckBoxInput from "./CheckBoxInput";
import RangeInput from "./RangeInput";

function Login() {

  const [fields,setFields] = useState({
    first_name: "",
    last_name: "",
    email: "",
    industry: "",
    education_level: "کارشناسی ارشد",
    age_range: "40-49",
    score: 4,
  })

  // useEffect(()=>{
  //   setFields({
  //     first_name: "رسول",
  //     last_name: "جباری",
  //     father_name: "احد",
  //     issued: "بستان آبائ",
  //     birth_certificate_id: 1710290668,
  //   })
  // },[])

  const handleSubmit = (values) => {
    console.log("submitted value : ", values);
  };
  console.log(fields);
  return (
    <Formik
      initialValues={fields}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <TextInput
          label={'نام'}
          name={'first_name'}
          type={'text'}
          placeholder={i18next.t('please enter your first name')}
        />
        <TextInput
          label={'نام خانوادگی'}
          name={'last_name'}
          type={'text'}
          placeholder={i18next.t('please enter your last name')}
        />
        <TextInput
          label={'آدرس ایمیل'}
          name={'email'}
          type={'text'}
          isrequired={'true'}
          placeholder={i18next.t('please enter your email')}
        />
        <TextInput
          label={'صنعت کاری'}
          name={'industry'}
          type={'text'}
          isrequired={'true'}
          placeholder={i18next.t('please enter your industry')}
        />
        <CheckBoxInput
          label={'سطح تحصیلات'}
          id={'education_level'}
          name={'education_level'}
          type={'radio'}
          isrequired={'true'}
          label_list={['دکتری','کارشناسی ارشد','کارشناسی','کاردانی','دیپلم']}
        />

        <CheckBoxInput
          label={'سن'}
          id={'age_range'}
          name={'age_range'}
          type={'radio'}
          isrequired={'true'}
          label_list={['60-69','50-59','40-49','30-39','20-29']}
        />

        <RangeInput
          className="slider"
          label={'امتیاز'}
          name={'score'}
          type={'range'}
          isrequired={'true'}
          min={0}
          max={10}
        />


        <button type={'submit'}>ثبت فرم</button>
      </Form>

    </Formik>
  );
}

export default Login;