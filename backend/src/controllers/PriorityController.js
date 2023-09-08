const Anotacion = require("../models/AnotacioData");

module.exports = {
  async read(request, response) {
    const priority = request.query;

    const priorityNotes = await Anotacion.find(priority);

    return response.json(priorityNotes);
  },

  async update(request, response) {
    const { id } = request.params;

    const annotations = await Anotacion.findOne({ _id: id });

    if (annotations.priority) {
      annotations.priority = false;
    } else {
      annotations.priority = true;
    }
    await annotations.save();

    return response.json(annotations);
  },
};
