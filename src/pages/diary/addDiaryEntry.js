import React, { useState } from "react";
import { IonPage } from "@ionic/react";
import PageHeader from "../../components/headers";
import AddDiaryForm from "../../components/forms/diary";
import AlertError from "../../components/alerts/errorAlert";


import { useAuth,  } from "../../contexts/authContext";
import { firestore, storage } from "../../firebase";
import { useHistory } from "react-router-dom";

import "../pages.css";



const AddDiaryEntryPage = () => {

  const [imgUrl, setImgUrl] = useState("https://res.cloudinary.com/dmikx06rt/image/upload/v1614895409/FYP-GAAhead/Seating_rgtomv.jpg");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const [totalCalories, setTotalCalories] = useState();
  const [steps, setSteps] = useState();
  const [litresWater, setLitresWater] = useState();
  const [hrsSleep, setHrsSleep] = useState();

  const [breakfastCal, setBreakfastCal] = useState();
  const [lunchCal, setLunchCal] = useState();
  const [dinnerCal, setDinnerCal] = useState();
  const [supperCal, setSupperCal] = useState();
  const [snacksCal, setSnacksCal] = useState();

  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [supper, setSupper] = useState("");
  const [snacks, setSnacks] = useState("");

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
  const handleAdd = async () => {
    const data = {
      imgUrl, title, date,
      totalCalories, steps, litresWater, hrsSleep,
      breakfastCal, lunchCal, dinnerCal, supperCal, snacksCal,
      breakfast, lunch, dinner, supper, snacks,
    };

    if (title === "") {
      setErrorMessage('No Title Entered')
      setShowAlert(true)
    }
    else if (date === "") {
      setErrorMessage('No Date Entered')
      setShowAlert(true)
    } 
    else if (totalCalories === "") {
      setErrorMessage('No Total Calories Entered')
      setShowAlert(true)
    }
    else if (steps === '') {
      setErrorMessage('No Steps Entered')
      setShowAlert(true)
    }
    else if (litresWater === "") {
      setErrorMessage('No Litres of water Entered')
      setShowAlert(true)
    }
    else if (breakfastCal === "") {
      setErrorMessage('No Break Calories Entered')
      setShowAlert(true)
    }
    else if (breakfast === '') {
      setErrorMessage('No Meal for Breakfast Entered')
      setShowAlert(true)
    }
    else if (lunchCal === "") {
      setErrorMessage('No Lunch Calories Entered')
      setShowAlert(true)
    }
    else if (lunch === "") {
      setErrorMessage('No Meal for Lunch Entered')
      setShowAlert(true)
    }
    else if (dinnerCal === '') {
      setErrorMessage('No Dinner Calories Entered')
      setShowAlert(true)
    }
    else if (dinner === "") {
      setErrorMessage('No Meal for Dinner Entered')
      setShowAlert(true)
    }
    else if (supperCal === '') {
      setErrorMessage('No Supper Calories Entered')
      setShowAlert(true)
    }
    else if (supper === "") {
      setErrorMessage('No Meal for Supper Entered')
      setShowAlert(true)
    }
    else if (snacksCal === '') {
      setErrorMessage('No Snacks Calories Entered')
      setShowAlert(true)
    }
    else if (snacks === "") {
      setErrorMessage('No Meal for Snacks Entered')
      setShowAlert(true)
    }
    else {

      data.imgUrl = await saveImg(imgUrl)
      const ref = firestore
      .collection("users")
      .doc(currentUser?.uid)
      .collection("diary_entries");

      await ref.add(data);
      history.goBack();
    }
  };

  const handleImgChange = async (event) => {
    const file = event.target.files[0]
    const imgUrl = URL.createObjectURL(file)
    setImgUrl(imgUrl)

  //   setSelectedFile(event.target.files[0]);
	// 	setIsFilePicked(true);
 }

  return (
    <IonPage>
      <PageHeader title="Add Journal Entry"></PageHeader>

      <AddDiaryForm
        formTitle="Journal"
        imgUrl={imgUrl}
        handleImgChange={handleImgChange}
        btnTitle="Add Journal Entry"
        title={title} date={date}
        ttlCal={totalCalories}
        steps={steps} water={litresWater} sleep={hrsSleep}
        breakfastCal={breakfastCal} lunchCal={lunchCal} dinnerCal={dinnerCal}
        supperCal={supperCal} snacksCal={snacksCal} 
        breakfast={breakfast} lunch={lunch} dinner={dinner}
        supper={supper} snacks={snacks} 

        setTitle={(e) => setTitle(e.detail.value)}
        setDate={(e) => setDate(e.detail.value)}
        setSteps={(e) => setSteps(parseInt(e.detail.value))}
        setWater={(e) => setLitresWater(parseInt(e.detail.value))}
        setTtlCal={(e) => setTotalCalories(parseInt(e.detail.value))}
        setSleep={(e) => setHrsSleep(parseInt(e.detail.value))}

        setBreakfastCal={(e) => setBreakfastCal(parseInt(e.detail.value))}
        setBreakfast={(e) => setBreakfast(e.detail.value)}
        setLunchCal={(e) => setLunchCal(parseInt(e.detail.value))}
        setLunch={(e) => setLunch(e.detail.value)}  
        setDinnerCal={(e) => setDinnerCal(parseInt(e.detail.value))}
        setDinner={(e) => setDinner(e.detail.value)}
        setSupperCal={(e) => setSupperCal(parseInt(e.detail.value))}
        setSupper={(e) => setSupper(e.detail.value)}
        setSnacksCal={(e) => setSnacksCal(parseInt(e.detail.value))}
        setSnacks={(e) => setSnacks(e.detail.value)}

        handleAdd={handleAdd}
      ></AddDiaryForm>

    <AlertError 
      setShowAlert={() => setShowAlert(false)} 
      alertHeader='Please Fill All Required Fields'
      showAlert={showAlert} 
      msg={errorMessage}>
    </AlertError>

     
    </IonPage>
  );
};

export default AddDiaryEntryPage;
