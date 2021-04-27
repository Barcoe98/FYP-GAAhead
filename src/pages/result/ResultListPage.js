import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList} from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import ResultCard from "../../components/cards/matchCard/result/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";


const ResultListPage = () => {
  const [results, setResults] = useState([]);
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
