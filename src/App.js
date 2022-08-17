import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import * as math from 'mathjs';
const App = () => {
  const btnColor = '#f2a33c';

  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const addToText = (val) => {
    setText((text) => [...text, val + '']);
  };

  const resetInput = () => {
    setText('');
    setResult('');
  };

  const calculateResult = () => {
    const input = text.join(''); // Remove Commas
    setResult(math.evaluate(input));
  };
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result}></Input>
        <div className="row">
          <Button symbol="7" handleClick={addToText}></Button>
          <Button symbol="8" handleClick={addToText}></Button>
          <Button symbol="9" handleClick={addToText}></Button>
          <Button symbol="/" color={btnColor} handleClick={addToText}></Button>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText}></Button>
          <Button symbol="5" handleClick={addToText}></Button>
          <Button symbol="6" handleClick={addToText}></Button>
          <Button symbol="*" color={btnColor} handleClick={addToText}></Button>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText}></Button>
          <Button symbol="2" handleClick={addToText}></Button>
          <Button symbol="3" handleClick={addToText}></Button>
          <Button symbol="+" color={btnColor} handleClick={addToText}></Button>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText}></Button>
          <Button symbol="." handleClick={addToText}></Button>
          <Button symbol="=" handleClick={calculateResult}></Button>
          <Button symbol="-" color={btnColor} handleClick={addToText}></Button>
        </div>
        <Button symbol="Clear" color="lightgreen" handleClick={resetInput} />
      </div>
    </div>
  );
};

export default App;
