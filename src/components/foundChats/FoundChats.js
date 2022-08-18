import {FoundChat} from "../foundChat/FoundChat";

const FoundChats = ({foundChats}) => {

    return (
        <div>
            {foundChats.map((chat, i) => <FoundChat key={i} chat={chat}/>)}
        </div>
    );
};

export {FoundChats};
