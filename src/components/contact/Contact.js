import {Link} from "react-router-dom";

import './Contact.css';

const Contact = ({contact, chatMessages}) => {
    const {id, name, lastMessageDate} = contact;

    const sortedMessages = chatMessages.filter(message => message.userId === id)
        .sort((a, b) => b.messageId - a.messageId);

    const lastMessage = sortedMessages[0].message;

    return (
        <div className={'Contact'}>
            <Link to={`${id}`} state={{id}}>
                <div>{name} -- {lastMessageDate}</div>
                <div>{lastMessage}</div>
            </Link>
            <hr/>
        </div>);
};

export {Contact};
