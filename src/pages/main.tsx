import Header from 'components/header'
import React from 'react'
import styled from 'styled-components'

export default function main() {
  return (
    <Main>
      <Header />
    </Main>
  )
}

const Main = styled.div`
  height: 100vh;
  width: 100%;
  background-color: yellow;
  padding: 0;
  margin: 0;
`
