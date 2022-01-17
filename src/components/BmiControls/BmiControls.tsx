import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import React from "react";

interface Props {
  onCalculate: () => void;
  onReset: () => void;
}

const BmiControls: React.FC<Props> = ({ onCalculate, onReset }) => {
  return (
    <>
      <IonRow>
        <IonCol className="ion-text-left">
          <IonButton onClick={onCalculate}>
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate
          </IonButton>
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton onClick={onReset}>
            <IonIcon slot="start" icon={refreshOutline} />
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
    </>
  );
};

export default BmiControls;
