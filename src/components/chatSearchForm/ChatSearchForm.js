import {useForm} from "react-hook-form";

import './ChatSearchForm.scss';
import {contacts} from "../../storage";

const ChatSearchForm = ({
                            foundMembers,
                            members,
                            chatMessages,
                            setFoundChats,
                            setFoundMembers,
                            setMembers,
                        }) => {

    const {register, handleSubmit} = useForm();

    const search = (data) => {
        setFoundMembers(members.filter(contact => contact.name.toLowerCase()
            .includes(data.searchWord.toLowerCase())));

        setFoundChats(chatMessages.filter(msg => msg.message.toLowerCase()
            .includes(data.searchWord.toLowerCase())));

        if (foundMembers.length) {
            setMembers([...foundMembers]);
        }

        if(!data.searchWord){
            setMembers([...contacts]);
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
