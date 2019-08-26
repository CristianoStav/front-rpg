export default {

    get: async (url) => {
        const req = await fetch(url, {
            method: "GET",
            headers: { "Content-type": "application/json" }
        })
            .then(resp => {
                return resp.json().then(r => r);
            });

        return req;
    }
};