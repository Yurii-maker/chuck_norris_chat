import './Profile.scss';

const Profile = () => {

    return (
        <div className={'Profile'}>
            <img
                className={'Avatar'}
                src="https://pickaface.net/gallery/avatar/unr_alfredo_180417_2114_2kmztrx.png"
                alt="avatar"
            />
            <img
                className={'Check'}
                src="https://images.vexels.com/media/users/3/157890/isolated/lists/4f2c005416b7f48b3d6d09c5c6763d87-check-mark-circle-icon.png"
                alt="check"
            />
        </div>
    );
};

export {Profile};
