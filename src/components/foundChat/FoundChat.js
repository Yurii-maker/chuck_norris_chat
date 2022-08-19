import {Link} from "react-router-dom";

const FoundChat = ({chat}) => {
    const {
        userId: id,
        message
    } = chat;

    return (
        <div>
            <Link to={`${id}`} state={{id}}>
                {message}
            </Link>
            <hr/>
        </div>);
};

export {FoundChat};
