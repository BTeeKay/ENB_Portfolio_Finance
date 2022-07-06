const baseURL = 'http://localhost:9000/api/shares';

const PortfolioService = {

    getPortfolioShares() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    addPortfolioShares(share) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(share),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    updatePortfolioShares(share) {
        return fetch(baseURL + share._id, {
            method: 'PUT',
            body: JSON.stringify(share),
            headers: {
                'Content-type': 'application/json'
            }
        })
    },

    deletePortfolioShares(share) {
        return fetch(baseURL + share._id, {
            method: 'DELETE'
        })
    }
};

export default PortfolioService;