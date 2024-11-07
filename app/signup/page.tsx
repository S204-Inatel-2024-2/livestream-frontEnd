"use client"

import { useFormState } from 'react-dom';
import styles from './signup.module.css';
import Link from 'next/link';
import { signup } from '../lib/actions';

const initialState = {
  message: '',
}

export default function Signup() {
  const [state, formAction] = useFormState(signup, initialState)

  return (
    <div className={styles.signupContainer}>
      <div className={styles.imageBanner}></div>

      <div className={styles.formContainer}>

        {/* Signup message */}
        <div className={styles.signupHeader}>
          <img className={styles.headerIcon} alt="" src="/assets/images/smile.png" />
          <h2 className={styles.createAccountText}>Crie sua conta no livestream</h2>
          <p className={styles.subHeaderText}>Entre com seu nome, email e senha e aproveite o máximo que uma plataforma de lives pode oferecer!</p>
        </div>

        {/* Form inputs */}
        <form className={styles.inputForm} action={formAction}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Usuário</label>
            <div className={styles.inputFieldContainer}>
              <img className={styles.icon} alt="" src="./assets/images/user.png" />
              <input className={styles.inputField} placeholder="Digite seu nome de usuário" name="username" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Email</label>
            <div className={styles.inputFieldContainer}>
              <img className={styles.icon} alt="" src="/assets/images/envelope.svg" />
              <input className={styles.inputField} placeholder="Digite seu melhor email" name="email" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Senha</label>
            <div className={styles.inputFieldContainer}>
              <img className={styles.icon} alt="" src="/assets/images/key.png" />
              <input className={styles.inputField} type="password" placeholder="Digite sua senha mais segura" name="password" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Confirme sua senha</label>
            <div className={styles.inputFieldContainer}>
              <img className={styles.icon} alt="" src="/assets/images/shield.svg" />
              <input className={styles.inputField} type="password" placeholder="Digite sua senha novamente" name="confirmPassword" />
            </div>
          </div>


          <p aria-live="polite" style={{ color: "red" }}>{state?.message}</p>
          <div className={styles.submitButtonContainer}>
            <button type="submit" className={styles.submitButton}>Criar conta</button>
          </div>
        </form>

        <Link className={styles.loginLink} href={"/login"}>Já possuo uma conta</Link>
      </div>
    </div>
  );
};