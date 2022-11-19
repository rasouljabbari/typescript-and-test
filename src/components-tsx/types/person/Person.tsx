import React from 'react'
import { PersonProps } from './Person.types'

export const Person = (props: PersonProps) => {
  return(
    <div>{props.name.first} {props.name.last}</div>
  )
}