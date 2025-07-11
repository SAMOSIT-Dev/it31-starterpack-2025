const UpcomingEventService = require("../services/upcoming-event.service");
const ResponseDTO = require("../dtos/response.dto");
const GetAllUpcomingEventsResponseDTO = require("../dtos/upcoming-event.dto");
const dayjs = require("dayjs");

class UpcomingEventController {
  static async getAllUpcomingEvents(req, res) {
    const response = new ResponseDTO();

    try {
      const events = await UpcomingEventService.getAllUpcomingEvents();

      const eventDto = events.map((event) => {
        return new GetAllUpcomingEventsResponseDTO()
          .setId(event.id)
          .setEventName(event.event_name)
          .setEventDateTime(
            dayjs(event.event_datetime).format("YYYY-MM-DD HH:mm:ss")
          )
          .build();
      });

      const successResponse = response
        .setContent(eventDto)
        .setMessage("Success")
        .setError(false)
        .build();

      return res.status(200).json(successResponse);
    } catch (error) {
      console.error(error);
      const errorResponse = response
        .setError(true)
        .setMessage("Internal server error")
        .build();
      return res.status(500).json(errorResponse);
    }
  }
}

module.exports = UpcomingEventController;
