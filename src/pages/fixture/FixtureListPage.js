import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import FixtureCard from "../../components/cards/matchCard/fixture/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";

const FixtureListPage = () => {
  const [fixtures, setFixtures] = useState([]);
  const [managerId, setManagerId] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const myManagerId = null

  useEffect(() => {

    if (myManagerId !== null ) {

      //set Manager ID to user manager ID
      setManagerId(myManagerId)

      //ref for user managers fixtures collection
      const ref = firestore
      .collection("users")
      .doc(managerId)
      .collection("fixtures");

      //snapshot of doc 
      ref.get().then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFixtures(docs);
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
        title="Fixtures"
        href="/manager/fixture/add"
      ></PageHeaderAdd>
      <IonContent>
        <IonList id="bg-col">
          {fixtures.map((fixture) => (
            <FixtureCard key={fixture.id} fixture={fixture}></FixtureCard>
          ))}
        </IonList>

        <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='No Match Fixtures Found'
        showAlert={showAlert} 
        msg={errorMessage}>
        </AlertError>

      </IonContent>
    </IonPage>
  );
};

export default FixtureListPage;
