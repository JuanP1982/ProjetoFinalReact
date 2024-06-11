import { useState, useCallback,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("token")){
        document.body.style.visibility = "none"
        alert("Você já está logado!")
        setTimeout(()=>{window.location.href="/"},1000)
    }
 },[])

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault(); 

      if (!email || !senha) {
        setError('Email e senha são obrigatórios');
        return;
      }

      const response = await axios.post('http://localhost:8080/clientes/login', { email, senha });

      if (response.status === 200) {
        localStorage.setItem('token', "Logado");
        localStorage.setItem("dadosUsuario", JSON.stringify(response.data));
        navigate('/');
      } else {
        setError('Email ou senha incorretos');
      }
  }, [email, senha, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <br />
      <label htmlFor="password">Senha:</label>
      <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
      <br />
      {error && <div style={{color: 'red'}}>{error}</div>}
      <button type="submit">Entrar</button>
    </form>
  );
};