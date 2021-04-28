import React, { useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../../components/headers";
import EditMyProfileForm from "../../../components/forms/myProfile/manager/editProfileForm";
import AlertError from "../../../components/alerts/errorAlert";

import { useAuth,  } from "../../../contexts/authContext";
import { firestore, storage } from "../../../firebase";
import { useHistory } from "react-router-dom";

import "../../pages.css";

const EditManagerProfilePage = () => {

  const [teamCrest, setTeamCrest] = useState("https://res.cloudinary.com/dmikx06rt/image/upload/v1619458552/placeholderProfile2_z5vadh.jpg");
  const [fullName, setFullName] = useState("");
  const [teamName, setTeamName] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();

  async function saveImg(blobUrl) {
    const ref = storage.ref('users/' + currentUser.uid + '/images/' + Date.now())
    const res = await fetch(blobUrl)
    const blob = await res.blob()
    const snapshot = await ref.put(blob)
    const url = await snapshot.ref.getDownloadURL()
    return url
  }

  const handleImgChange = async (event) => {
    const file = event.target.files[0]
    const imgUrl = URL.createObjectURL(file)
    setTeamCrest(imgUrl)
  }

  const handleAdd = async () => {
    const data = { teamCrest, fullName, teamName };

    if (fullName === "") {
      setErrorMessage('No Name Entered')
      setShowAlert(true)
    }
    else if (teamName === "") {
      setErrorMessage('No Team Name Entered')
      setShowAlert(true)
    } 
    else {
      data.coverImg = await saveImg(teamCrest)
      const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)

      await ref.update(data);
      history.goBack();
    }
  };
  
  return (
    <IonPage>
      <PageHeader title="Update Profile Details"></PageHeader>

      <EditMyProfileForm
        coverImg={teamCrest}
        handleImgChange={handleImgChange}
        btnTitle="Update Profile"
        fullName={fullName} teamName={teamName} 
        setFullName={(e) => setFullName(e.detail.value)}
        setTeamName={(e) => setTeamName(e.detail.value)}
        handleAdd={handleAdd}
      ></EditMyProfileForm>

      <AlertError 
        setShowAlert={() => setShowAlert(false)} 
        alertHeader='Please Fill All Required Fields'
        showAlert={showAlert} 
        msg={errorMessage}>
      </AlertError>
    </IonPage>
  );
};

export default EditManagerProfilePage;
