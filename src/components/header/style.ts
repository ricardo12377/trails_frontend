import styled from 'styled-components'

export const Header = styled.header`
  width: 20%;
  height: 100%;
  background-color: black;
  margin: 0;
  padding: 0;
  font-size: 15px;
`

export const Logo = styled.div`
  margin-top: 2em;
  color: ${(props) => props.color};
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Lista = styled.ul`
  color: ${(props) => props.color};
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 2em;
`

export const Trilhas = styled.strong`
  font-size: 20px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
`

export const Item = styled.li`
  margin-left: 2em;
  list-style: none;
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
`

export const Button = styled.button`
  background-color: ${(props) => props.color};
  color: black;
  width: 80%;
  height: 40px;
  margin-top: 5em;
  margin-left: 2em;
  border-radius: 15px;
  font-size: 15px;
  font-weight: bolder;
`
