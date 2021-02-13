import React from 'react'
import { IonContent, IonTitle, IonToolbar, IonHeader, IonItem, IonInput, IonList, IonButton, IonIcon, IonItemDivider, IonLabel} from '@ionic/react';
import {logoFacebook, logoGoogle } from 'ionicons/icons';

import "../auth.css";

 const SignUp = () => {

    return (<>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>GAAhead</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonLabel  position="floating">Create An Account</IonLabel>
          <IonItem id="rounded">
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" id="email" required></IonInput>
          </IonItem>
          <IonItem id="rounded">
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" id="pword" required></IonInput>
          </IonItem>
          <IonItem id="rounded">
            <IonLabel position="stacked">Confirm Password</IonLabel>
            <IonInput type="password" id="confirmpword" required></IonInput>
          </IonItem>
       
          <IonButton  expand="block" color="dark" shape="" fill="solid" type="submit">
            Sign Up 
          </IonButton>
    
          <IonButton expand="block" color="dark" fill="outline">
            <IonIcon slot="icon-only" icon={logoGoogle} item-left></IonIcon>
          </IonButton>
          <IonButton expand="block" color="dark" fill="outline">
            <IonIcon slot="icon-only" icon={logoFacebook}></IonIcon>
          </IonButton>

          <IonButton expand="block" fill="clear" routerLink="/login"> 
          Have an Account? Login</IonButton>
          </IonList>
        </IonContent>

      </>
      )
    }

export default SignUp;
