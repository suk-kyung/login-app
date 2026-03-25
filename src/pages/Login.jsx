import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Form from "../components/ui/Form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
        setError("이메일과 비밀번호를 입력해주세요");
        return;
    }

    setError("");
    alert("로그인 성공");
    };

  return (
    <Form>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>로그인</h2>
      
      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>
            {error}
        </p>
      )}
      
      <Input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <Button text="로그인" onClick={handleLogin} />
    </Form>
  );
};

export default Login;