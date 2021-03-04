import React, {useEffect, useState } from "react";
import { IonContent, IonRow, IonCol, IonButton, IonGrid, IonList, IonPage, IonText, IonIcon} from '@ionic/react';
import { flame, time, barChart, calendar } from 'ionicons/icons';
import PageHeader from '../../components/headers'
import './fitnessTest.css';
import { useParams } from "react-router-dom";
import { firestore } from '../../firebase'

const FitnessTestDetailsPage = () => {

  const {id} = useParams()
  const  [fitnessTest, setFitnessTest] =  useState(null)

  useEffect(() => {
    const fTestRef = firestore.collection('fitness_tests').doc(id)
    fTestRef.get(id).then(doc => {
      const fitnessTest = { id: doc.id, ...doc.data()}
      setFitnessTest(fitnessTest);
    });
  }, [id]);


  return (
    <IonPage>
    <PageHeader title=""></PageHeader>
        <IonContent>
        <IonList id="ft-bg-color"> 
        <div id="ft-bg-img"></div>
          <h1 id="sectionTitle">{fitnessTest?.title}</h1>

            <div id="sectionContent">
              <IonGrid>
                <IonRow>
                  <IonCol size="4">
                  <IonRow id="fIcon">
                    <IonCol> <IonIcon size="large" icon={calendar}></IonIcon></IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>{fitnessTest?.date}</IonCol>
                    </IonRow>
                  </IonCol>

                  <IonCol size="4">
                    <IonRow id="fIcon">
                      <IonCol><IonIcon size="large" icon={time}></IonIcon></IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>{fitnessTest?.time}</IonCol>
                    </IonRow>
                  </IonCol>

                  <IonCol size="4">
                  <IonRow id="fIcon">
                    <IonCol> <IonIcon size="large" icon={flame}></IonIcon></IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>{fitnessTest?.difficulty}</IonCol>
                    </IonRow>
                  </IonCol>

                </IonRow>
              </IonGrid>

              <hr id="contentDivider"></hr>

              <h5 color="dark" id="sectionTitle">Stretches/Warm Up</h5>
              <IonText>{fitnessTest?.warm_up}</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Exercises</h5>
              <IonText>{fitnessTest?.exercises}</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Warm Down</h5>
              <IonText>{fitnessTest?.warm_down}</IonText>
            </div>

          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default FitnessTestDetailsPage;