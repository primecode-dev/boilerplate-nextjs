import * as S from './styles'

const Main = ({
  title = 'Boilerplate Next.js',
  description = 'Projeto iniciado com sucesso, agora só customizar seus componentes e criar as páginas'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/assets/images/logo.svg"
      alt="Escrita Primecode com imagem de um diamente"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
