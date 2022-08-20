import {Link} from "react-router-dom";

import './FoundChat.scss';

const FoundChat = ({chat}) => {
    const {
        userId: id,
        message
    } = chat;

    return (
        <div className={'FoundChat'}>
            <Link to={`${id}`}>
                <p>{message}</p>
            </Link>
            <hr/>
        </div>);
};

export {FoundChat};
