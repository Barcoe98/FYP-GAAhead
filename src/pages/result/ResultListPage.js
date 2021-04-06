import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList} from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import ResultCard from "../../components/cards/matchCard/result/index";
import AlertError from "../../components/alerts/errorAlert";

import { firestore } from "../../firebase";

const ResultListPage = () => {
  const [results, setResults] = useState([]);
  const [managerId, setManagerId] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const myManagerId = null

  useEffect(() => {

    if (myManagerId !== null ) {
      //set Manager ID to user manager ID
      setManagerId(myManagerId)

      //ref for user managers results collection
      const ref = firestore
      .collection("users")
      .doc(managerId)
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
    else {
      setManagerId(null)
      setErrorMessage('No Team Data Available, Join a Team')
      setShowAlert(true)
      console.log('error') 
    }
    
  }, [managerId]);

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
