import React, { useState } from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

import "../styles.css";
import "../priority.css";
import api from "../../services/api";

function Notes({ data, handleDelete, hamdleChangePriority }) {
  const [changeNotes, setChangeNote] = useState("");

  function hendleEdit(e, priority) {
    e.style.cursor = "text";
    e.style.borderRadius = "5px";

    if (priority) {
      e.style.boxShadow = "0 0 5px #fff";
    } else {
      e.style.boxShadow = "0 0 5px #444";
    }
  }

  async function handleSave(e, notes) {
    e.style.cursor = "default";
    e.style.boxShadow = "none";

    if (changeNotes && changeNotes !== notes) {
      await api.post(`/contents/${data._id}`, {
        notes: changeNotes,
      });
    }
  }
  return (
    <>
      <li
        className={data.priority ? "notepad-infos-priority" : "notepad-infos"}
      >
        <div>
          <strong>{data.title}</strong>
          <div>
            <AiTwotoneDelete onClick={() => handleDelete(data._id)} />
          </div>
        </div>
        <textarea
          defaultValue={data.notes}
          onChange={(e) => setChangeNote(e.target.value)}
          onClick={(e) => hendleEdit(e.target, data.priority)}
          onBlur={(e) => handleSave(e.target, data.notes)}
        />
        <span>
          <AiOutlineExclamationCircle
            onClick={() => hamdleChangePriority(data._id)}
          />
        </span>
      </li>
    </>
  );
}

export default Notes;
