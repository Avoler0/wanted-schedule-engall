import styled from "styled-components"

export default function ModalJSX({setModalState,setModalDelete}){

  const ModalOk = () => {
    setModalDelete(true)
    setModalState(false)
  }
  const ModalCancel = () => {
    setModalDelete(false)
    setModalState(false)
  }
  return (
    <Container>
      <Wrap>
        <ContentWrap>
          <Title>정말로 삭제하시겠습니까 ?</Title>
        </ContentWrap>
        <ButtonWrap>
          <Button onClick={ModalOk}>확인</Button>
          <Button onClick={ModalCancel}>취소</Button>
        </ButtonWrap>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0,0,0,0.1);

`;
const Wrap = styled.div`
  width: 19rem;
  height: 8rem;
  background-color:${props => props.theme.borderColor};
  border-radius: 1rem;
  border: 1px solid black;
  margin: 15% auto;
  
`;
const ContentWrap = styled.div`
  display:flex;
  justify-content: center;
  padding: 0.5rem 0.8rem;
`;
const Title = styled.div`
  display:inline-block;
  font-size: 22px;
`;
const ButtonWrap = styled.div`
  display:flex;
  justify-content: space-around;
  padding: 2rem;

`;
const Button = styled.button`
  cursor: pointer;
  border: 1px solid black;
  background-color: ${props => props.theme.buttonColor};
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
`;