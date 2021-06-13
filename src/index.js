import './index.css';
import rerenderApp from "./rerender";

import state from './store/state';
import {addPost, addMessage} from './store/state';

/*import { BrowserRouter as Router, Route, Link } from "react-router-dom";*/

rerenderApp(state, addPost, addMessage);


