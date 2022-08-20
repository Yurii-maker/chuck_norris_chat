import {useEffect} from "react";

import {Contact} from "../contact/Contact";
import {keys} from "../../constants";

const Contacts = ({
                      chatMessages, foundMembers, sortedContacts, setSortedContacts
                  }) => {

    sortedContacts.sort((a, b) => Date.parse(b.lastMessageDate) - Date.parse(a.lastMessageDate));

    useEffect(() => {
        if (foundMembers.length) {
            setSortedContacts(foundMembers
                .sort((a, b) => Date.parse(b.lastMessageDate) - Date.parse(a.lastMessageDate)));

            localStorage.setItem(keys.sortedContacts,
                JSON.stringify([...sortedContacts]))
        }

    }, [setSortedContacts, foundMembers, sortedContacts]);

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
