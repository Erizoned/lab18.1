'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, disliked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Согласен, классная картинка.';
    } else if (this.state.disliked) {
      return 'НЕТ, ТЕБЕ НРАВИТСЯ ЭТА КАРТИНКА.';
    }

    return e(
      'div',
      null,
      e('button', { onClick: () => this.setState({ liked: true }) }, 'Like'),
      e('button', { onClick: () => this.setState({ disliked: true }) }, 'Dislike')
    );
  }
}

document.querySelectorAll('.like_button_container').forEach(domContainer => {
  const commentID = parseInt(domContainer.dataset.commentid, 10);
  ReactDOM.render(React.createElement(LikeButton, { commentID }), domContainer);
});
