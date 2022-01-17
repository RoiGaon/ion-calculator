import { IonCard, IonCol, IonCardContent, IonRow } from "@ionic/react";
import React from "react";

interface Props {
  result: number;
}

const BmiResult: React.FC<Props> = ({ result }) => {
  console.log(result);

  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h2>Your Body-Mass Index</h2>
            <h3>{result.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
