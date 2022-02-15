import React from "react";
import styled from "styled-components";

const Tabs = ({ data }) => {
  return (
    <TabsConatiner>
      <TabHeader>
        <h2>Description</h2>
        <h2>Tools</h2>
        <h2>Links</h2>
      </TabHeader>
      <TabContent>{data}</TabContent>
    </TabsConatiner>
  );
};
export default Tabs;

const TabsConatiner = styled.div`
  padding: 0px 10%;
`;

const TabHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 0px 20px;
  }
`;
const TabContent = styled.div`
  width: 100%;
  min-height: 300px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: left;
  padding: 50px;
  margin-top: 50px;
`;
