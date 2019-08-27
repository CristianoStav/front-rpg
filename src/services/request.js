export default {
    /**
     * @param url Url da requisição.
     * @param method Método http a ser feita a requisição.
     * @param body Corpo da requisição caso seja necessária.
     */
    fetch: async (url, method, body) => {
        var req;
        if (method === "GET") {
            req = await fetch(url, {
                method: method,
                headers: { "Content-type": "application/json" }
            });
        } else {
            req = await fetch(url, {
                method: method,
                body: body,
                headers: { "Content-type": "application/json" }
            });
        }
        return req.json().then(r => r);
    }
};