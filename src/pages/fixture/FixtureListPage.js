import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import FixtureCard from "../../components/cards/matchCard/fixture/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

const FixtureListPage = () => {
  const [fixtures, setFixtures] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      
      const userDoc = { id: doc.id, ...doc.data() };

        if (userDoc.teamId === "") {
          console.log('No Team Data Available');
          setErrorMessage('Join a Team')
          setShowAlert(true)
        } 
       else {
        //ref for user managers results collection
        const ref = firestore
        .collection("users")
        .doc(userDoc?.teamId)
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
  })

}, [currentUser?.uid]);

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
