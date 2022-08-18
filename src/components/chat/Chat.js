import {useLocation} from "react-router-dom";
import {useContext} from "react";

import {Message} from "../message/Message";
import {TypeMessageForm} from "../typeMessageForm/TypeMessageForm";
import {MyContext} from "../../pages";

const Chat = () => {
    const {
        chatMessages,
        setChatMessages,
        foundContacts,
        setFoundContacts
    } = useContext(MyContext);

    const location = useLocation();

    const {id} = location.state;

    const messages = chatMessages.filter(item => item.userId === id);

    return (
        <div>
            {
                messages.map((message, i) => <Message key={i} text={message}/>)
            }
            <TypeMessageForm
                id={id}
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
                setFoundContacts={setFoundContacts}
                foundContacts={foundContacts}
            />
        </div>);
};

export {Chat};
