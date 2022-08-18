import {axiosService} from "./axiosService";

import {urls} from "../constants";

const chuckNorrisService = {
    getRandomJoke: () => {
        return axiosService.get(`${urls.jokes}`).then(value => value.data)
    }
};

export {chuckNorrisService};
