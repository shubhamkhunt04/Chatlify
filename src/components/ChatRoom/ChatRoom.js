import React, { useEffect, useRef, useState } from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from '../ChatMessage/ChatMessage';
import { auth, db } from '../../firebase';

const ChatRoom = () => {
  const chatEnd = useRef();
  const messagesRef = db.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

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

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      <button onClick={signOut}>Logout</button>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={chatEnd}></span>
      </div>

      <form onSubmit={sendMessageHandler}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder='Enter the message here'
        />
        <button type='submit' disabled={!formValue.length}>
          🕊️
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
