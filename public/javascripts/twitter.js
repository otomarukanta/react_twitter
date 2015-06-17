var Tweet = React.createClass({
  render: function() {
    return (
      <div className="tweet">
        <h2 className="tweetAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var TweetList = React.createClass({
  render: function() {
    return (
      <div className="tweetList">
        <Tweet author="test user">This tweet is test.</Tweet>
        <Tweet author="taro hanako">This is test tweet.</Tweet>
      </div>
    );
  }
});

var TweetBox = React.createClass({
  render: function() {
    return (
      <div className="tweetBox">
        <TweetList />
      </div>
    );
  }
});

React.render(
    <TweetBox />,
    document.getElementById('content')
);
