import { types } from "../types/types";

export const idPlusMinusReducer = (state = {}, action) => {

    switch (action.type) {
        case types.idPlusMinus:
            return {
                ...action.payload,
            }

        default:
            return state
    }

}