import React, { useState, useEffect} from "react";
import { IonPage, IonContent, IonRow, IonCol, IonButton } from "@ionic/react";
import PageHeader from "../../components/headers";
import TeamSheetForm from "../../components/forms/teamSheetForm/index";

import { firestore } from "../../firebase";
import { useParams, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";


const EditFixturePage = () => {
  const [players, setPlayers] = useState([]);
  
  const { currentUser } = useAuth();
  const history = useHistory();
  const { id } = useParams();

  var [position1, setPosition1] = useState("");
  var [position2, setPosition2] = useState("");
  var [position3, setPosition3] = useState("");
  var [position4, setPosition4] = useState("");
  var [position5, setPosition5] = useState("");
  var [position6, setPosition6] = useState("");
  var [position7, setPosition7] = useState("");
  var [position8, setPosition8] = useState("");
  var [position9, setPosition9] = useState("");
  var [position10, setPosition10] = useState("");
  var [position11, setPosition11] = useState("");
  var [position12, setPosition12] = useState("");
  var [position13, setPosition13] = useState("");
  var [position14, setPosition14] = useState("");
  var [position15, setPosition15] = useState("");
  var [position16, setPosition16] = useState("");
  var [position17, setPosition17] = useState("");
  var [position18, setPosition18] = useState("");
  var [position19, setPosition19] = useState("");
  var [position20, setPosition20] = useState("");

  useEffect(() => {
    const ref = firestore
    .collection("users")
    .doc(currentUser?.uid)

    ref.get(currentUser?.uid).then(doc => {
      
      if (!doc.exists) {
        //history.goBack();
      } else {
        const userDoc = { id: doc.id, ...doc.data() };

        const ref = firestore
        .collection("users").where("teamId", '==', userDoc?.teamId)

        //snapshot of doc 
        ref.get().then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlayers(docs);
      });
      }
    })

  }, [currentUser?.uid]);

  const handleAdd = async () => {
    const data = {
      position1, position2, position3, position4, position5,
      position6, position7, position8, position9, position10,
      position11, position12, position13, position14, position15,
      position16, position17, position18, position19, position20
     };
      const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("team_sheets");

      await ref.add(data);
      history.goBack();
  };

  return (
    <IonPage id="bg-col">
    <IonContent>
      <PageHeader title="Add Team Sheet"></PageHeader>

      <TeamSheetForm
        players={players} 
        setPosition1={(e) => setPosition1(e.detail.value)} position1={position1}
        setPosition2={(e) => setPosition2(e.detail.value)} position2={position2}
        setPosition3={(e) => setPosition3(e.detail.value)} position3={position3} 
        setPosition4={(e) => setPosition4(e.detail.value)} position4={position4} 
        setPosition5={(e) => setPosition5(e.detail.value)} position5={position5}
        setPosition6={(e) => setPosition6(e.detail.value)} position6={position6}
        setPosition7={(e) => setPosition7(e.detail.value)} position7={position7}
        setPosition8={(e) => setPosition8(e.detail.value)} position8={position8}
        setPosition9={(e) => setPosition9(e.detail.value)} position9={position9}
        setPosition10={(e) => setPosition10(e.detail.value)} position10={position10}
        setPosition11={(e) => setPosition11(e.detail.value)} position11={position11}
        setPosition12={(e) => setPosition12(e.detail.value)} position12={position12}
        setPosition13={(e) => setPosition13(e.detail.value)} position13={position13}
        setPosition14={(e) => setPosition14(e.detail.value)} position14={position14} 
        setPosition15={(e) => setPosition15(e.detail.value)} position15={position15}
        setPosition16={(e) => setPosition16(e.detail.value)} position16={position16}
        setPosition17={(e) => setPosition17(e.detail.value)} position17={position17}
        setPosition18={(e) => setPosition18(e.detail.value)} position18={position18}
        setPosition19={(e) => setPosition19(e.detail.value)} position19={position19}
        setPosition20={(e) => setPosition20(e.detail.value)} position20={position20}>
      </TeamSheetForm>

      <IonRow>
        <IonCol>
          <IonButton
            onClick={handleAdd}
            id="btnTheme"
            expand="block"
            color="dark"
            fill="solid"
            type="submit">
            Add Team Sheet
          </IonButton>
        </IonCol>
      </IonRow>

    </IonContent>
  </IonPage>
  );
};

export default EditFixturePage;
