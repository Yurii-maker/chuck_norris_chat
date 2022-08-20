import {Profile} from "../profile/Profile";
import {ChatSearchForm} from "../chatSearchForm/ChatSearchForm";
import {Contacts} from "../contacts/Contacts";
import {FoundChats} from "../foundChats/FoundChats";
import './Main.scss'

const Main = ({
                  chatMessages,
                  foundChats,
                  members,
                  foundMembers,
                  sortedContacts,
                  setFoundChats,
                  setFoundMembers,
                  setSortedContacts
              }) => {

    return (
        <div className={'Main'}>
            <Profile/>
            <ChatSearchForm
                foundMembers={foundMembers}
                foundChats={foundChats}
                members={members}
                chatMessages={chatMessages}
                setFoundChats={setFoundChats}
                setFoundMembers={setFoundMembers}
                setSortedContacts={setSortedContacts}
            />
            <Contacts
                chatMessages={chatMessages}
                foundMembers={foundMembers}
                sortedContacts={sortedContacts}
                setSortedContacts={setSortedContacts}
            />
            <FoundChats foundChats={foundChats}/>
        </div>
    );
};

export {Main};
