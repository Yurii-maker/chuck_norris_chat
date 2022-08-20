import {FoundChat} from "../foundChat/FoundChat";
import './FoundChats.scss'

const FoundChats = ({foundChats}) => {

    return (
        <div className={'FoundChats'}>
            {!!foundChats.length && <h2>Messages</h2>}
            {foundChats.map((chat, i) => <FoundChat key={i} chat={chat}/>)}
        </div>
    );
};

export {FoundChats};
