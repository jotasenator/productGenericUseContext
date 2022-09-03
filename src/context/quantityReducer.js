import { types } from "../types/types";

export const quantityReducer = (state = {}, action) => {

    switch (action.type) {
        case types.quantity:
            return {
                ...action.payload,
            }

        default:
            return state
    }

}