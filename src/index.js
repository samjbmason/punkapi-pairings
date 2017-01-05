import Inferno from 'inferno'
import App from './App';
import 'tachyons';
import './styles.css'

if(process.env.NODE_ENV !== 'production') { require('inferno-devtools') }

Inferno.render(
  <App />,
  document.getElementById('root')
);
