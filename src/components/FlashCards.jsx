import { supabase } from "./../config/supabaseClient";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const FlashCards = () => {
  const { categoryId, topicId } = useParams();
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  const handleTopicClick = (categoryId, topicId) => {
    navigate(`/categories/${categoryId}/topics/${topicId}/cards/create`);
  };

  useEffect(() => {
    getRecords(categoryId);
  }, [categoryId]);

  async function getRecords(id) {
    const records = await supabase
      .from("fl_cards")
      .select("*")
      .eq("category_id", id)
      .eq("user_id", JSON.parse(localStorage.getItem("user")).id);

    setRecords(records.data);
  }

  const handleRecordClick = (record) => {
    navigate(
      `/categories/${record.category_id}/topics/${record.topic_id}/cards/${record.id}`
    );
  };

  return (
    <div className="container">
      <button
        style={{ float: "right" }}
        onClick={() => handleTopicClick(categoryId, topicId)}
      >
        Create a flashcard
      </button>
      <ul>
        {records.map((record) => {
          return (
            <li
              className="p-2"
              onClick={() => handleRecordClick(record)}
              key={record.id}
            >
              <button>{record.name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
