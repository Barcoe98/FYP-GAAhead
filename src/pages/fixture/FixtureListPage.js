import React, { useEffect, useState } from "react";
import { IonContent, IonPage, IonList } from "@ionic/react";
import PageHeaderAdd from "../../components/headers/addHeader/index";
import FixtureCard from "../../components/cards/matchCard/fixture/index";

import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";

const FixtureListPage = () => {
  const [fixtures, setFixtures] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fixtureRef = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("fixtures");
    console.log(currentUser?.uid);
    fixtureRef.get().then((snapshot) => {
      const fixtures = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFixtures(fixtures);
    });
  }, [currentUser]);

  return (
    <IonPage>
      <PageHeaderAdd
        title="Fixtures"
        href="/manager/fixture/add"
      ></PageHeaderAdd>
      <IonContent>
        <IonList id="bg-col">
          {fixtures.map((fixture) => (
            <FixtureCard fixture={fixture}></FixtureCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default FixtureListPage;
