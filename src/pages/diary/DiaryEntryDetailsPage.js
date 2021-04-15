import React, { useEffect, useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeaderDelete from "../../components/headers/deleteHeader/index";
import DiaryDetails from "../../components/topicDetails/diary/index"
import AlertDelete from "../../components/alerts/deleteAlert";

import { useParams, useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { useAuth } from "../../contexts/authContext";


const DiaryDetailsPage = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const history = useHistory();

  const [diaryEntry, setDiaryEntry] = useState(null);
  const [delAlert, setDelAlert] = useState(false);

  useEffect(() => {
    const diaryRef = firestore.collection("users")
    .doc(currentUser?.uid)
    .collection("diary_entries").doc(id);

    diaryRef.get(id).then((doc) => {
      const diaryEntries = { id: doc.id, ...doc.data() };
      setDiaryEntry(diaryEntries);
    });
  }, [id]);

  const handleDelete = async () => {
    const resultRef = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("diary_entries")
      .doc(id);
    await resultRef.delete();
    console.log("Confirm Okay");
    history.goBack();
  };

  return (
    <IonPage>
      <PageHeaderDelete title=""
        action={() => setDelAlert(true)}>
      </PageHeaderDelete>
      <DiaryDetails diaryEntry={diaryEntry}></DiaryDetails>

      <AlertDelete
        delAlert={delAlert}
        setDelAlert={() => setDelAlert(false)}
        handleDelete={handleDelete}>
      </AlertDelete>
    </IonPage>
  );
};

export default DiaryDetailsPage;
