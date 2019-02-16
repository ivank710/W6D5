import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      index: 0
    }
  }

  render() {
    return (
      <ul className="cheese">
        <h1>{this.state.title}
          <article>TITLE 1 CONTENT</article>
        </h1>
        <h1>{this.state.title}
          <article>TITLE 2 CONTENT</article>
        </h1>
        <h1>{this.state.title}
          <article>TITLE 1 CONTENT</article>
        </h1>
      </ul>
    )
  }
}



export default Tab;