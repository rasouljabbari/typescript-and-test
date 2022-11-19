import React from 'react'

type InputProps = {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// export const Input = (props: InputProps) => {
export const Input = ({ value, handleChange }: InputProps) => {
  return(
    // <input type='text' value={props.value} onChange={props.handleChange}/>
    <input type='text' value={value} onChange={handleChange}/>
  )
}