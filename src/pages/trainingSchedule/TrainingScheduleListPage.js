import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import TrainingScheduleCard from "../../components/cards/trainingScheduleCard/index";
import { firestore } from "../../firebase";
import AlertError from "../../components/alerts/errorAlert";


const TrainingSchedulePage = () => {
  const [trainingSchedules, setTrainingSchedules] = useState([]);
  const [managerId, setManagerId] = useState();
  const myManagerId = null

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {

    if (myManagerId !== null ) {
      //set Manager ID to user manager ID
      setManagerId(myManagerId)

      //ref for user managers results collection
      const ref = firestore
      .collection("users")
      .doc(managerId)
      .collection("training_schedules");

      //snapshot of doc 
      ref.get().then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTrainingSchedules(docs);
    });
    }
    else {
      setManagerId(null)
      setErrorMessage('No Team Data Available, Join a Team')
      setShowAlert(true)
      console.log('error') 
    }
    
  }, [managerId]);


  return (
    <IonPage>
      <PageHeaderAdd
        title="Training Schedules"
        href="/manager/trainingschedule/add"
      ></PageHeaderAdd>
      <IonContent>
        <IonList id="bg-col">
          {trainingSchedules.map((tSchedule) => (
            <TrainingScheduleCard key={tSchedule.id} tSchedule={tSchedule}></TrainingScheduleCard>
          ))}
        </IonList>

        <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='No Training Schedules Found'
        showAlert={showAlert} 
        msg={errorMessage}>
        </AlertError>

      </IonContent>
    </IonPage>
  );
};

export default TrainingSchedulePage;
