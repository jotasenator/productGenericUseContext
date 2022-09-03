import { types } from "../types/types";

export const productReducer = (state = {}, action) => {

    switch (action.type) {
        case types.product:
            return {
                ...action.payload,
            }
        default:
            return state
    }

}