import {Contact} from "../contact/Contact";

const Contacts = ({foundContacts, chatMessages}) => {
    const sortedContacts = foundContacts.sort((a, b) => Date.parse(b.lastMessageDate) - Date.parse(a.lastMessageDate));

    return (
        <div>
            {sortedContacts.map(contact => <Contact
                key={contact.id}
                contact={contact}
                chatMessages={chatMessages}/>)}
        </div>);
};

export {Contacts};
