import React, { useEffect, useState } from "react";
import "./css/app.css";
import "./css/global.css";
import "./css/sidebar.css";
import "./css/main.css";
import api from "./services/api";
import Notes from "./components/Notes/notes";
import RadioButton from "./components/Notes/RadiosButom/index";

function App() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [selectedValue, setSelectedValue] = useState("all");

  useEffect(() => {
    getAllNotes();
  }, []);

  async function getAllNotes() {
    const response = await api.get("annotations");
    setAllNotes(response.data);
  }

  async function loadNotes(options) {
    const params = { priority: options };
    const response = await api.get(`/priorities`, { params });

    if (response) {
      setAllNotes(response.data);
    }
  }

  function handleChange(e) {
    setSelectedValue(e.target.value);

    if (e.target.value !== "all") {
      loadNotes(e.target.value);
    } else {
      getAllNotes();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/annotations", {
        title,
        notes,
        priority: false,
      });

      setTitle("");
      setNotes("");
      setAllNotes([...allNotes, response.data]);
    } catch (error) {
      console.error("Erro ao salvar anotação:", error);
    }
  }

  useEffect(() => {
    function enableSubmitButton() {
      let btn = document.getElementById("btn_submit");
      btn.style.background = "#FFD3CA";

      if (title && notes) {
        btn.style.background = "#E88F7A";
      }
    }
    enableSubmitButton();
  }, [title, notes]);

  async function handleDelete(id) {
    const deletedNotes = await api.delete(`annotations/${id}`);

    if (deletedNotes) {
      setAllNotes(allNotes.filter((note) => note._id !== id));
    }
  }

  async function hamdleChangePriority(id) {
    const note = await api.post(`priorities/${id}`);

    if (note) {
      getAllNotes();
    }
  }

  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Titulo da Anotação</label>
            <input
              value={title}
              maxLength={30}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="notes">Anotações</label>
            <textarea
              value={notes}
              required
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <button id="btn_submit" type="submit">
            Salvar
          </button>
        </form>
        <div className="radio-group">
          <RadioButton
            label="Todos"
            controlProps={{ value: "all" }}
            size="small"
            checked={selectedValue === "all"}
            onChange={handleChange}
          />
          <RadioButton
            label="Prioridades"
            controlProps={{ value: "true" }}
            checked={selectedValue === "true"}
            onChange={handleChange}
          />
          <RadioButton
            label="Normal"
            controlProps={{ value: "false" }}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 28,
              },
            }}
            checked={selectedValue === "false"}
            onChange={handleChange}
          />
        </div>
      </aside>

      <main>
        <ul>
          {allNotes.map((data) => (
            <Notes
              data={data}
              key={data._id} // Adicione uma chave única aqui
              handleDelete={handleDelete}
              hamdleChangePriority={hamdleChangePriority}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
