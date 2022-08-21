import {Profile} from "../profile/Profile";
import {ChatSearchForm} from "../chatSearchForm/ChatSearchForm";
import {Contacts} from "../contacts/Contacts";
import {FoundChats} from "../foundChats/FoundChats";
import './Main.scss'

const Main = ({
                  chatMessages,
                  foundMembers,
                  members,
                  foundChats,
                  setFoundChats,
                  setFoundMembers,
                  setMembers
              }) => {

    return (
        <div className={'Main'}>
            <Profile/>
            <ChatSearchForm
                foundMembers={foundMembers}
                members={members}
                chatMessages={chatMessages}
                setFoundChats={setFoundChats}
                setFoundMembers={setFoundMembers}
                setMembers={setMembers}
            />
            <Contacts
                chatMessages={chatMessages}
                members={members}
            />
            <FoundChats foundChats={foundChats}/>
        </div>
    );
};

export {Main};
