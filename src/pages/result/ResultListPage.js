import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import ResultCard from "../../components/cards/matchCard/result/index";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

const ResultListPage = () => {
  const [results, setResults] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const resultRef = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("results");
    console.log(currentUser?.uid);
    resultRef.get().then((snapshot) => {
      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResults(results);
    });
  }, [currentUser]);

  return (
    <IonPage color="secondary">
      <PageHeaderAdd title="Results" href="/manager/result/add"></PageHeaderAdd>
      <IonContent>
        <IonList id="bg-col">
          {results.map((result) => (
            <ResultCard result={result}></ResultCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ResultListPage;
