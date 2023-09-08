const Anotacion = require("../models/AnotacioData");

module.exports = {
  async update(request, response) {
    const { id } = request.params;
    const { notes } = request.body;

    const annotations = await Anotacion.findOne({ _id: id });

    if (notes) {
      annotations.notes = notes;

      await annotations.save();
    }

    return response.json(annotations);
  },
};
