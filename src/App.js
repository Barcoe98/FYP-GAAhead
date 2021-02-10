import { IonApp, IonRouterOutlet} from '@ionic/react';
import HomePage from './pages/homePage';
import SecondPage from './pages/secondPage';
import {IonReactRouter } from '@ionic/react-router'
import {BrowserRouter, Route , Redirect} from 'react-router-dom'

function App() {
  return (
   <IonApp>
    <BrowserRouter>  
      <Route exact path="/home"> <HomePage></HomePage></Route>
      <Route exact path="/secondpage"><SecondPage></SecondPage></Route>
      <Redirect exact path="/" to ="/home"></Redirect>
    </BrowserRouter>
   </IonApp>
  );
}

export default App;
