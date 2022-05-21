import React from 'react'
import * as S from './style'
import { primary } from 'styles/global-colors'
import { GiMapleLeaf, GiTrail } from 'react-icons/gi'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import { BiServer } from 'react-icons/bi'
import { AiOutlineLayout } from 'react-icons/ai'

export default function Header() {
  return (
    <S.Header>
      <S.Logo color={primary}>
        <GiMapleLeaf size={60} />
      </S.Logo>

      <S.Lista color={primary}>
        <S.Trilhas>
          <GiTrail /> Trilhas
        </S.Trilhas>

        <S.Item>
          <AiOutlineLayout size={20} />
          Front-end
        </S.Item>
        <S.Item>
          <BiServer size={20} /> Back-end
        </S.Item>
        <S.Item>
          <SiJavascript size={20} /> JavaScript
        </S.Item>
        <S.Item>
          <SiTypescript size={20} /> TypeScript
        </S.Item>
      </S.Lista>

      <S.Button color={primary}>Leave</S.Button>
    </S.Header>
  )
}
