import { useNavigate } from "react-router-dom";

export const MainBody = () => {
  const navigate = useNavigate();

  const handleCreateFlashCard = () => {
    navigate("cards/create");
  };

  return (
    <div>
      <h1>Body</h1>
      <button onClick={handleCreateFlashCard}>Create a Flashcard</button>
    </div>
  );
};
