import {useLocation} from "react-router-dom";
import {useContext} from "react";

import {Message} from "../message/Message";
import {TypeMessageForm} from "../typeMessageForm/TypeMessageForm";
import {MyContext} from "../../pages";
import {contacts} from "../../storage";
import './Chat.scss';

const Chat = () => {
    const {
        chatMessages,
        members,
        setMembers,
        setChatMessages
    } = useContext(MyContext);

    const location = useLocation();
    const pathName = location.pathname.split('/');
    const idFromState = location.state.id;

    const id = +pathName[2] || idFromState;

    const messages = chatMessages.filter(item => item.userId === id);

    const {avatar, name} = contacts.find(user => user.id === id);

    return (
        <div className={'ChatWrap'}>
            <div className={'AvatarWithData CustomProfile BgGrey'}>
                <div className={'MarginL5'}>
                    <img
                        className={'Avatar'}
                        src={avatar}
                        alt="avatar"
                    />
                    <img
                        className={'CheckContacts'}
                        src="https://images.vexels.com/media/users/3/157890/isolated/lists/4f2c005416b7f48b3d6d09c5c6763d87-check-mark-circle-icon.png"
                        alt="check"
                    />
                </div>
                <h2>
                    {name}
                </h2>
            </div>
            <div className={'Messages'}>
                {
                    messages.map((message, i) => <Message key={i} text={message} avatar={avatar}/>)
                }
            </div>
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
