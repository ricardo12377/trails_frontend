import { UserContext } from 'context/userContext'
import React, { useState, useContext } from 'react'
import { Validation } from '../../types/validation-type'
import * as S from './style'
import Link from 'next/link'

export default function Form() {
  const [login, setLogin] = useState<Validation>({ user: '', password: '' })

  const { validateUser } = useContext(UserContext)

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  return (
    <S.Form>
      <S.Box>
        <label htmlFor="user">User :</label>
        <input
          type="text"
          placeholder="Input your user name"
          onChange={(e) => HandleChange(e)}
        />
      </S.Box>

      <S.Box>
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          placeholder="Input your password"
          onChange={(e) => HandleChange(e)}
        />
      </S.Box>

      <S.Section>
        <button onClick={() => validateUser(login)}>Login</button>
        <Link href="/register">
          <button>Register</button>
        </Link>
      </S.Section>
    </S.Form>
  )
}
