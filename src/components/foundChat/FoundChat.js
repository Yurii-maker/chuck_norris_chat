import {Link} from "react-router-dom";

import './FoundChat.scss';
import {contacts} from "../../storage";

const FoundChat = ({chat}) => {
    const {
        userId: id,
        message,
        date
    } = chat;

    const {
        name,
        avatar
    } = contacts.find(contact => contact.id === id)

    return (
        <div className={'FoundChat'}>
            <Link to={`${id}`} state={{id}}>
                <div className={'AvatarWithData'}>
                    <div>
                        <img className={'Avatar'} src={avatar} alt="avatar"/>
                        <img className={'CheckContacts'}
                             src="https://images.vexels.com/media/users/3/157890/isolated/lists/4f2c005416b7f48b3d6d09c5c6763d87-check-mark-circle-icon.png"
                             alt="check"
                        />
                    </div>
                    <div className={'ContactData'}>
                        <h4>
                            {name}
                        </h4>
                        <p>
                            {message}
                        </p>
                    </div>
                </div>
                <h6 className={'Date'}> {date}</h6>
            </Link>
            <hr/>
        </div>);
};

export {FoundChat};
