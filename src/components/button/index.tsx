import * as S from './styles'

export default function Button() {
  function Teste() {
    console.log('testando')
  }

  return <S.Button onClick={() => Teste()}>testando</S.Button>
}
