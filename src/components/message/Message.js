const Message = ({text}) => {
    const {message, date, fromUser} = text;

    let className = '';

    if (fromUser) {
        className = 'fromUser'
    } else if (!fromUser) {
        className = 'toUser'
    }

    return (
        <div className={className}>
            {message}
            {date}
        </div>
    );
};

export {Message};
