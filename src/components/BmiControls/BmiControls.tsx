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
      <IonRow className="ion-margin-top">
        <IonCol className="ion-text-center" size="12" size-md="6">
          <IonButton
            onClick={onCalculate}
            size="large"
            expand="block"
            color="secondary"
          >
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate
          </IonButton>
        </IonCol>
        <IonCol className="ion-text-center" size="12" size-md="6">
          <IonButton onClick={onReset} fill="clear" color="medium">
            <IonIcon slot="start" icon={refreshOutline} />
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
    </>
  );
};

export default BmiControls;
