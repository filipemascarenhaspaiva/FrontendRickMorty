export const Api = {
	baseUrl: "https://backendrickandmorty.herokuapp.com",

	createUrl: () => Api.baseUrl + "/personagens/create",

	readAllUrl: () => Api.baseUrl + "/personagens",
	readSingleUrl: (id) => Api.baseUrl + "/personagens/" + id,

	updateUrl: (id) => Api.baseUrl + "/personagens/update/" + id,

	deleteUrl: (id) => Api.baseUrl + "/personagens/delete/" + id,
	//deleteAllUrl: () => Api.baseUrl + "/",

	// Create
	buildApiPostRequest: (url, body) => {
		return fetch(url, {
			method: "POST",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// ReadAll
	buildApiGetRequest: (url) => {
		return fetch(url, {
			method: "GET",
		});
	},

	// UpdateById
	buildApiPutRequest: (url, body) => {
		return fetch(url, {
			method: "PUT",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// DeleteAll
	buildApiDeleteRequest: (url) => {
		return fetch(url, {
			method: "DELETE",
		});
	},
};
