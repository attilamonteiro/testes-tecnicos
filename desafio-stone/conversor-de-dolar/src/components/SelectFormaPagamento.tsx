// src/components/SelectFormaPagamento.tsx
import React from 'react';

interface SelectFormaPagamentoProps {
  formaPagamento: 'dinheiro' | 'cartao';
  onFormaPagamentoChange: (novaFormaPagamento: 'dinheiro' | 'cartao') => void;
}

const SelectFormaPagamento: React.FC<SelectFormaPagamentoProps> = ({ formaPagamento, onFormaPagamentoChange }) => {
  return (
    <div>
      <label>Forma de Pagamento:</label>
      <select value={formaPagamento} onChange={(e) => onFormaPagamentoChange(e.target.value as 'dinheiro' | 'cartao')}>
        <option value="dinheiro">Dinheiro</option>
        <option value="cartao">Cartão</option>
      </select>
    </div>
  );
};

export default SelectFormaPagamento;
