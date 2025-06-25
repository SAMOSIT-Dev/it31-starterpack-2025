const ScheduleService = require("../services/schedule.service");
const ResponseDTO = require("../dtos/response.dto");
const {
  GetAllSchedulesDTO,
  GetScheduleByIdDTO,
} = require("../dtos/schedule.dto");

class ScheduleController {
  static async getAllSchedules(req, res) {
    const response = new ResponseDTO();
    try {
      const schedules = await ScheduleService.findAllSchedulesWithRelation();

      const dtoSchedule = schedules.map((schedule) => {
        return new GetAllSchedulesDTO()
          .setId(schedule.id)
          .setCourseName(schedule.courses?.course_name)
          .setStartTime(schedule.start_time?.toISOString())
          .setEndTime(schedule.end_time?.toISOString())
          .setSlideUrl(schedule.slide_url)
          .setHouse(schedule.houses?.id, schedule.houses?.house_name)
          .build();
      });

      const successResponse = response
        .setContent(dtoSchedule)
        .setMessage("Success")
        .setError(false)
        .build();

      res.status(200).json(successResponse);
    } catch (error) {
      const errorResponse = response
        .setError(true)
        .setMessage("Internal server error")
        .build();
      return res.status(500).json(errorResponse);
    }
  }

  static async getSchedulesByHouseId(req, res) {
    const houseId = parseInt(req.params.id);
    const response = new ResponseDTO();

    if (!houseId) {
      const errorResponse = response
        .setError(true)
        .setMessage("No houseId on Params")
        .build();
      return res.status(400).json(errorResponse);
    }

    try {
      const schedules = await ScheduleService.findSchedulesByHouseId(houseId);

      if (schedules.length <= 0) {
        const errorResponse = response
          .setError(true)
          .setMessage("This House No Schdule")
          .build();
        return res.status(400).json(errorResponse);
      }
      const dtoScheduleById = schedules.map((schedule) =>
        new GetScheduleByIdDTO()
          .setId(schedule.id)
          .setCourseName(schedule.courses?.course_name)
          .setStartTime(schedule.start_time?.toISOString())
          .setEndTime(schedule.end_time?.toISOString())
          .setSlideUrl(schedule.slide_url)
          .setHouse(schedule.houses?.id, schedule.houses?.house_name)
          .build()
      );

      const successResponse = response
        .setContent(dtoScheduleById)
        .setMessage("Success")
        .setError(false)
        .build();

      return res.status(200).json(successResponse);
    } catch (error) {
      const errorResponse = response
        .setError(true)
        .setMessage("Cannot fetch schedules  house")
        .build();
      return res.status(500).json(errorResponse);
    }
  }

  static async createNewSchedule(req, res) {
    const response = new ResponseDTO();
    const { course_id, start_time, end_time, slide_url, house_id } = req.body;

    if (
      !course_id ||
      !start_time ||
      !end_time ||
      !slide_url ||
      !house_id ||
      slide_url.trim() === ""
    ) {
      const errorResponse = response
        .setError(true)
        .setMessage("Have some fields in request body null")
        .build();
      return res.status(400).json(errorResponse);
    }

    const house = await ScheduleService.findHouseById(house_id);
    if (!house) {
      const errorResponse = response
        .setError(true)
        .setMessage(`Not have this house : ${house_id}`)
        .build();
      return res.status(400).json(errorResponse);
    }

    const course = await ScheduleService.findCourseById(course_id);

    if (!course) {
      const errorResponse = response
        .setError(true)
        .setMessage(`Not have this course : ${course_id}`)
        .build();
      return res.status(400).json(errorResponse);
    }

    try {
      const created = await ScheduleService.createSchedule({
        course_id,
        start_time,
        end_time,
        slide_url,
        house_id,
      });

      const successResponse = response
        .setContent(created)
        .setMessage("Success")
        .setError(false)
        .build();

      res.status(201).json(successResponse);
    } catch (error) {
      response.setMessage("Cannot to create schedule");
      response.setError(true);
      res.status(500).json(response.build());
    }
  }

  static async updateScheduleById(req, res) {
    const response = new ResponseDTO();
    const id = parseInt(req.params.id);
    const { course_id, start_time, end_time, slide_url, house_id } = req.body;

    if (!id) {
      response.setMessage("No id on Params");
      response.setError(true);
      return res.status(400).json(response);
    }

    if (
      course_id == null ||
      start_time == null ||
      end_time == null ||
      slide_url == null ||
      house_id == null ||
      slide_url.trim() === ""
    ) {
      response.setMessage("Have some fields in request body null");
      response.setError(true);
      return res.status(400).json(response);
    }

    const house = await ScheduleService.findHouseById(house_id);
    if (!house) {
      const errorResponse = response
        .setError(true)
        .setMessage(`Not have this house ${house_id}`)
        .build();
      return res.status(400).json(errorResponse);
    }

    const course = await ScheduleService.findCourseById(course_id);

    if (!course) {
      const errorResponse = response
        .setError(true)
        .setMessage(`Not have this course : ${course_id}`)
        .build();
      return res.status(400).json(errorResponse);
    }

    try {
      const updated = await ScheduleService.updateScheduleById(id, {
        course_id,
        start_time,
        end_time,
        slide_url,
        house_id,
      });

      const successResponse = response
        .setContent(updated)
        .setMessage("Success")
        .setError(false)
        .build();

      res.status(200).json(successResponse);
    } catch (error) {
      response.setMessage("Cannot to create schedule");
      response.setError(true);
      res.status(500).json(response);
    }
  }

  static async deleteScheduleById(req, res) {
    const id = parseInt(req.params.id);
    const response = new ResponseDTO();

    if (!id) {
      const errorResponse = response
        .setError(true)
        .setMessage(`No id on Params`)
        .build();
      return res.status(400).json(errorResponse);
    }

    try {
      const schedule = await ScheduleService.findScheduleById(id);
      if (!schedule) {
        const errorResponse = response
          .setError(true)
          .setMessage(`No id ${id} in db to delete`)
          .build();
        return res.status(400).json(errorResponse);
      }

      const ondelete = await ScheduleService.deleteScheduleById(id);

      const successResponse = response
        .setContent(ondelete)
        .setMessage("Success")
        .setError(false)
        .build();

      res.json(successResponse);
    } catch (error) {
      const errorResponse = response
        .setError(true)
        .setMessage(`Can not Delete schedule`)
        .build();

      res.status(500).json(errorResponse);
    }
  }
}

module.exports = ScheduleController;
