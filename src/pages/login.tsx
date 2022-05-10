import Form from 'components/form'
import React from 'react'
import styled from 'styled-components'

export default function login() {
  return (
    <Body>
      <Form />
    </Body>
  )
}

const Body = styled.body`
  background-color: #fc3f5b;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
