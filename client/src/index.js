import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'jotai';

const queryClient = new QueryClient();

const theme = extendTheme({
  colors: {
    primary: {
      100: '#EEA47FFF',
      900: '#00539CFF'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
