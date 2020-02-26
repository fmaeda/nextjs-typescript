// import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: tomato;
  > span:nth-of-type(2) {
    background: blue;
  }
`;

const Title = styled.h1`
  color: lime;
`;

export default () => (
  <Container>
    <Title>Teste!!!</Title>
    <span>primeiro</span>
    <span>segundo</span>
    <span>terceiro</span>
    <Link href="/teste">Página Teste</Link>
  </Container>
);
