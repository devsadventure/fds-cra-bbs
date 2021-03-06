import React, {Component} from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px;
  box-sizing: border-box;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-size: 3em;
  color: blue;
`;

const Button = styled.button`
  background-color: palevioletred;
  color: white;
  padding: 1em;
  &:hover{
    cursor: pointer;
    background-color: green;
  }
`;

export default class LoginScreen extends Component {
  handleLogInClick = e => {
    this.props.onLogInClick();
  }
  render() {
    return (
      <Wrap>
        <Logo>BBS</Logo>
      <Button onClick={this.handleLogInClick}>구글로 로그인</Button>
      </Wrap>
    )
  }
}
