import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom";

test('render without crashing', () => {
  const div = document.createElement('dev');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
