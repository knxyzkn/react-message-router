import React from 'react';
import encodeUrl from 'encodeurl';

class FBMessengerShareLink extends React.Component {
  render() {
    let link = this.props.link ? encodeUrl(this.props.link) : '';
    return (
      <div>
        <a href={`fb-messenger://share/?link=${link}`} style={this.props.style}>{this.props.label}</a>
      </div>
    )
  }
}

export default FBMessengerShareLink;
