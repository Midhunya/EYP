import { useParams, useNavigate } from "react-router-dom";

const attackDetails = {
  malware: "Malware is malicious software designed to damage or exploit systems.",
  ddos: "DDoS attacks flood a network with traffic to disrupt services.",
  phishing: "Phishing attempts to trick users into providing sensitive information.",
};

const Details = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  if (category === "ransomware") {
    navigate("/ransomware");
    return null; 
  }

  return (
    <div className="details-container">
      <h1>{category.toUpperCase()}</h1>
      <p>{attackDetails[category] || "No information available."}</p>
    </div>
  );
};

export default Details;