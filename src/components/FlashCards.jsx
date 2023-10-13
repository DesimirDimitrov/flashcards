import { supabase } from "./../config/supabaseClient";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const FlashCards = () => {
  const { id } = useParams();
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRecords(id);
  }, [id]);

  async function getRecords(id) {
    const records = await supabase
      .from("fl_cards")
      .select("*")
      .eq("category_id", id)
      .eq("user_id", JSON.parse(localStorage.getItem("user")).id);

    setRecords(records.data);
  }

  const handleRecordClick = (record) => {
    navigate(`/cards/${record.id}`);
  };

  return (
    <div>
      <ul>
        {records.map((record) => {
          return (
            <li onClick={() => handleRecordClick(record)} key={record.id}>
              {record.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
