import api from '../shared/api'

interface IsaveFicha {
    name: string,
    class: string,
    description: string,
    race: string,
    strenght: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
    gender: string
}

export async function saveSheet(data: any) {
    console.log(data)
    const response = await api.post("/fichas/save", data)
    return response.data
}