import Header from 'components/header'
import React from 'react'
import styled from 'styled-components'
import MainTemplate from 'templates/mainTemplate'

export default function main() {
  return (
    <Main>
      <Header />
      <MainTemplate />
    </Main>
  )
}

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: blue;
  padding: 0;
  margin: 0;
  display: flex;
`
