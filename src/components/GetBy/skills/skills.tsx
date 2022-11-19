import React, { useEffect, useState } from 'react'
import { SkillsProps } from './skills.types'

export const Skills = (props: SkillsProps) => {
  const { skills } = props
  const [isLoggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true)
    }, 1001)
  }, [])

  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}

      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </ul>
  )
}
