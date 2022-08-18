import {Profile} from "../profile/Profile";
import {ChatSearchForm} from "../chatSearchForm/ChatSearchForm";
import {Contacts} from "../contacts/Contacts";
import {FoundChats} from "../foundChats/FoundChats";
import './Main.scss'

const Main = ({chatMessages, foundChats, foundContacts, setFoundChats, setFoundContacts}) => {

    return (
        <div className={'Main'}>
            <Profile/>
            <ChatSearchForm
                setFoundContacts={setFoundContacts}
                setFoundChats={setFoundChats}
                chatMessages={chatMessages}
                foundContacts={foundContacts}
            />
            <Contacts foundContacts={foundContacts} chatMessages={chatMessages}/>
            <FoundChats foundChats={foundChats}/>
        </div>
    );
};

export {Main};
