import {Outlet} from "react-router-dom";
import {createContext, useState} from "react";

import {Main} from "../components";
import {contacts, messages} from "../storage";
import {keys} from "../constants";
import './HomePage.scss';

export const MyContext = createContext({});

const HomePage = () => {
    const messagesFromLS = JSON.parse(localStorage.getItem(keys.messages)) || messages;
    const contactsFromLS = JSON.parse(localStorage.getItem(keys.contacts)) || contacts;

    const [chatMessages, setChatMessages] = useState([...messagesFromLS]);
    const [foundContacts, setFoundContacts] = useState([...contactsFromLS]);
    const [foundChats, setFoundChats] = useState([]);

    return (
        <div className={'HomePage'}>
            <MyContext.Provider value={{
                chatMessages,
                setChatMessages,
                foundContacts,
                setFoundContacts}}>
                <Main chatMessages={chatMessages}
                      foundContacts={foundContacts}
                      setFoundContacts={setFoundContacts}
                      foundChats={foundChats}
                      setFoundChats={setFoundChats}/>
                <Outlet/>
            </MyContext.Provider>
        </div>
    );
};

export {HomePage};
