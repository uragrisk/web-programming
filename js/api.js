const BASE_URL = "http://localhost:8080"
const RESOURSE_URL = `${BASE_URL}/cups`

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        }

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams)
    } catch (error) {
        console.error("HTTP ERROR: ", error)
    }
}

export const getAllCups = async () => {
    const rawResponse = await baseRequest({ method: "GET" })

    return await rawResponse.json()
}

export const postCup = (body) => baseRequest({ method: "POST", body })

export const updateCup = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body })

export const deleteCup = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" })



