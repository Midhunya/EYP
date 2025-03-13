import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryBox = ({ category, description, image, options, route }) => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);
    } else {
      setShowOptions(!showOptions);
    }
  };

  return (
    <div className="category-box">
      <div className="main-box" onClick={handleClick}>
        <img src={image} alt={category} className="category-image" />
        <h2>{category}</h2>
        <p>{description}</p>
      </div>

      {/* Dropdown for Respond */}
      {showOptions && options && (
        <div className="dropdown">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-option"
              onClick={() => {
                if (option.toLowerCase() === "ransomware") {
                  navigate("/ransomware"); // Redirect to flowchart page
                } else {
                  navigate(`/details/${option.toLowerCase()}`);
                }
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryBox;