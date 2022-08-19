import {useForm} from "react-hook-form";

import './ChatSearchForm.scss';

const ChatSearchForm = ({
                            members,
                            foundMembers,
                            foundChats,
                            chatMessages,
                            setFoundChats,
                            setFoundMembers,
                            setSortedContacts,
                        }) => {

    const {register, handleSubmit} = useForm();

    const search = (data) => {
        setFoundMembers(members.filter(contact => contact.name.toLowerCase()
            .includes(data.searchWord.toLowerCase())));

        setFoundChats(chatMessages.filter(msg => msg.message.toLowerCase()
            .includes(data.searchWord.toLowerCase())));

        if (!foundMembers.length && data.searchWord) {
            setSortedContacts([]);
        }

        if (foundChats.length && !data.searchWord.length) {
            setFoundChats([]);
        }
    };

    return (
        <div className={'ChatSearchWrap'}>
            <form onChange={handleSubmit(search)}>
                <input
                    className={'ChatSearchInput'}
                    type="text"
                    placeholder={'Search or start new contact'}
                    {...register('searchWord')}
                />
            </form>
        </div>);
};

export {ChatSearchForm};
