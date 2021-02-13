import React from 'react'
import { IonRouterLink, IonTitle, IonHeader, IonToolbar, IonContent, IonItem, IonInput, IonList, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonLabel} from '@ionic/react';
import {logoFacebook, logoGoogle } from 'ionicons/icons';

import "../auth.css";

 const SignIn = () => {

  return (<>
    <IonContent>

      <IonHeader>
          <IonToolbar>
            <IonTitle>GAAhead</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div id="container">
        <IonList>
        <IonLabel position="floating">Login</IonLabel>
          <IonItem id="rounded">
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" id="email" required></IonInput>
          </IonItem>
          <IonItem id="rounded">
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" id="pword" required></IonInput>
          </IonItem>
    
          <IonButton  expand="block" color="dark" shape="" fill="solid" type="submit">
            Login 
          </IonButton>
    
          <IonButton expand="block" color="dark" fill="outline">
            <IonIcon slot="icon-only" icon={logoGoogle} item-left></IonIcon>
          </IonButton>
          <IonButton expand="block" color="dark" fill="outline">
            <IonIcon slot="icon-only" icon={logoFacebook}></IonIcon>
          </IonButton>

          <IonButton expand="block" fill="clear" routerLink="/login"> 
            Need an Account? Sign Up</IonButton>
            
        </IonList>
        </div>

    </IonContent>

      </>
      )
    }

export default SignIn;
