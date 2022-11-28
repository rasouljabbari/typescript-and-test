import React, { CSSProperties, ReactNode } from 'react'

type ContainerProps = {
  styles: CSSProperties
  children: ReactNode
}

export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>{props.children}</div>
}
