import React, { useState, useEffect } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../../components/headers";
import EditPlayerProfileForm from "../../../components/forms/myProfile/index";
import AlertError from "../../../components/alerts/errorAlert";

import { useAuth,  } from "../../../contexts/authContext";
import { firestore, storage } from "../../../firebase";
import { useHistory } from "react-router-dom";

import "../../pages.css";

const EditPlayerProfilePage = () => {

  const [imgUrl, setImgUrl] = useState("https://res.cloudinary.com/dmikx06rt/image/upload/v1619458552/placeholderProfile2_z5vadh.jpg");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [position, setPosition] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();

  const [profileDetails, setProfileDetails] = useState();

  useEffect(() => {
    const playerRef = firestore.collection("users").doc(currentUser?.uid);
    playerRef.get(currentUser?.uid).then((doc) => {
      const profileDetails = { id: doc.id, ...doc.data() };
      setProfileDetails(profileDetails);
    });

    //setImgUrl(profileDetails?.imgUrl)
    setFullName(profileDetails?.fullName)
    setAge(profileDetails?.age)
    setEmail(profileDetails?.email)
    setNumber(profileDetails?.number)
    setWeight(profileDetails?.weight)
    setHeight(profileDetails?.height)
    setPosition(profileDetails?.position)

  }, [currentUser?.uid, profileDetails?.age, profileDetails?.email, profileDetails?.fullName, profileDetails?.height, profileDetails?.imgUrl, profileDetails?.number, profileDetails?.position, profileDetails?.weight]);

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
    setImgUrl(imgUrl)
  }

  const handleAdd = async () => {
    const data = {
      imgUrl, fullName, age, height,
      weight, email, number,
      position,
    };

    if (fullName === "") {
      setErrorMessage('No Name Entered')
      setShowAlert(true)
    }
    else if (height === "") {
      setErrorMessage('No Height Entered')
      setShowAlert(true)
    } 
    else if (weight === "") {
      setErrorMessage('No Weight Entered')
      setShowAlert(true)
    }
    else if (number === "") {
      setErrorMessage('No Number Entered')
      setShowAlert(true)
    } 
    else if (email === '') {
      setErrorMessage('No Email Entered')
      setShowAlert(true)
    }
    else if (age === "") {
      setErrorMessage('No Age Entered')
      setShowAlert(true)
    }
    else if (position === "") {
      setErrorMessage('No Position Entered')
      setShowAlert(true)
    }
    else {

      data.imgUrl = await saveImg(imgUrl)
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

      <EditPlayerProfileForm

        imgSrc={imgUrl}
        handleImgChange={handleImgChange}
        btnTitle="Update Profile"
        fullName={fullName} age={age} position={position}  
        weight={weight} height={height}
        email={email} number={number}

        setFullName={(e) => setFullName(e.detail.value)}
        setAge={(e) => setAge(parseInt(e.detail.value))}
        setEmail={(e) => setEmail(e.detail.value)}
        setNumber={(e) => setNumber(parseInt(e.detail.value))}
        setPosition={(e) => setPosition(e.detail.value)}
        setHeight={(e) => setHeight(parseInt(e.detail.value))}
        setWeight={(e) => setWeight(parseInt(e.detail.value))}
        
        handleAdd={handleAdd}

      ></EditPlayerProfileForm>

    <AlertError 
      setShowAlert={() => setShowAlert(false)} 
      alertHeader='Please Fill All Required Fields'
      showAlert={showAlert} 
      msg={errorMessage}>
    </AlertError>

    </IonPage>
  );
};

export default EditPlayerProfilePage;
