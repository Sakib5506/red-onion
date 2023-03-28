export const cartInitState = []

export const cartReducer = (state, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case 'ADD_TO_CART': {

            return [...state, { ...action.payload.foodItem, qty: action.payload.countState.count, idx: action.payload.imgDisit }]
        }
        case 'REMOVE_FROM_CART': {
            return state.filter(item => item.id !== action.payload);
        }
        case 'RESET': {
            return [];
        }

        default: {
            return state;
        }
    }
}