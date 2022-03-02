const INITIAL_STATE = {
    user: "tayyabfaisal",
}

const app = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATE":
            return ({
                ...state,
                user: action.new_user,
            }
            )
        case "ADD_JSONUSERS":
            return ({
                ...state,
                JSONuser: action.JSONuser
            })
        default:
            return state;
    }

}

export default app;