import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home,Promotion,Study,MyPage, AnswerForm } from '../pages';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/event" component={Promotion} />
        <Route exact path="/study" component={Study} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/answer" component={AnswerForm} />
      </div>
    );
  }
}

export default App;
