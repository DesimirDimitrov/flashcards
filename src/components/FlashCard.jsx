import { supabase } from "./../config/supabaseClient";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const FlashCard = () => {
  const { categoryId, topicId, cardId } = useParams();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getRecords(categoryId);
  }, [categoryId]);

  async function getRecords(categoryId) {
    const records = await supabase
      .from("fl_cards")
      .select("*")
      .eq("id", cardId)
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
