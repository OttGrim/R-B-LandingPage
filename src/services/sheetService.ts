import api from '../shared/api'

export async function saveSheet(data: any) {
    console.log(data)
    const response = await api.post("/fichas/save", data)
    return response.data
}