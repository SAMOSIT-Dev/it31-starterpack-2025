const RoomService = require("../services/room.service");
const ResponseDTO = require("../dtos/response.dto");
const RoomDTO = require("../dtos/room.dto");
const { all } = require("axios");

class RoomController {
  static async createRoom(req, res) {
    const response = new ResponseDTO();
    const { room_name } = req.body;

    if (!room_name) {
      return res
        .status(400)
        .json(
          response.setError(true).setMessage("room_name is required").build()
        );
    }

    const allroom = await RoomService.findnameroom(room_name);
    if (allroom) {
      response.setMessage("Cannot create room, name duplicated");
      response.setError(true);
      res.status(400).json(response.build());
    }
    try {
      const created = await RoomService.createRoom(room_name);
      const dto = new RoomDTO()
        .setId(created.id)
        .setRoomName(created.room_name || "");

      res
        .status(201)
        .json(
          response
            .setContent(dto.build())
            .setMessage("Room created")
            .setError(false)
            .build()
        );
    } catch (err) {
      res
        .status(500)
        .json(response.setError(true).setMessage("Cannot create room").build());
    }
  }

  static async updateRoom(req, res) {
    const response = new ResponseDTO();
    const id = parseInt(req.params.id);
    const { room_name } = req.body;

    if (!id || !room_name) {
      return res
        .status(400)
        .json(
          response
            .setError(true)
            .setMessage("id and room_name required")
            .build()
        );
    }
    const roomId = await RoomService.findidroom(id);
    if (!roomId) {
      return res
        .status(400)
        .json(
          response.setError(true).setMessage(`room id: ${id} not found`).build()
        );
    }
    try {
      const updated = await RoomService.updateRoom(id, room_name);
      const dto = new RoomDTO()
        .setId(updated.id)
        .setRoomName(updated.room_name || "");

      res
        .status(200)
        .json(
          response
            .setContent(dto.build())
            .setMessage("Room updated")
            .setError(false)
            .build()
        );
    } catch (err) {
      res
        .status(500)
        .json(response.setError(true).setMessage("Cannot update room").build());
    }
  }

  static async deleteRoom(req, res) {
    const response = new ResponseDTO();
    const id = parseInt(req.params.id);

    if (!id) {
      return res
        .status(400)
        .json(response.setError(true).setMessage("id is required").build());
    }

    try {
      await RoomService.deleteRoom(id);
      res
        .status(200)
        .json(
          response
            .setError(false)
            .setMessage(`Successfully delete room id: ${id}`)
            .build()
        );
    } catch (err) {
      res
        .status(500)
        .json(response.setError(true).setMessage(`room id: ${id} not found`).build());
    }
  }
}

module.exports = RoomController;
