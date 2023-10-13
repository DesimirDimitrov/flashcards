import { useNavigate } from "react-router-dom";

const defaultCategories = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "PHP",
  },
];

export const SidebarCategories = () => {
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate(`categories/${category.id}`);
  };

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {defaultCategories.map((category) => {
          return (
            <li onClick={() => handleCategoryClick(category)} key={category.id}>
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
