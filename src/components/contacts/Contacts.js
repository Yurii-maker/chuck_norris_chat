import {Contact} from "../contact/Contact";


const Contacts = ({chatMessages, members}) => {
    members.sort((a, b) => Date.parse(b.lastMessageDate) - Date.parse(a.lastMessageDate));

    return (
        <div>
            {members.map(contact => <Contact
                key={contact.id}
                contact={contact}
                chatMessages={chatMessages}
            />)}
        </div>);
};

export {Contacts};
