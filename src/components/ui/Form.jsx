const Form = ({ children }) => {
  return (
    <div
      style={{
        width: "350px",
        margin: "0 auto",
        marginTop: "150px",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      {children}
    </div>    
  );
};

export default Form;