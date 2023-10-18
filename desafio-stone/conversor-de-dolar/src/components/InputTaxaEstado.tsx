// src/components/InputTaxaEstado.tsx
import React from 'react';
import styled from 'styled-components';

interface InputTaxaEstadoProps {
  taxaValue: number;
  onTaxChange: (value: number) => void;
}

const InputContainer = styled.div`
  // Estilos do container do input
`;

const InputTaxaEstado: React.FC<InputTaxaEstadoProps> = ({ taxaValue, onTaxChange }) => {
  return (
    <InputContainer>
      <label>Taxa do Estado (%):</label>
      <input type="number" value={taxaValue} onChange={(e) => onTaxChange(Number(e.target.value))} />
    </InputContainer>
  );
};

export default InputTaxaEstado;
