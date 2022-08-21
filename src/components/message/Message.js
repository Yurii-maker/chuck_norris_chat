import './Message.scss';

const Message = ({text, avatar}) => {
    const {
        message,
        date,
        fromUser
    } = text;

    let className = '';
    let img = false;

    if (fromUser) {
        className = 'FromUser';
        img = true;
    } else if (!fromUser) {
        className = 'ToUser';
    }

    return (
        <div className={className}>
            {img && <img className={'Avatar'} src={avatar} alt='avatar'/>}
            <div className={'MsgWithDate Mrgn0'}><p className={'Msg'}>{message}</p>
                <h6 className={'Mrgn0'}>{date}</h6>
            </div>
        </div>
    );
};

export {Message};
