import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import GlobalStore from "./contexts/GlobalStore";
import { Category } from "./components/Category";
import { FlashCards } from "./components/FlashCards";
import { FlashCard } from "./components/FlashCard";
import { FlashCardCreate } from "./components/FlashCardCreate";

function App() {
  return (
    <div className="app">
      <GlobalStore>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="categories/:id" element={<Category />} />
          <Route path="categories/:id/cards" element={<FlashCards />} />
          <Route path="cards/:id" element={<FlashCard />} />
          <Route path="cards/create" element={<FlashCardCreate />} />
          <Route
            path="categories/:id/cards/:flashCardId"
            element={<FlashCard />}
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </GlobalStore>
    </div>
  );
}

export default App;
