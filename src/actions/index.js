import axios from "axios";

export const callApi = (email, password, history) => {

	const credentials = { "email":email, "password":password };

	axios.post("https://reqres.in/api/login", credentials)
	.then(res=>{ var token = res.data.token; localStorage.setItem("token", token); history.push('/home'); })
	.catch(err=>{ console.log(err); });

    return {
        type: 'apiResponse',
        payload: {
        	token: localStorage.getItem("token"),
        }
    }
};

export const getToken = () => {

	return {
		type: 'getToken',
		payload: {
			token: localStorage.getItem("token"),
		}
	}

}