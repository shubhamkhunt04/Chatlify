import React, { useEffect, useRef, useState } from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from '../ChatMessage/ChatMessage';
import Navbar from '../AppNavBar/AppNavBar';
import { auth, db } from '../../firebase';

const ChatRoom = ({ themeHandler, themeToggler }) => {
  const messagesRef = db.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(200);
  const chatEnd = useRef();

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    chatEnd.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');
  };

  return (
    <>
      <Navbar themeHandler={themeHandler} themeToggler={themeToggler} />
      <div
        style={{
          marginTop: '65px',
          marginBottom: '60px',
        }}
      >
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={chatEnd}></span>
      </div>

      <form
        onSubmit={sendMessageHandler}
        style={{ marginTop: '200px' }}
        className='message-form'
      >
        <div className='chat-input-box'>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder='Enter the message here'
          />
          <button type='submit' disabled={!formValue.length}>
            🕊️
          </button>
        </div>
      </form>
    </>
  );
};

export default ChatRoom;
