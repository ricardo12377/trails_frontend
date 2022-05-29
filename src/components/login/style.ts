import styled from 'styled-components'

export const Form = styled.form`
  width: 400px;
  height: 400px;
  background-color: white;
  border: 5px double black;
  margin-top: 7em;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3em;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: black;
`

export const Label = styled.label`
  font-size: 1.5em;
`

export const Input = styled.input`
  width: 50%;
`

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 50px;
  gap: 2em;
  align-items: center;
  justify-content: center;

  button {
    height: 30px;
    width: 100px;
    background-color: black;
    color: white;
  }
`
