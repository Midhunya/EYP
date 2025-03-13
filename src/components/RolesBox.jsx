import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RolesBox = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const roles = ["INCIDENT MANAGER", "CFO", "CEO"];

  return (
    <div className="category-box">
      <div className="main-box" onClick={() => setShowOptions(!showOptions)}>
        <img src="/roles.jpg" alt="Roles" className="category-image" />
        <h2>Roles</h2>
        <p>Understand key roles in incident response.</p>
      </div>

      {showOptions && (
        <div className="dropdown">
          {roles.map((role) => (
            <div
              key={role}
              className="dropdown-option"
              onClick={() => navigate(`/roles/${role.toLowerCase()}`)}
            >
              {role}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RolesBox;