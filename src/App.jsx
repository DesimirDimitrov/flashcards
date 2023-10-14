import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import GlobalStore from "./contexts/GlobalStore";
import { Category } from "./components/Category";
import { FlashCards } from "./components/FlashCards";
import { FlashCard } from "./components/FlashCard";
import { FlashCardCreate } from "./components/FlashCardCreate";
import { FlashCardEdit } from "./components/FlashCardEdit";

function App() {
  return (
    <div className="app">
      <GlobalStore>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="categories/:id" element={<Category />} />
          <Route
            path="categories/:categoryId/topics/:topicId/cards"
            element={<FlashCards />}
          />
          <Route
            path="categories/:categoryId/topics/:topicId/cards/:cardId"
            element={<FlashCard />}
          />
          <Route
            path="categories/:categoryId/topics/:topicId/cards/:cardId/edit"
            element={<FlashCardEdit />}
          />
          <Route path="cards/:id" element={<FlashCard />} />
          <Route
            path="categories/:categoryId/topics/:topicId/cards/create"
            element={<FlashCardCreate />}
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </GlobalStore>
    </div>
  );
}

export default App;
