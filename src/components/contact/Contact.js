import {Link} from "react-router-dom";

import './Contact.scss';

const Contact = ({contact, chatMessages}) => {
    const {
        id,
        name,
        lastMessageDate,
        avatar
    } = contact;

    const sortedMessages = chatMessages.filter(message => message.userId === id)
        .sort((a, b) => b.messageId - a.messageId);

    const lastMessage = sortedMessages[0].message;

    return (
        <>
            <div className={'ContactWrap'}>

                <div className={'Contact'}>
                    <Link to={`${id}`} state={{id}} className={'Link'}>
                        <div className={'AvatarWithData'}>
                            <div>
                                <img className={'Avatar'} src={avatar} alt="avatar"/>
                                <img className={'CheckContacts'}
                                     src="https://images.vexels.com/media/users/3/157890/isolated/lists/4f2c005416b7f48b3d6d09c5c6763d87-check-mark-circle-icon.png"
                                     alt="check"/>
                            </div>
                            <div className={'ContactData'}>
                                <h4>
                                    {name}
                                </h4>
                                <p>
                                    {lastMessage}
                                </p>

                            </div>
                        </div>
                        <h6 className={'Date'}> {lastMessageDate}</h6>
                    </Link>
                </div>
            </div>
            <hr/>
        </>);
};

export {Contact};
