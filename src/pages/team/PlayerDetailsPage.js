import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonList,
  IonPage,
  IonText,
  IonIcon,
} from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase";
import "./player.css";

const PlayerDetailsPage = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const playerRef = firestore.collection("players").doc(id);
    playerRef.get(id).then((doc) => {
      const players = { id: doc.id, ...doc.data() };
      setPlayer(players);
    });
  }, [id]);

  return (
    <IonPage>
      <IonContent>
        <IonList id="p-bg-color">
          <div id="p-bg-img"></div>
          <h1 id="sectionTitle">{player?.name}</h1>

          <div id="sectionContent">
            <IonGrid>
              <IonRow>
                <IonCol size="3">
                  <IonRow id="fIcon">
                    <IonCol>
                      {" "}
                      <IonIcon
                        size="large"
                        icon={informationCircleOutline}
                      ></IonIcon>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>{player?.date}</IonCol>
                  </IonRow>
                </IonCol>

                <IonCol size="3">
                  <IonRow id="fIcon">
                    <IonCol>
                      <IonIcon
                        size="large"
                        icon={informationCircleOutline}
                      ></IonIcon>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>{player?.hooks}</IonCol>
                  </IonRow>
                </IonCol>

                <IonCol size="3">
                  <IonRow id="fIcon">
                    <IonCol>
                      {" "}
                      <IonIcon
                        size="large"
                        icon={informationCircleOutline}
                      ></IonIcon>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>{player?.blocks}</IonCol>
                  </IonRow>
                </IonCol>

                <IonCol size="3">
                  <IonRow id="fIcon">
                    <IonCol>
                      {" "}
                      <IonIcon
                        size="large"
                        icon={informationCircleOutline}
                      ></IonIcon>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>{player?.difficulty}</IonCol>
                  </IonRow>
                </IonCol>
              </IonRow>
            </IonGrid>

            <hr id="contentDivider"></hr>
            <h5 id="sectionTitle">Biography</h5>
            <IonText>First Name:{player?.fName}</IonText>
            <br></br>
            <IonText>Last Name:{player?.lName}</IonText>
            <br></br>
            <IonText>Age:{player?.age}</IonText>
            <br></br>
            <IonText>Weight:{player?.weight}</IonText>
            <br></br>
            <IonText>Height:{player?.height}</IonText>
            <br></br>
            <IonText>Position:{player?.position}</IonText>

            <hr id="contentDivider"></hr>
            <h5 id="sectionTitle">Injuries</h5>
            <IonText>{player?.injuries}</IonText>

            <hr id="contentDivider"></hr>
            <h5 id="sectionTitle">Infomation Area</h5>
            <IonText>{player?.info}</IonText>

            <hr id="contentDivider"></hr>
            <h5 id="sectionTitle">More</h5>
            <IonText>{player?.More}</IonText>
          </div>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PlayerDetailsPage;
