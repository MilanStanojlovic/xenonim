import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import image from './assets/logo.png';
import './styles/style.scss';

const App: FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={image} alt="image" />
      <h1>Hello World!</h1>
      <p>test color</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));