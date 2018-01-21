import React, {Component} from 'react';
import * as firebase from 'firebase';
import LoginScreen from './LoginScreen';
import ArticleListScreen from './ArticleListScreen';

export default class BBS extends Component {
  state = {
    page: 'login'
  }
  componentDidMount(){
    var config = {
      apiKey: "AIzaSyAgKvjveLSewp9DwNd7j9Fnw91BzRMyFb4",
      authDomain: "fds-cra-bbs-practice.firebaseapp.com",
      databaseURL: "https://fds-cra-bbs-practice.firebaseio.com",
      projectId: "fds-cra-bbs-practice",
      storageBucket: "fds-cra-bbs-practice.appspot.com",
      messagingSenderId: "311446115408"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          page: 'list'
        });
      } else {
        this.setState({
          page: 'login'
        });
      }
    });
  }

  handleLogInClick = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOutClick = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        {
          this.state.page === 'login'
          ? <LoginScreen onLogInClick = {this.handleLogInClick} />
          : this.state.page === 'list'
          ? <ArticleListScreen onLogOutClick = {this.handleLogOutClick} />
          : null
        }
      </div>
    )
  }
}
