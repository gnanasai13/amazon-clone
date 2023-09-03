import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://us-central1-clone-4f76f.cloudfunctions.net/api'
    //'http://127.0.0.1:5001/clone-4f76f/us-central1/api'
});


export default instance;

