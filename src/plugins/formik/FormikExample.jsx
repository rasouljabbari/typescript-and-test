import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TextInput from "./components/textInput";

function FormikExample() {

  const validateHandler = (values) => {
    let errors = {};

    if (values.name === "") {
      errors.name = "the name field is required.";
    } else if (values.name.length < 4) {
      errors.name = "the name must more than 4 char.";
    }

    if (values.username === "") {
      errors.username = "the username field is required.";
    }

    if (values.email === "") {
      errors.email = "the email field is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "the email field must be email format.";
    }

    if (values.password === "") {
      errors.password = "the password field is required.";
    }

    return errors;
  };

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
      validate={validateHandler}
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