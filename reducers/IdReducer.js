export default function(state = [], action){
    switch(action.type) {
        case "Mos" :
            return action.payload;
        default:
            return state;
    }
}