const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'apiResponse':
            return action.payload;
            break;

        case 'getToken':
        	return action.payload;
        	break;
    }
    return initialState;
}