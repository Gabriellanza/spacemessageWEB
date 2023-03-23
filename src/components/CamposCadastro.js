import React, { useState } from 'react';
import '../css/CamposLogin.modules.css';
import '../css/CamposCadastro.modules.css';
import './Footer';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const CamposCadastro = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');


  const handleChangeUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const handleChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const handleChangeTelefone = (event) => {
    setTelefone(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Usuário: ${usuario} Senha: ${senha} Telefone: ${telefone} E-mail: ${email}`);
    // Aqui você pode fazer a validação de login e redirecionamento para a página principal
  };

  return (
    <div className='login'>
      <div >
        <Logo />
        <form className="centraliza" onSubmit={handleSubmit}>
          <div>
            <input className="inputBarra" placeholder='Telefone' type="tel" value={telefone} onChange={handleChangeTelefone} />
          </div>
          <br />
          <div>
            <input className="inputBarra" placeholder='E-mail' type="email" value={email} onChange={handleChangeEmail} />
          </div>
          <br />
          <div>
            <input className="inputBarra" placeholder='Usuário' type="text" value={usuario} onChange={handleChangeUsuario} />
          </div>
          <br />
          <div>
            <input className="inputBarra" placeholder='Senha' type="password" value={senha} onChange={handleChangeSenha} />
          </div>
          <br />
          <div>
            <input className="inputBarra" placeholder='Repita a sua senha' type="password" value={senha} onChange={handleChangeSenha} />
          </div>
          <br />
          <button className="btnEntrar" type="submit">ENTRAR</button>
          <Link to='/'><button className="btnVoltar">VOLTAR</button></Link>
        </form>
      </div>
    </div>
  );

}

export default CamposCadastro;