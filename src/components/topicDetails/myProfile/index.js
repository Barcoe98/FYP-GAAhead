import React from "react";
import { IonContent, IonRow, IonCol, IonGrid, IonList, IonText, IonIcon} from '@ionic/react';
import { flame, time, calendar } from 'ionicons/icons';

import './myProfile.css'

const MyProfileDetails = () => {

  return (
    <IonContent>
      <IonList id="my-bg-color"> 
      <div id="my-bg-img">
      <h1 id="myName">Michael Barcoe</h1>
      <h4 id="myEmail">test@test.com</h4></div>
        

          <div id="myContent">
            <IonGrid>
              <IonRow>
                <IonCol size="4">
                  <IonRow id="myIcon"><IonCol><IonIcon size="large" icon={calendar}></IonIcon></IonCol></IonRow>
                  <IonRow><IonCol>22</IonCol></IonRow>
                </IonCol>
                <IonCol size="4">
                  <IonRow id="myIcon"><IonCol><IonIcon size="large" icon={time}></IonIcon></IonCol></IonRow>
                  <IonRow><IonCol>6ft 3in</IonCol></IonRow>
                </IonCol>
                <IonCol size="4">
                  <IonRow id="myIcon"><IonCol><IonIcon size="large" icon={flame}></IonIcon></IonCol></IonRow>
                  <IonRow><IonCol>70kg</IonCol></IonRow>
                </IonCol>
              </IonRow>
            </IonGrid>
            </div>

            <div id="myContent">
            <h5 color="dark" id="myContentTitle">Bio</h5>
            <IonText>long paragraph</IonText>
            </div>

            <div id="myContent">
            <h5 color="dark" id="myContentTitle">Test</h5>
            <IonText>Charts</IonText>
            </div>

            <div id="myContent">
            <h5 color="dark" id="myContentTitle">Notes</h5>
            <IonText>lots of Notes</IonText>
            </div>

        </IonList>
    </IonContent>

  );
};

export default MyProfileDetails;