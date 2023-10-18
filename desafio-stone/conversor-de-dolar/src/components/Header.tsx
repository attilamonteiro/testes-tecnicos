// Importe as bibliotecas necessárias
import React from 'react';
import styled from 'styled-components';

// Estilize seus componentes (substitua pelo seu código real)
const HeaderContainer = styled.div`
  // Estilos do container do header
`;

const Logo = styled.img`
  // Estilos da logo
  width: 100px; /* Ajuste o tamanho conforme necessário */
  height: auto; /* Isso garante a proporção correta ao redimensionar a largura */
`;

const DateAndTime = styled.div`
  // Estilos para data e hora
`;

const Header: React.FC = () => {
  // Lógica para obter a data e hora atual
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <HeaderContainer>
      {/* Substitua 'caminho-do-logo.png' pelo caminho correto da sua logo */}
      <Logo src={process.env.PUBLIC_URL + '/stone-logo.png'} alt="Stone Logo" />
      {/* Mostra a data e a hora formatadas */}
      <DateAndTime>{`Data: ${formattedDate}, Hora: ${formattedTime}`}</DateAndTime>
    </HeaderContainer>
  );
};

export default Header;
