const Anotacion = require("../models/AnotacioData");

module.exports = {
  async read(request, response) {
    console.log("Função read foi chamada");
    const AnnotationList = await Anotacion.find();

    console.log("AnnotationList:", AnnotationList);

    return response.json(AnnotationList);
  },

  async create(request, response) {
    const { title, notes, priority } = request.body;

    if (!notes || !title) {
      return response.status(400).json({
        error: "necessario um titulo e anotação",
      });
    }

    const AnotationsCreate = await Anotacion.create({
      title,
      notes,
      priority,
    });

    return response.json(AnotationsCreate);
  },

  async delete(request, response) {
    const { id } = request.params;

    const annotationsDelete = await Anotacion.findOneAndDelete({ _id: id });

    if (annotationsDelete) {
      return response.json(annotationsDelete);
    }
    return response.status(401).json({ error: "id não encontrado" });
  },
};
