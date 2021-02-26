import React, {useEffect, useState } from "react";
import { IonContent, IonRow, IonCol, IonButton, IonGrid, IonList, IonPage, IonText, IonIcon} from '@ionic/react';
import { flame, time, barChart } from 'ionicons/icons';
import PageHeader from '../../components/headers'
import './Training.css';
import { useParams } from "react-router-dom";
import { firestore } from '../../firebase'

const FitnessTestDetailsPage = () => {

  const {id} = useParams()
  const  [trainingSchedule, setTrainingSchedule] =  useState(null)

  useEffect(() => {
    const tScheduleRef = firestore.collection('training_schedules').doc(id)
    tScheduleRef.get(id).then(doc => {
      const trainingScedules = { id: doc.id, ...doc.data()}
      setTrainingSchedule(trainingScedules);
    });
  }, [id]);


  return (
    <IonPage>
      <PageHeader title=''></PageHeader>
        <IonContent>
        <IonList> 
          <div id="sectionContent">
            <img className="center" id="testImg" alt="text" src= "https://res.cloudinary.com/dmikx06rt/image/upload/v1588541857/samples/landscapes/nature-mountains.jpg"></img>
            <h1 color="dark" id="sectionTitle"> {trainingSchedule?.title} </h1>
          </div>
        
            <div id="sectionContent">
              <IonGrid>
                <IonRow>
                  <IonCol col-4>
                      <IonIcon size="large" icon={flame}></IonIcon><br></br>
                      <IonText className="center">{trainingSchedule?.date}</IonText>
                  </IonCol>
                  <IonCol col-4>
                      <IonIcon size="large" icon={time}></IonIcon><br></br>
                      <IonText className="center">{trainingSchedule?.time}
                      </IonText>
                  </IonCol>
                  <IonCol col-4>
                      <IonIcon className="center" size="large" icon={barChart}></IonIcon><br></br>
                      <IonText className="center">{trainingSchedule?.difficulty}</IonText>
                  </IonCol>
                </IonRow>
              </IonGrid>

              <hr id="contentDivider"></hr>

              <h5 color="dark" id="sectionTitle">Stretches/Warm Up</h5>
              <IonText>{trainingSchedule?.warm_up}</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Exercises</h5>
              <IonText>{trainingSchedule?.exercises}</IonText>

              <hr id="contentDivider"></hr>
              <h5 color="dark" id="sectionTitle">Warm Down</h5>
              <IonText>{trainingSchedule?.warm_down}</IonText>
            </div>

          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default FitnessTestDetailsPage;