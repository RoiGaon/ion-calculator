import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";
import "./BmiResult.css";

interface Props {
  result: number;
}

const BmiResult: React.FC<Props> = ({ result }) => {
  return (
    <IonCard className="result">
      <IonCardContent className="ion-text-center">
        <h2>Your Body-Mass Index</h2>
        <h3>{result.toFixed(2)}</h3>
      </IonCardContent>
    </IonCard>
  );
};

export default BmiResult;
