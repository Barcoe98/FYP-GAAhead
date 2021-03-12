import React  from "react";
import { IonPage, IonContent} from '@ionic/react';
import { flame, time, calendar } from 'ionicons/icons';
import MyProfileDetails from '../../components/topicDetails/myProfile/index'
import PageHeader from '../../components/headers/index'
import "../pages.css"

const MyProfilePage = () => {
  return (
    <IonPage>
        <IonContent>
          <MyProfileDetails></MyProfileDetails>
        </IonContent>
        </IonPage>
  );
};

export default MyProfilePage;