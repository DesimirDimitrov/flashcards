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
  {
    id: 3,
    name: "ElasticSearch",
  },
  {
    id: 4,
    name: "TypeScript",
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
            <li
              className="p-2"
              onClick={() => handleCategoryClick(category)}
              key={category.id}
            >
              <button style={{ minWidth: "200px" }}>{category.name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
