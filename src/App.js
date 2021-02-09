import { IonApp, IonRouterOutlet} from '@ionic/react';
import HomePage from './pages/homePage';
import SecondPage from './pages/secondPage';
import {IonReactRouter } from '@ionic/react-router'
import {Route , Redirect} from 'react-router-dom'

function App() {
  return (
   <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/secondpage" component={SecondPage}></Route>
        <Redirect exact path="/" to ="/home"/>
      </IonRouterOutlet>
    </IonReactRouter>
   </IonApp>
  );
}

export default App;
