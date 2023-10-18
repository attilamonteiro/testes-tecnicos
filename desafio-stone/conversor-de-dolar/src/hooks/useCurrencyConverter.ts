// src/hooks/useCurrencyConverter.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

type PaymentMethod = 'dinheiro' | 'cartao';

interface CurrencyConverterData {
  exchangeRate: number | null;
  isLoading: boolean;
  error: string | null;
}

export const useCurrencyConverter = () => {
  const [data, setData] = useState<CurrencyConverterData>({
    exchangeRate: null,
    isLoading: false,
    error: null,
  });
  const [inputValue, setInputValue] = useState<number>(0);
  const [taxValue, setTaxValue] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('dinheiro');
  const [convertedValue, setConvertedValue] = useState<number | null>(null); // Add this line

  useEffect(() => {
    const fetchData = async () => {
      setData((prevData) => ({ ...prevData, isLoading: true }));
      try {
        const response = await axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        setData({ exchangeRate: response.data[0]?.bid || null, isLoading: false, error: null });
      } catch (error) {
        setData({ exchangeRate: null, isLoading: false, error: 'Erro ao obter a cotação' });
      }
    };

    fetchData();
  }, []);

  const convertCurrency = async () => {
    try {
      const response = await axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL');
      const usdBrlData = response.data['USDBRL'];
      const newExchangeRate = usdBrlData?.bid || null;

      console.log('API Response:', usdBrlData);
      console.log('New Exchange Rate:', newExchangeRate);

      if (newExchangeRate !== null) {
        const converted = inputValue * newExchangeRate * (1 + taxValue / 100);
        setConvertedValue(converted);
        console.log('Converted Value:', converted);
        return { newExchangeRate, converted }
      }
    } catch (error) {
      console.error('Error fetching conversion data:', error);
    }
  };

  return {
    ...data,
    convertCurrency,
    inputValue,
    setInputValue,
    taxValue,
    setTaxValue,
    paymentMethod,
    setPaymentMethod,
    convertedValue,
    
  };
};
