import { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from './login.module.css';
import axios from "axios";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault();

        if (!email || !senha) {
            setError('Email e senha são obrigatórios');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/clientes/login', { email, senha });

            if (response.status === 200) {
                localStorage.setItem('token', "Logado");
                localStorage.setItem("cliente", JSON.stringify(response.data));
                navigate('/');
            } else {
                setError('Email ou senha incorretos');
            }
        } catch (error) {
            setError('Erro ao fazer login');
        }
    }, [email, senha, navigate]);

    return (
        <div className={styles.pageContainer}>
            <Helmet>
                <title>Login - Meu Site</title>
            </Helmet>
            <div className={styles.backLink}>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} className={styles.icon} />Home</Link>
            </div>
            <div className={styles.formCardDiv}>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <h4>Ainda não possui uma conta? <a href="/cadastro">Cadastre-se.</a></h4>
                    <input type="email" placeholder="E-mail" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <br />
                    <input type="password" id="senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    <br />
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}
