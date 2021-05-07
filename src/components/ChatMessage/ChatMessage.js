import React from 'react';
import { auth } from '../../firebase';

const ChatMessage = ({ message }) => {
  const { id, text, uid, photoURL } = message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div key={id}>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt='user' />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
