import React, { useState } from "react";
import { formSchema } from "./formSchema";

function YupExample(props) {

  const [form, setForm] = useState({
    email : '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email : '',
    password: '',
  })

  const inputHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      await formSchema.validate(form, {
        abortEarly: false
      })
    } catch (error) {
      let allErrors = {}
      error.inner.forEach(err => {
        allErrors[err.path] = err.message
      })
      setErrors(allErrors)
    }

  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">Email</label>
      <input type="email" value={form.email} onChange={inputHandler}/>
      {
        errors.email ? <span>{errors.email}</span> : null
      }
      <br/>
      <label htmlFor="password">Password</label>
      <input type="password" value={form.password} onChange={inputHandler}/>
      {
        errors.password ? <span>{errors.password}</span> : null
      }
      <br/>
      <button type={'submit'}>Send form</button>
    </form>
  );
}

export default YupExample;