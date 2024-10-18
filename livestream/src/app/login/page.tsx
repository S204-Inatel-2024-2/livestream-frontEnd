"use client";

import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import styles from './index.module.css';

const Page: NextPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Usuário e senha são obrigatórios');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert('Login realizado com sucesso!');
      } else {
        setError('Credenciais inválidas');
      }
    } catch (error) {
      setError('Erro ao efetuar login');
    }
  };

  return (
    <div className={styles.page1}>
      <div className={styles.leftSection}>
        <div className={styles.loginTitle}>
          <img className={styles.confettiIcon} alt="Confetti Icon" src="/assets/images/Confetti.png" />
          <h1>Seja bem-vindo de volta!</h1>
        </div>
        <p className={styles.loginDescription}>
        Faça o login na nossa plataforma e aproveite o melhor da criação de conteúdo!
        </p>

        {/* Campo Usuário com ícone */}
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="username">
            Usuário
          </label>
          <div className={styles.inputWithIcon}>
            <img className={styles.icon} alt="User Icon" src="/assets/images/User.png" />
            <input
              className={styles.inputField}
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu nome de usuário"
            />
          </div>
        </div>

        {/* Campo Senha com ícone */}
        <div className={styles.inputContainer}>
          <div className={styles.passwordLabelContainer}>
            <label className={styles.label} htmlFor="password">
              Senha
            </label>
            <Link href="/forgotPassword" passHref>
              <div className={styles.textLinkRight}>Esqueci minha senha</div>
            </Link>
          </div>
          <div className={styles.inputWithIcon}>
            <img className={styles.icon} alt="Password Icon" src="/assets/images/Key.png" />
            <input
              className={styles.inputField}
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <button className={styles.loginButton} onClick={handleLogin}>
          Entrar
        </button>

        <div className={styles.linkCenter}>
          <Link href="/createUser" passHref>
            <div className={styles.textLinkCenter}>Ainda não possuo uma conta</div>
          </Link>
        </div>
      </div>

      <div className={styles.rightSection}></div>
    </div>
  );
};

export default Page;
