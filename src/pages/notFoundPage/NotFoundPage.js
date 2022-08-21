import {useLocation} from "react-router-dom";

const NotFoundPage = () => {
    const location = useLocation()

    return (
        <div>
            {location.href}
        </div>
    );
};

export {NotFoundPage};
