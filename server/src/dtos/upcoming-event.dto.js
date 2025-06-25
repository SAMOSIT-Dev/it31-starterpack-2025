class GetAllUpcomingEventsResponseDTO {
  constructor() {
    this.id = null;
    this.event_name = "";
    this.event_datetime = "";
  }

  setId(id) {
    if (typeof id !== "number")
      throw TypeError("Invalid type: id must be number");
    this.id = id;
    return this;
  }

  setEventName(event_name) {
    if (typeof event_name !== "string")
      throw TypeError("Invalid type: event_name must be string"); // <---
    this.event_name = event_name;
    return this;
  }

  setEventDateTime(event_datetime) {
    if (typeof event_datetime !== "string")
      throw TypeError("Invalid type: event_datetime must be string");
    return this;
  }

  build() {
    return {
      id: this.id,
      event_name: this.event_name,
      event_datetime: this.event_datetime,
    };
  }
}

module.exports = GetAllUpcomingEventsResponseDTO;
