import { supabase } from "./../config/supabaseClient";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const FlashCard = () => {
  const { id } = useParams();
  const [records, setRecords] = useState([]);

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

  return (
    <div>
      <h3>Data for card</h3>
      {records.map((record) => {
        return <div key={record.id}>{record.data}</div>;
      })}
    </div>
  );
};
