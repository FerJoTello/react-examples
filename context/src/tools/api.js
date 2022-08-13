/**
 * Hace una llamada a un endpoint definido por la URL proporcionada y devuelve una promesa con el JSON de la respuesta.
 * @param {Object} params
 * @param {string} params.url URL del endpoint al que se quiere hacer la petición
 * @param {string} params.method metodo http que se desea realizar al endpoint
 * @param {Object} params.body body de la petición (opcional)
 * @param {Object} params.headers headers de la petición (opcional)
 */
export default async function apiCall({
    url,
    method = "get",
    body,
    headers,
}) {
    try {
        const response = await fetch(url, { method, body, headers })
        return response.json()
    } catch (error) {
        Promise.reject(`Fallo al comunicarse con la url: "${url}".\n
        Método: "${method}"\n
        Error: ${error}`)
    }
}