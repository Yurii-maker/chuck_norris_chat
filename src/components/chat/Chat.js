import {useLocation} from "react-router-dom";
import {useContext} from "react";

import {Message} from "../message/Message";
import {TypeMessageForm} from "../typeMessageForm/TypeMessageForm";
import {MyContext} from "../../pages";

const Chat = () => {
    const {
        chatMessages,
        members,
        setMembers,
        setChatMessages
    } = useContext(MyContext);

    const location = useLocation();
    const pathName = location.pathname.split('/');
    const id = +pathName[2];

    const messages = chatMessages.filter(item => item.userId === id);

    return (
        <div>
            {
                messages.map((message, i) => <Message key={i} text={message}/>)
            }
            <TypeMessageForm
                id={id}
                chatMessages={chatMessages}
                members={members}
                setChatMessages={setChatMessages}
                setMembers={setMembers}
            />
        </div>);
};

export {Chat};
