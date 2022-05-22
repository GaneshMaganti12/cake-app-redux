import { Provider } from 'react-redux';
import store from './components/Store/Store';
import './App.css';
import CakeContainer from './components/Cake/CakeContainer';
import HooksCakeContainer from './components/Cake/HooksCakeContainer';
import IceCreamContainer from './components/IceCream/IceCreamContainer';
import CakeContainerPayload from './components/Cake/CakeContainerPayload';
import HooksCakeContainerPayload from './components/Cake/HookCakeContainerPayload';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <HooksCakeContainer/>
      <CakeContainer/>
      <HooksCakeContainerPayload/>
      <IceCreamContainer/>
      <CakeContainerPayload/>
      </Provider>
    </div>
  );
}

export default App;
