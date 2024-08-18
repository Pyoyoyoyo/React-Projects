import React, { Component } from "react";

import { MyCoolButton } from "../MyCoolButton";
import "./style.css";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publisher: "",
      comment: ""
    };

    console.log("=====> constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("=====> getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("=====> shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("=====> getSnapshotBeforeUpdate");
  }

  componentDidMount() {
    console.log("=====> componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("=====> componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("=====> componentWillUnmount");
  }

  bichih = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    console.log("=====> Comment Компонент");

    return (
      <div className="CommentContainer">
        <div className="CoolText">{this.state.comment}</div>
        <div>Зохиогч: {this.props.zohiogch}</div>
        <textarea onChange={this.bichih}></textarea>

        <MyCoolButton
          comment={this.state.comment}
          tovchNer="Комментоо үнэнээр нь бичээрэй.."
          text="Хадгал"
        />

        <MyCoolButton
          comment={this.state.comment}
          tovchNer="Комментоо ИЛ ТОДООР бичээрэй.."
          text="Илгээ"
        />
      </div>
    );
  }
}

export default Comment;
