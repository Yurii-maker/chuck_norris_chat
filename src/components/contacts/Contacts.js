import {useEffect} from "react";

import {Contact} from "../contact/Contact";

const Contacts = ({
                      chatMessages, foundMembers, sortedContacts, setSortedContacts
                  }) => {

    useEffect(() => {
        if (foundMembers.length) {
            setSortedContacts(foundMembers
                .sort((a, b) => Date.parse(b.lastMessageDate) - Date.parse(a.lastMessageDate)));
        }
    }, [setSortedContacts, foundMembers]);

    return (
        <div>
            {sortedContacts.map(contact => <Contact
                key={contact.id}
                contact={contact}
                chatMessages={chatMessages}
            />)}
        </div>);
};

export {Contacts};
