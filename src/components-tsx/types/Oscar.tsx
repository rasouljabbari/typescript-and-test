import React, {ReactNode} from 'react'

type OscarProps = {
  children: ReactNode
}


export const Oscar = (props: OscarProps) => {
  return(
    <div>{props.children}</div>
  )
}