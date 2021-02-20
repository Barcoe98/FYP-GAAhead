import { useEffect, useState } from "react";
import { firestore } from "../firebase";


const useFitnessTest = id => {
  const [fitnessTest, setFitnessTest] = useState(null);
  
  useEffect(() => {
    const fTestRef = firestore.collection('fitness_tests').doc(id)
    fTestRef.get(id).then(fitnessTest => {
    setFitnessTest(fitnessTest);
    });
  }, [id]);
  
  return [fitnessTest, setFitnessTest]
};

export default useFitnessTest