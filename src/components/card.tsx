const cardStyle = {
  padding: "100px",
  margin: "10px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  border: "1px solid #ddd",
  display: "flex",
  justifyContent: "justify-content",
  alignItems: "center",
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col" style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
