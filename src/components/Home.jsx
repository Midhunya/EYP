import CategoryBox from "./CategoryBox";
import RolesBox from "./RolesBox"; // Import the new component

const Home = () => {
  return (
    <div className="home-container">
      <CategoryBox
        category="Incident Response"
        description="Incident response planning and risk assessment."
        image="/prepare.jpg"
        route="/prepare"
      />
      <CategoryBox
        category="Playbooks"
        description="Click Here to know more."
        image="/respond.jpg"
        options={["Malware", "Ransomware", "DDoS", "Phishing"]}
      />
      <CategoryBox
        category="Mitigate"
        description="Post-incident measures and prevention."
        image="/mitigate.jpg"
        route="/mitigate"
      />
      <RolesBox /> {/* Added RolesBox component */}
    </div>
  );
};

export default Home;