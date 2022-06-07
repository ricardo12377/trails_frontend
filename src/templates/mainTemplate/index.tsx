import React from 'react'
import { primary } from 'styles/global-colors'
import * as S from './style'

export default function MainTemplate() {
  return (
    <S.MainTemplate>
      <S.Section color={primary}>
        <S.Tittle>HTML</S.Tittle>
      </S.Section>

      <S.Body color={primary}>
        <S.Description>
          <S.StrongText>Documentação HTML na W3Schools:</S.StrongText>
          <S.Link href="https://www.w3schools.com/html/" color={primary}>
            Open
          </S.Link>
        </S.Description>

        <S.Description>
          <S.StrongText>Trilha Discovery RocketSeat:</S.StrongText>
          <S.Link href="https://www.rocketseat.com.br/" color={primary}>
            Open
          </S.Link>
        </S.Description>
      </S.Body>
    </S.MainTemplate>
  )
}
