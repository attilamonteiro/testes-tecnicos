// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import InputDolar from './components/InputDolar';
import InputTaxaEstado from './components/InputTaxaEstado';
import SelectFormaPagamento from './components/SelectFormaPagamento';
import BotaoConversao from './components/BotaoConversao';
import { useCurrencyConverter } from './hooks/useCurrencyConverter';

const App: React.FC = () => {
  const {
    exchangeRate,
    isLoading,
    error,
    convertCurrency,
    inputValue,
    setInputValue,
    taxValue,
    setTaxValue,
    paymentMethod,
    setPaymentMethod,
  } = useCurrencyConverter();

  console.log('Current Exchange Rate:', exchangeRate); // Adição para depuração

  const [showResults, setShowResults] = useState<boolean>(false);
  const [convertedValue, setConvertedValue] = useState<number | null>(null);

  const handleConvert = async () => {
    await convertCurrency();
    const newExchangeRate = exchangeRate || 0;
    const converted = inputValue * newExchangeRate * (1 + taxValue / 100);
    setConvertedValue(converted);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
  };

  return (
    <div>
      <Header />

      {!showResults && (
        <>
          {/* InputDolar */}
          <InputDolar inputValue={inputValue} onInputChange={(value) => setInputValue(value)} />

          {/* InputTaxaEstado */}
          <InputTaxaEstado taxaValue={taxValue} onTaxChange={(value) => setTaxValue(value)} />

          {/* SelectFormaPagamento */}
          <SelectFormaPagamento formaPagamento={paymentMethod} onFormaPagamentoChange={(value) => setPaymentMethod(value)} />

          {/* BotaoConversao */}
          <BotaoConversao onConversaoClick={handleConvert} isLoading={isLoading} />
        </>
      )}

      {showResults && (
        <>
          <button onClick={handleBack}>Voltar</button>
          <p>
            O resultado do cálculo é: R${convertedValue}
            <br />
            Compra no {paymentMethod} e taxa de {inputValue} dólar com cotação do dólar a {exchangeRate}.
          </p>
        </>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {exchangeRate && <p>Cotação do dólar: $1,00 = R${exchangeRate}</p>}
    </div>
  );
};

export default App;
