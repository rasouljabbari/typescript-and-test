import React from "react";
import { Form, Formik } from "formik";
import TextInput from "./components/textInput";
import { registerFormSchema } from "./registerFormSchema";


function FormikExample() {

  const handleSubmit = (values) => {
    console.log("submitted value : ", values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        username: "",
        email: "",
        password: "",
        about: "",
        type: "admin",
        role: false
      }}
      validationSchema={registerFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <TextInput
          label={'Your name'}
          name={'name'}
          type={'text'}
          placeholder={'please enter your name'}
        />

        <TextInput
          label={'Username'}
          name={'username'}
          type={'text'}
          placeholder={'please enter username'}
        />

        <TextInput
          label={'Email address'}
          name={'email'}
          type={'email'}
          placeholder={'please enter email address'}
        />

        <TextInput
          label={'Password'}
          name={'password'}
          type={'password'}
          placeholder={'please enter password'}
        />

        <TextInput
          label={'About me'}
          name={'about'}
          rows={5}
          as={"textarea"}
          placeholder={'please enter about'}
        />

        <TextInput
          label={'User Type'}
          name={'type'}
          rows={5}
          as={"select"}
        >
          <option value="normal">Normal</option>
          <option value="admin">Admin</option>
        </TextInput>

        <TextInput
          label={'Role'}
          id={'role'}
          name={'role'}
          type={'checkbox'}
        />

        <button>Send</button>
      </Form>
    </Formik>
  );
}

export default FormikExample;