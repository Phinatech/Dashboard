import React from "react";
import styled from "styled-components";

const Transaction = () => {
  return (
    <Container>
      <Wrapper>
        <Top></Top>
        <Middle>
          <Nav></Nav>
        </Middle>
      </Wrapper>
    </Container>
  );
};

export default Transaction;

const Middle = styled.div``;
const Top = styled.div``;
const Nav = styled.div``;
const Wrapper = styled.div``;
const Container = styled.div``;
