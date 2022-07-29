import React from 'react';
import styled from 'styled-components';

export default function Header(){
  return (
    <Head>
      <Inside>
        <Logo>
          <img className="LogoImg" src='https://cdn.imweb.me/thumbnail/20220331/90c7047dc4d68.png' />
        </Logo>
      </Inside>
    </Head>
  )
}

const Head = styled.div`
  width: 100%;
  height: 70px;
  background-color: #44A7C8;
`;
const Inside = styled.div`
  display: table;
  width: 95%;
  height: 100%;
  margin: 0 auto;
  padding-top: 10px;
`;
const Logo =styled.div`
  display: table-cell;
  vertical-align: middle;
  .LogoImg{
    width: 5.4rem;
  }
`;