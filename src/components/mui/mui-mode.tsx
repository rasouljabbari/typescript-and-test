import React from 'react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

function MuiMode() {
  const theme = useTheme()
  return (
    <Typography component={'h1'}>{`${theme.palette.mode} mode`}</Typography>
  )
}

export default MuiMode
