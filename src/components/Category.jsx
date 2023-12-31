import { supabase } from "./../config/supabaseClient";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export const Category = () => {
  const { id } = useParams();
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRecords(id);
  }, [id]);

  async function getRecords(id) {
    const records = await supabase
      .from("fl_topics")
      .select("*")
      .eq("category_id", id)
      .eq("user_id", JSON.parse(localStorage.getItem("user")).id);

    setRecords(records.data);
  }

  const handleRecordClick = (record) => {
    navigate(`/categories/${record.category_id}/topics/${record.id}/cards`);
  };

  return (
    <div>
      <h3>Records</h3>
      {records.map((record) => {
        return (
          <div className="container" key={record.id}>
            <button
              style={{ minWidth: "200px" }}
              className="p-2"
              onClick={() => handleRecordClick(record)}
            >
              {record.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};
