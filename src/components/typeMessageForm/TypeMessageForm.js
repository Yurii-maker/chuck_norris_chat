import {useForm} from "react-hook-form";

import {chuckNorrisService} from "../../services";
import {keys} from "../../constants";


const TypeMessageForm = ({id, chatMessages, setChatMessages, foundContacts, setFoundContacts}) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const contactsSort = () => {
        const sortedContacts = [];

        for (const contact of foundContacts) {
            if (contact.id === id) {
                contact.lastMessageDate = Date().slice(4, 21)
                sortedContacts.push(contact)
            } else {
                sortedContacts.push(contact)
            }
        }
        setFoundContacts([...sortedContacts]);

        localStorage.setItem(keys.contacts, JSON.stringify([...sortedContacts]));
    };
    const sendMessageGetResponse = (data) => {
        if (!data.message) {
            return;
        }
        const newMessage = {
            userId: id,
            messageId: Date.now(),
            fromUser: false,
            message: data.message,
            date: Date().slice(4, 21)
        };

        const chatMessageWithNewMessage = [...chatMessages, newMessage];
        setChatMessages([...chatMessages, newMessage]);
        localStorage.setItem(keys.messages, JSON.stringify([...chatMessages, newMessage]));

        contactsSort();
        reset();

        setTimeout(() => {
            chuckNorrisService.getRandomJoke().then(response => {
                const messageFromChuck = {
                    userId: id,
                    messageId: Date.now(),
                    fromUser: true,
                    message: response.value,
                    date: Date().slice(4, 21)
                }
                setChatMessages([...chatMessageWithNewMessage, messageFromChuck]);
                localStorage.setItem(keys.messages, JSON.stringify([...chatMessageWithNewMessage, messageFromChuck]));
            }).catch(e => alert(e));

            contactsSort();
        }, 10000);
    };
    return (
        <div>
            <form className={'CharSearchForm'} onSubmit={handleSubmit(sendMessageGetResponse)}>
                <input type="text" placeholder={'Type your message'} {...register('message')}/>
                <button>Send</button>
            </form>

        </div>
    );
};

export {TypeMessageForm};
