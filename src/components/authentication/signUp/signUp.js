import React from 'react'
import { IonContent, IonItem, IonInput, IonList, IonButton, IonIcon, IonLabel} from '@ionic/react';
import {logoFacebook, logoGoogle } from 'ionicons/icons';
import "../auth.css";

 const Register = () => {

  return (<>
    <IonContent>
      <div id="authContainer">
      <IonList>
        <IonLabel id="pgTitle" >Create an Account</IonLabel>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput type="email" id="email" required></IonInput>
        </IonItem>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput type="password" id="pword" required></IonInput>
        </IonItem>
        <IonItem id="rndInput">
          <IonLabel position="stacked">Confirm Password</IonLabel>
          <IonInput type="password" id="confrmPword" required></IonInput>
        </IonItem>
  
        <IonButton id="btnTheme" expand="block" color="dark" shape="" fill="solid" type="submit">
          Register
        </IonButton>
        <ion-grid>
          <ion-row>
            <ion-col col-6>
              <IonButton id="logoBtnTheme" expand="block" color="dark" fill="outline">
                <IonIcon slot="icon-only" icon={logoGoogle} item-left></IonIcon>
              </IonButton>
            </ion-col>
            <ion-col col-6>
              <IonButton id="logoBtnTheme" expand="block" color="dark" fill="outline">
                <IonIcon slot="icon-only" icon={logoFacebook}></IonIcon>
              </IonButton>
            </ion-col>
          </ion-row>
        </ion-grid>

        <IonButton expand="block" fill="clear" routerLink="/login"> 
          Have an Account? Login</IonButton>
          
      </IonList>
      </div>
  </IonContent>

    </>)
  }
export default Register;
