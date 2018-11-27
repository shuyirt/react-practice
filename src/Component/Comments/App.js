import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import Comment from './Comment';
import ApproveCard from './ApproveCard';

export default class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <ApproveCard>
          <Comment
            author="Sam"
            timeAgo="Today at 5:00pm"
            text="Oh no myaskah"
            avatar={faker.image.avatar()}
          />
        </ApproveCard>
        <ApproveCard>
          <Comment
            author="Sushi"
            timeAgo="Yesterday at 3:29am"
            text="hia daldjkajdklf r"
            avatar={faker.image.avatar()}
          />
        </ApproveCard>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
