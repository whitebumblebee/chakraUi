import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from './theme';


const  App = ({ children }) => {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        {children}
      </ThemeProvider>
    </div>
  );
}

export default App;


// Use at the root of your app
