import React  from "react";
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import PageHeader from '../../components/headers/index'
import "../pages.css"

const MyPage = () => {
  return (
       <IonPage>
        <PageHeader title="My Page"></PageHeader>
        <IonContent className="ion-padding">
        My Page content displayed here...........<br></br>
        Go to <IonRouterLink routerLink="/manager/more">More Page</IonRouterLink>
       </IonContent>
       </IonPage>
  );
};

export default MyPage;