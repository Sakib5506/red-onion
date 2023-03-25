export const countInitState = {
    count: 1,
};

export const countReducer = (state, action) => {
    switch (action.type) {

        case 'INCREASE_COUNT': {
            return {
                count: state.count + 1
            }
        }
        case 'DECREASE_COUNT': {

            if (state.count > 1) {
                return {
                    count: state.count - 1
                }
            }
        }
        case 'RESET': {
            return {
                count: 1
            }
        }

        default: {
            return state;
        }

    }
}