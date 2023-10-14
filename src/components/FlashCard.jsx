import { supabase } from "./../config/supabaseClient";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export const FlashCard = () => {
  const navigate = useNavigate();
  const { categoryId, topicId, cardId } = useParams();
  const [record, setRecord] = useState({});

  useEffect(() => {
    getRecords(categoryId);
  }, [categoryId]);

  async function getRecords(categoryId) {
    const record = await supabase
      .from("fl_cards")
      .select("*")
      .eq("id", cardId)
      .eq("user_id", JSON.parse(localStorage.getItem("user")).id)
      .single();

    setRecord(record.data);
  }

  const handleCardEdit = () => {
    navigate(
      `/categories/${categoryId}/topics/${topicId}/cards/${cardId}/edit`
    );
  };

  return (
    <div>
      <h3>
        <span>{record.name}</span>
        <button style={{ float: "right" }} onClick={handleCardEdit}>
          <span>Edit</span>
        </button>
      </h3>
      <div key={record.id}>
        <p dangerouslySetInnerHTML={{ __html: record.data }}></p>
      </div>
    </div>
  );
};
