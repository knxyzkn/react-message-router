# react-message-router
React component that routes to messaging apps such as iMessage, Whatsapp, and Facebook Messenger.

There are four react components:
* **TextMessage**: Routes to the default messaging app on the device, such as iMessage in iOS
* **WhatsappMessage**: Routes to Whatsapp
* **FacebookMessage**: Routes to Facebook Messenger
* **FBMessengerShareLink**: Routes to Facebook Messenger and accepts only URLs/Links to be shared


## Demo
Live demo coming soon!


## Installation
Using [npm](https://www.npmjs.com/):
```
npm install --save react-message-router
```


## Usage
```javascript
import React from 'react';
import { TextMessage } from 'react-message-router';
import { WhatsappMessage } from 'react-message-router';
import { FacebookMessage } from 'react-message-router';
import { FBMessengerShareLink } from 'react-message-router';

class Example extends React.Component {

  render() {
    return (
      <div>

         <TextMessage
           label='Message Me!' // Required
           number='+15556667777'
           textBody='Hello! Want to join me for lunch today?'
           style={{fontSize: '20px'}}
         />

         <WhatsappMessage
           label='Whatsapp Me!' // Required
           number='+15556667777'
           textBody='Hello! Want to join me for lunch today?'
           style={{color: '#2CA25F'}}
         />

        <FacebookMessage
          label='Facebook Message Me!' // Required
          profileName='first.last.5'
          style={{textDecoration: 'none'}}
        />

        <FBMessengerShareLink
          label='FB Messenger Link Share!' // Required
          link='https://www.github.com'
          style={{textDecoration: 'none'}}
        />

      </div>
    )
  }
}

export default Example;
```


## TextMessage
The `TextMessage` component accepts the following props

Name  | Type | Req/Opt | Description
--- | --- | --- | ---
`label` | string | **Required** | Label to be displayed
`number` | string | Optional | Number of the person to whom the text must be sent. You may include standard phone number characters such as + ( ) . and -. If you want the user to pick one or more recipients from his/her contact list, then do not pass this prop
`textBody` | string | Optional | Body of the text message
`style` | object | Optional | Override the inline-styles of the root element

The `TextMessage` component does the following
* Opens the default messaging app on the device
* Pre-fills the recipient's phone number, if the `number` prop is provided
* Pre-fills the body of the text message, if the `textBody` prop is provided
* The user may then hit *Send* to send the message

---

## WhatsappMessage
The `WhatsappMessage` component accepts the following props

Name  | Type | Req/Opt | Description
--- | --- | --- | ---
`label` | string | **Required** | Label to be displayed
`number` | string | Optional | Number of the person to whom the text must be sent. You may include standard phone number characters such as + ( ) . and -. If you want the user to pick one or more recipients from his/her contact list, then do not pass this prop
`textBody` | string | Optional | Body of the text message
`style` | object | Optional | Override the inline-styles of the root element

The `WhatsappMessage` component does the following
* Opens the Whatsapp messaging app on the device
* If the `number` prop is provided, the recipient's phone number field is pre-filled. If the `number` prop is not provided, the user will be first asked to pick one or more recipients from the contact list
* Pre-fills the body of the text message, if the `textBody` prop is provided
* The user may then hit *Send* to send the message

---

## FacebookMessage
The `FacebookMessage` component accepts the following props

Name  | Type | Req/Opt | Description
--- | --- | --- | ---
`label` | string | **Required** | Label to be displayed
`profileName` | string | Optional | Facebook profiles/pages have a profile name that is given to them by Facebook. Facebook URLs are in the format: `https://www.facebook.com/first.last.5`. The `profileName` in this example is `first.last.5`
`style` | object | Optional | Override the inline-styles of the root element

The `FacebookMessage` component does the following
* Opens the Facebook Messenger app on the device
* If the `profileName` prop is provided and is valid, the conversation between the user and the recipient will be started or shown (if the conversation has already started). If the `profileName` prop is not provided, then nothing else happens after the Messenger app is opened
* The user may then write the text message and hit *Send* to send the message.

---

## FBMessengerShareLink
The `FBMessengerShareLink` component accepts the following props

Name  | Type | Req/Opt | Description
--- | --- | --- | ---
`label` | string | **Required** | Label to be displayed
`link` | string | Optional | URL or link to be attached in the message
`style` | object | Optional | Override the inline-styles of the root element

The `FBMessengerShareLink` component does the following
* Opens the Facebook Messenger app on the device
* If the `link` prop is provided, it will be attached to the message. If the `link` prop is not provided, then nothing else happens after the Messenger app is opened
* The user may then write the text message to accompany the attached link
* The user will be asked to pick one or more recipients from the contact list to send the message

---

## License
MIT
