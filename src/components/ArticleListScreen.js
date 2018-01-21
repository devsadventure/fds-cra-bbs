import React, { Component } from 'react';

export default class LoginScreen extends Component {
  handleLogOutClick = e => {
    this.props.onLogOutClick();
  }
  render() {
  return (
    <div>게시글 목록
    <button onClick={this.handleLogOutClick}>로그아웃</button>
    </div>
  )
  }
}
