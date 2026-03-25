const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "12px",
        marginBottom: "12px",        
        border: "1px solid #4CAF50",
        borderRadius: "5px",
        fontSize: "16px",
        outLine: "none",
      }}
    />
  );
};

export default Input;
