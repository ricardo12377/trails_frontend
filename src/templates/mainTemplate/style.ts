import styled from 'styled-components'

export const MainTemplate = styled.body`
  width: 80%;
  height: 100%;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`

export const Section = styled.div`
  width: 95%;
  height: 70px;
  background-color: ${(props) => props.color};
  margin-top: 2em;
  display: flex;
  align-items: center;
  padding: 1em;
  border-radius: 15px;
`

export const Tittle = styled.h1`
  font-weight: bolder;
`

export const Body = styled.div`
  background-color: ${(props) => props.color};
  width: 95%;
  margin-top: 2em;
  height: 300px;
  border-radius: 15px;
  padding: 1em;
  font-size: 19px;
`
export const Description = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`

export const StrongText = styled.strong`
  margin-bottom: 1em;
`

export const Link = styled.a`
  text-decoration: none;
  background-color: black;
  color: ${(props) => props.color};
  width: 80px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`
