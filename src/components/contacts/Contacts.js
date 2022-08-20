import {Contact} from "../contact/Contact";
import './Contacts.scss';


const Contacts = ({chatMessages, members}) => {
    members.sort((a, b) => Date.parse(b.lastMessageDate) - Date.parse(a.lastMessageDate));

    return (
        <div className={'Contacts'}>
            <h2>Chats</h2>
            {members.map(contact => <Contact
                key={contact.id}
                contact={contact}
                chatMessages={chatMessages}
            />)}
        </div>);
};

export {Contacts};
