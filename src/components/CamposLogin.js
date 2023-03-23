import React, { useState } from 'react';
import '../css/CamposLogin.modules.css';
import './Footer';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import axios from 'axios';


const CamposLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleChangeUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const handleChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://localhost:7104/api/Login/Autenticar', {
      usuario: usuario,
      senha: senha,
      pessoa_id: 1,
      hash: "f013197e-9e2e-4ec7-8c89-4763d6a50e1e",
      papel:""
    })
    .then(function (response) {
      // aqui você pode redirecionar para a página principal ou fazer alguma outra ação de acordo com a resposta do servidor
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div className='login'>
      <div>
        <Logo />
        <form className="centraliza" onSubmit={handleSubmit}>
          <div>
            <input className="inputBarra" placeholder='Usuário' type="text" value={usuario} onChange={handleChangeUsuario} />
          </div>
          <br />
          <div>
            <input className="inputBarra" placeholder='Senha' type="password" value={senha} onChange={handleChangeSenha} />
          </div>
          <br />
          <button className="btnEntrar" type="submit">ENTRAR</button>
        </form>
        <div className='links'>
          <Link className='link' to="/Cadastro">Registrar-se</Link>
        </div>
      </div>
    </div>
  );

}

export default CamposLogin;