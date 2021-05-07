import React, { useRef, useState } from 'react'
import firebase from 'firebase';
// import { auth, firestore } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from '../ChatMessage/ChatMessage';
import { auth, db } from '../../firebase';

const ChatRoom = () => {

    const chatEnd = useRef();
    const messagesRef = db.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [mode, setMode] = useState(false);
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });

        setFormValue('');
        chatEnd.current.scrollIntoView({ behavior: 'smooth' });
    };

    const signOut = () => {
        auth.signOut();
    };


    return (
        <>
            <button onClick={signOut} >Logout</button>
            <div>
                {messages &&
                    messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={chatEnd}></span>
            </div>

            <form onSubmit={sendMessage}>
                <input
                    className='chat-input'
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder='Enter the message here'
                />
                <button className='send-btn' type='submit' disabled={!formValue}>
                    🕊️
                </button>
            </form>
        </>
    )
}

export default ChatRoom
