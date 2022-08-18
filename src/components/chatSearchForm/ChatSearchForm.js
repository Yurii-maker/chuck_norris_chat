import {useForm} from "react-hook-form";

const ChatSearchForm = ({setFoundContacts, setFoundChats, chatMessages, foundContacts}) => {
    const {register, handleSubmit} = useForm();

    const search = (data) => {
        setFoundContacts(foundContacts.filter(contact => contact.name.toLowerCase()
            .includes(data.searchWord.toLowerCase())));

        setFoundChats(chatMessages.filter(msg => msg.message.toLowerCase()
            .includes(data.searchWord.toLowerCase())));
    };

    return (
        <div>
            <form className={'CharSearchForm'} onChange={handleSubmit(search)}>
                <input type="text" placeholder={'Search or start new contact'} {...register('searchWord')}/>
            </form>
        </div>);
};

export {ChatSearchForm};
