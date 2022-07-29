import React from "react";
import styled from "styled-components";
import AddSchedule from "../component/Schedule/AddSchedule";
import ClassSchedule from "../component/Schedule/ClassSchedule";
import { tableType } from "../types/types";

function Main() {
  const [tableState,setTableState] = React.useState<tableType>("ClassSchedule");
  
  return (
    <>
    <Container>
      <Wrap>
        <NavLayout id="layout">
          <h2 className="title">Class schedule</h2>
          { tableState === "ClassSchedule" && <Button onClick={() => setTableState("AddSchedule")}>Add Class Schedule</Button>}
        </NavLayout>
        <Table>
          {tableState === "ClassSchedule" && <ClassSchedule />}
          {tableState === "AddSchedule" && <AddSchedule setTableState={setTableState}/>}
        </Table>
      </Wrap>
      
    </Container>
    </>
  );
}
export default Main;

const Container = styled.div`
  width: 100%;
  height: 90.9vh;
  background-color: ${props => props.theme.backgroundColor};
`;
const Wrap = styled.div`
  padding: 2%;
  margin: 0 2rem;
`;
const NavLayout = styled.div`
  display: flex;
  justify-content: space-between;

`;
const Button = styled.button`
  cursor: pointer;
  width: 10rem;
  background-color: ${props => props.theme.buttonColor};
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.6rem 0;
`;
const Table = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 3rem;
  background-color: rgb(255,255,255,1);
  box-shadow: 0 4px 4px -3px black;
`;