import React from 'react';
import encodeUrl from 'encodeurl';

class TextMessage extends React.Component {
  render() {
    let body = this.props.textBody ? encodeUrl(this.props.textBody) : '';
    let number = this.props.number ? this.props.number : '';
    return (
      <div>
        <a href={`sms:${number}&body=${body}`} style={this.props.style}>{this.props.label}</a>
      </div>
    )
  }
}

export default TextMessage;
