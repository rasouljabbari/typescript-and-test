import React from 'react'
import {groupOptions} from './data'
import Select from 'react-select'

export const CustomSelect = () => {
  return(
    <Select
    isMulti
    name={'options'}
    options={groupOptions}
    />
  )
}