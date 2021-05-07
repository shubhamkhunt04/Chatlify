import React from 'react';
import { auth, db } from '../../firebase';

const ChatMessage = (props) => {
    const { id, text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    const messagesRef = db.collection('messages');

    const deleteMessage = async () => {
        await messagesRef.doc(id).delete();
    };

    return (
        <div>
            {
                messageClass === 'sent' ? (

                    <h1>{text}</h1>
                ) :
                    (
                        <h1>No</h1>
                    )
            }
        </div>
    );
};

export default ChatMessage;
