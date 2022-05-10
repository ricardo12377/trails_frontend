import React, { useState } from 'react'
import { Validation } from '../../types/validation-type'
import * as S from './style'

export default function Form() {
  const [login, setLogin] = useState<Validation>()

  return (
    <S.Form>
      <S.Box>
        <label htmlFor="user">User :</label>
        <input type="text" placeholder="Input your user name" />
      </S.Box>

      <S.Box>
        <label htmlFor="password">Password :</label>
        <input type="password" placeholder="Input your password" />
      </S.Box>

      <S.Section>
        <button>Login</button>
        <button>Register</button>
      </S.Section>
    </S.Form>
  )
}
