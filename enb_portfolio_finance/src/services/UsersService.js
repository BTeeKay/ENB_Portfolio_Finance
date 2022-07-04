const baseURL = 'http://localhost:9000/api/users';

const UsersService = {

    getUser() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    addUser(share) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(share),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    updateUser(share) {
        return fetch(baseURL + share._id, {
            method: 'PUT',
            body: JSON.stringify(share),
            headers: {
                'Content-type': 'application/json'
            }
        })
    },

    deleteUser(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        });
    }
};

export default UsersService;