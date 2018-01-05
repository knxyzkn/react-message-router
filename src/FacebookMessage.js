import React from 'react';
import encodeUrl from 'encodeurl';

class FacebookMessage extends React.Component {
  render() {
    let profileName = this.props.profileName ? this.props.profileName : '';
    return (
      <div>
        <a href={`https://m.me/${profileName}`} style={this.props.style}>{this.props.label}</a>
      </div>
    )
  }
}

export default FacebookMessage;
