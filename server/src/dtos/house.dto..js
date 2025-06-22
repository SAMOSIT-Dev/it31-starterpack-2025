class GetAllHousesDTOResponse {
  constructor() {
    this.id = null
    this.house_name = ""
  }

  setId(id) {
    if (typeof id !== 'number') throw TypeError('Invalid type: id must be number')
    this.id = id
    return this
  }

  setHouseName(house_name) {
    if (typeof house_name !== 'string') throw TypeError('Invalid type: house_name must be string')
    this.house_name = house_name
    return this
  }

  build() {
    return {
      id: this.id,
      house_name: this.house_name
    }
  }
  
}