export default function(state = [], action){
    switch(action.type) {
        case "Mos2" :
            return action.payload;
        default:
            return state;
    }
}