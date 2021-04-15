import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList} from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import ResultCard from "../../components/cards/matchCard/result/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";
import "../pages.css";


const ResultListPage = () => {
  const [results, setResults] = useState([]);
  const [managerId, setManagerId] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const { currentUser } = useAuth();

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      
      if (!doc.exists) {
        console.log('No such document');
        setErrorMessage('No Team Data Available, Join a Team')
        setShowAlert(true)
        //history.goBack();
      } else {
        const userDoc = { id: doc.id, ...doc.data() };

        //set ManagerId Attributes to matching in DB
        setManagerId(userDoc?.managerId)

      //ref for user managers results collection
      const ref = firestore
      .collection("users")
      .doc(userDoc?.managerId)
      .collection("results");

      //snapshot of doc 
      ref.get().then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResults(docs);
    });
    }
  })

}, [currentUser?.uid]);

  return (
    <IonPage color="secondary">
      <PageHeaderAdd title="Results" href="/manager/result/add"></PageHeaderAdd>
      <IonContent>
        <IonList id="bg-col">
          {results.map((result) => (
            <ResultCard key={result.id} result={result}></ResultCard>
          ))}
        </IonList>
        
        <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='No Match Results Found'
        showAlert={showAlert} 
        msg={errorMessage}>
        </AlertError>

      </IonContent>
    </IonPage>
  );
};

export default ResultListPage;
