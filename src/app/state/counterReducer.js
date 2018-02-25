
// SAMPLE JSOM

// {
//     type:'INCREMENT',
//     payload:{
//         value:10
//     }
// }



const INTIAL_STATE = 0;

export default function counterReducer(state = INTIAL_STATE, action) {

    console.log("counterReducer", state, action);

    switch (action.type) {
        case "INCREMENT":
            return state + action.payload.value;
        case "DECREMENT":
            return state - action.payload.value;
        case "RESET":
            return INTIAL_STATE;
        default:
            return state;
    }
}