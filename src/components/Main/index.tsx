import * as S from './styles';
import Image from 'next/image';

import logo from '~/assets/images/logo.svg';
import illustration from '~/assets/images/hero-illustration.svg';

export default function Main() {
  return (
    <S.Wrapper>
      <Image src={logo} alt="Um átomo e Reacr Avançado escrito ao lado" />

      <S.Title>React avançado</S.Title>

      <S.Description>
        TypeScript, ReactJS, Next.js e Styled Components
      </S.Description>

      <S.Illustration
        src={illustration}
        alt="Ilustração de um homem sentado em frente a um computador escrevendo códigos computacionais"
      />
    </S.Wrapper>
  );
}
