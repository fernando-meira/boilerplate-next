import * as S from './styles';
import Image from 'next/image';

export default function Main() {
  return (
    <S.Wrapper>
      <Image
        width="300"
        height="66"
        src="/img/logo.svg"
        alt="Um átomo e React Avançado escrito ao lado"
      />

      <S.Title>React avançado</S.Title>

      <S.Description>
        TypeScript, ReactJS, Next.js e Styled Components
      </S.Description>

      <S.Illustration
        width="344"
        height="300"
        src="/img/hero-illustration.svg"
        alt="Ilustração de um homem sentado em frente a um computador escrevendo códigos computacionais"
      />
    </S.Wrapper>
  );
}
