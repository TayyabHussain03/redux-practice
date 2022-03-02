const getData = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch({
                type: "ADD_JSONUSERS",
                JSONuser: json
            }))

    }
}

export default getData;