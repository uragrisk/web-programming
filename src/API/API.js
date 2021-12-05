import axios from "axios";

export const getCup = async (id) => {
    const rawResponse = await axios.get(`http://localhost:8080/cups/${id}`);
    return rawResponse.data
}
export const getCupList = async () => {
    const rawResponse = await axios.get(`http://localhost:8080/cups`)
    return rawResponse.data
}