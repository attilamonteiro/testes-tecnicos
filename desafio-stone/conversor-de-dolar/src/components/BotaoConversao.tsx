// src/components/BotaoConversao.tsx
import React from 'react';
import styled from 'styled-components';

interface BotaoConversaoProps {
  onConversaoClick: () => void;
  isLoading: boolean;
}

const BotaoContainer = styled.div`
  // Estilos do container do botão
`;

const BotaoConversao: React.FC<BotaoConversaoProps> = ({ onConversaoClick, isLoading }) => {
  return (
    <BotaoContainer>
      <button onClick={onConversaoClick} disabled={isLoading}>
        {isLoading ? 'Converting...' : 'Converter'}
      </button>
    </BotaoContainer>
  );
};

export default BotaoConversao;
