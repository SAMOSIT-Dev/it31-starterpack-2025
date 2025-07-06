export const HOUSES = {
    Fantasiax: {
        id: 1,
        name: 'Fantasiax'
    },
    Horrorin: {
        id: 2,
        name: 'Horrorin'
    },
    Scifora: {
        id: 3,
        name: 'Scifora'
    },
    Actovex: {
        id: 4,
        name: 'Actovex'
    }
}

export const getHouseNameFromId = (house_id) => {
    let houseName = ""
    switch (house_id) {
        case HOUSES.Fantasiax.id:
            houseName = HOUSES.Fantasiax.name
            break
        case HOUSES.Horrorin.id:
            houseName = HOUSES.Horrorin.name
            break
        case HOUSES.Scifora.id:
            houseName = HOUSES.Scifora.name
            break
        case HOUSES.Actovex.id:
            houseName = HOUSES.Actovex.name
            break
    }
    return houseName
}