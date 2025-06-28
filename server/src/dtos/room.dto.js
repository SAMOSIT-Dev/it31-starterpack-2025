class RoomDTO {
  constructor() {
    this.id = null;
    this.room_name = "";
  }

  setId(id) {
    if (typeof id !== "number") throw TypeError("id must be number");
    this.id = id;
    return this;
  }

  setRoomName(name) {
    if (typeof name !== "string") throw TypeError("room_name must be string");
    this.room_name = name;
    return this;
  }

  build() {
    return {
      id: this.id,
      room_name: this.room_name,
    };
  }
}

module.exports = RoomDTO;
