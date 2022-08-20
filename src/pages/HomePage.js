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
    const [members, setMembers] = useState([...contactsFromLS]);
    const [foundChats, setFoundChats] = useState([]);
    const [foundMembers, setFoundMembers] = useState([]);

    return (
        <div className={'HomePage'}>
            <MyContext.Provider
                value={{
                    chatMessages,
                    members,
                    setChatMessages,
                    setMembers
                }}>
                <Main
                    chatMessages={chatMessages}
                    foundMembers={foundMembers}
                    members={members}
                    foundChats={foundChats}
                    setFoundChats={setFoundChats}
                    setFoundMembers={setFoundMembers}
                    setMembers={setMembers}
                />
                <Outlet/>
            </MyContext.Provider>
        </div>
    );
};

export {HomePage};
