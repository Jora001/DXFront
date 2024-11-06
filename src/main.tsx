import ReactDOM from 'react-dom/client'
import App from './App'
import store from "./store";
import {Provider} from "react-redux";
import '../src/assets/style/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
