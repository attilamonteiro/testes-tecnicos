// src/components/InputDolar.tsx
import React from 'react';
import styled from 'styled-components';

interface InputDolarProps {
  inputValue: number;
  onInputChange: (value: number) => void;
}

const InputContainer = styled.div`
  // Estilos do container do input
`;

const InputDolar: React.FC<InputDolarProps> = ({ inputValue, onInputChange }) => {
  return (
    <InputContainer>
      <label>Valor em Dólar:</label>
      <input type="number" value={inputValue} onChange={(e) => onInputChange(Number(e.target.value))} />
    </InputContainer>
  );
};

export default InputDolar;
