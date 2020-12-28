import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import View from './components/View';
import Send from './components/Send';

function App() {
  return (
    <div className="App">
      <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <View />
            </Route>
            <Route exact path="/send">
              <Send />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;