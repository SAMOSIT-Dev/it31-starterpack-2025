const HouseService = require("../services/house.service");
const ResponseDTO = require("../dtos/response.dto");
const GetAllHousesDTOResponse = require("../dtos/house.dto");

class HouseController {
  // GET /houses
  static async getAllHouses(req, res) {
    const response = new ResponseDTO();
    try {
      const houses = await HouseService.getAllHouses();

      const dtoHouse = houses.map((h) =>
        new GetAllHousesDTOResponse()
          .setId(h.id)
          .setHouseName(h.house_name)
          .build()
      );

      const successResponse = response
        .setContent(dtoHouse)
        .setMessage("Successfully retrive houses")
        .setError(false)
        .build();

      res.status(200).json(successResponse);
    } catch (error) {
      const errorResponse = response
        .setError(true)
        .setMessage("Internal server error")
        .build();
      res.status(500).json(errorResponse);
    }
  }

  // GET /houses/:id
  static async getHouseById(req, res) {
    const id = parseInt(req.params.id);
    const response = new ResponseDTO();

    if (!id) {
      return res
        .status(400)
        .json(response.setError(true).setMessage("No id on Params").build());
    }

    try {
      const house = await HouseService.getHouseById(id);
      if (!house) {
        return res
          .status(404)
          .json(
            response
              .setError(true)
              .setMessage(`No House Found by ${id}`)
              .build()
          );
      }

      const dtoHouse = new GetAllHousesDTOResponse()
        .setId(house.id)
        .setHouseName(house.house_name)
        .build();

      const successResponse = response
        .setContent(dtoHouse)
        .setMessage(`Successfully get house id: ${id}`)
        .setError(false)
        .build();

      res.status(200).json(successResponse);
    } catch (error) {
      const errorResponse = response
        .setError(true)
        .setMessage("Internal server error")
        .build();
      res.status(500).json(errorResponse);
    }
  }

  // PUT /houses/:id
  static async updateHouseById(req, res) {
    const id = parseInt(req.params.id);
    const { houseName } = req.body;
    const response = new ResponseDTO();

    if (!id || !houseName) {
      return res
        .status(400)
        .json(
          response
            .setError(true)
            .setMessage("No id on Params or houseName on Body")
            .build()
        );
    }

    const house = await HouseService.findHouseById(id);
    if (!house) {
      return res
        .status(400)
        .json(
          response
            .setError(true)
            .setMessage(`Not have this house_id in db ${id}`)
            .build()
        );
    }

    try {
      const updated = await HouseService.updateHouseById(id, houseName);

      const updatedDTO = new GetAllHousesDTOResponse()
        .setId(updated.id)
        .setHouseName(updated.house_name)
        .build();

      const successResponse = response
        .setContent(updatedDTO)
        .setMessage(`Successfully update house id: ${id}`)
        .setError(false)
        .build();

      res.status(200).json(successResponse);
    } catch (error) {
      const errorResponse = response
        .setError(true)
        .setMessage("Can not Update House")
        .build();
      res.status(500).json(errorResponse);
    }
  }
}

module.exports = HouseController;
