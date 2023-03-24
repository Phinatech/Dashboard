import React from "react";
import styled from "styled-components";

const History = () => {
  return (
    <Container>
      <Transactions>Transaction</Transactions>
      <Table>
        <Head>
          <Th>Amount</Th>
          <Th>Time</Th>
          <Th>Reference number</Th>
          <Th>Status</Th>
        </Head>
        <Body>
          <TB>Ugbo Judith chinemerem</TB>
          <TB>Ugbo Judith chinemerem</TB>
          <TB>Ugbo Judith chinemerem</TB>
          <TB>Ugbo Judith chinemerem</TB>
        </Body>
        <Body>
          <TB>Ugbo Judith chinemerem</TB>
          <TB>Ugbo Judith chinemerem</TB>
          <TB>Ugbo Judith chinemerem</TB>
          <TB>Ugbo Judith chinemerem</TB>
        </Body>
        <Body>
          <TB>Ugbo Judith chinemerem</TB>
          <TB>Ugbo Judith chinemerem</TB>
          <TB>Ugbo Judith chinemerem</TB>
          <TB>Ugbo Judith chinemerem</TB>
        </Body>
      </Table>
    </Container>
  );
};

export default History;
const TB = styled.td`
  padding: 10px;
  border: 2px solid black;
`;
const Body = styled.tr``;
const Th = styled.th`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
`;
const Head = styled.tr`
  border-bottom-left-radius: 20px;
`;
const Table = styled.table`
  width: 60rem;
  border-collapse: collapse;
  border-spacing: 0;
  /* background-color: red; */
`;

const Transactions = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
