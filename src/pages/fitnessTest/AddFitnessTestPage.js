import React from "react";
import { IonContent, IonRow, IonCol, IonButton, IonGrid, IonList, IonPage, IonText, IonIcon} from '@ionic/react';
import { flame, time, barChart } from 'ionicons/icons';
import PageHeader from '../../components/headers/pageHeader'
import './fitnessTest.css';

const FitnessTestPage = () => {
  return (
    <IonPage>
      <PageHeader title=''></PageHeader>
        <IonContent>
        <IonList> 
          <div id="sectionContent">
            <img class="center" id="testImg" alt="text" src= "https://res.cloudinary.com/dmikx06rt/image/upload/v1588541857/samples/landscapes/nature-mountains.jpg"></img>
            <h1 color="dark" id="sectionTitle">Fitness Test Title</h1>
          </div>
        
            <div id="sectionContent">
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonButton expand="block" color="dark">
                      <IonIcon icon={flame}></IonIcon>
                      <IonText>Test</IonText>
                    </IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton expand="block" color="dark">
                      <IonIcon icon={time}></IonIcon>
                      <IonText>Test</IonText>
                    </IonButton>
                  </IonCol>
                  <IonCol>
                    <IonButton  expand="block" color="dark">
                      <IonIcon icon={barChart}></IonIcon><br></br>
                      <IonText>Test</IonText>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>

              <hr id="contentDivider"></hr>

              <h5 color="dark" id="sectionTitle">Stretches/Warm Up</h5>
              <IonText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
              At vero eos et accusam et justo duo dolores et ea rebum. 
              </IonText>

              <hr id="contentDivider"></hr>

              <h5 color="dark" id="sectionTitle">Exercises</h5>
              <IonText>40 Minute Jog at half pace. 2 Minute Plank. 30 push ups. 30 sit ups
              </IonText>

              <hr id="contentDivider"></hr>

              <h5 color="dark" id="sectionTitle">Warm Down</h5>
              <IonText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
              At vero eos et accusam et justo duo dolores et ea rebum. 
              </IonText>
            </div>

          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default FitnessTestPage;