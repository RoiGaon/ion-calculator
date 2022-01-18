import React from "react";
import {
  IonAlert,
  IonApp,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { BmiControls, BmiResult, InputControl } from "./components";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const [calculatedBmi, setCalculatedBmi] = React.useState<number | null>();
  const [error, setError] = React.useState<string>();
  const [calcUnits, setCalcUnits] = React.useState<"mkg" | "ftlbs">("mkg");

  const heightInputRef = React.useRef<HTMLIonInputElement>(null);
  const weightInputRef = React.useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;

    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredWeight <= 0 ||
      +enteredHeight <= 0
    ) {
      setError("Please enter a valid (non-negative) input number.");
      return;
    }

    const weightConversionFactor = calcUnits === "ftlbs" ? 2.2 : 1;
    const heightConversionFactor = calcUnits === "ftlbs" ? 3.28 : 1;

    const weight = +enteredWeight / weightConversionFactor;
    const height = +enteredHeight / heightConversionFactor;

    const bmi = weight / (height * height);

    setCalculatedBmi(bmi);
  };

  const resetInputs = () => {
    heightInputRef.current!.value = "";
    weightInputRef.current!.value = "";
    setCalculatedBmi(null);
  };

  const clearErrors = () => {
    setError("");
  };

  const selectCalcUnitHandler = (selectedValue: "mkg" | "ftlbs") => {
    setCalcUnits(selectedValue);
  };

  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearErrors }]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol
                size-sm="8"
                offset-sm="2"
                size-md="6"
                offset-md="3"
                className="ion-no-padding"
              >
                <IonCard className="ion-no-margin">
                  <IonCardContent>
                    <IonGrid className="ion-no-padding">
                      <IonRow>
                        <IonCol>
                          <InputControl
                            selectedValue={calcUnits}
                            onSelectValue={selectCalcUnitHandler}
                          />
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonItem>
                            <IonLabel position="floating">
                              Your Height (
                              {calcUnits === "mkg" ? "meters" : "feet"})
                            </IonLabel>
                            <IonInput
                              type="number"
                              ref={heightInputRef}
                            ></IonInput>
                          </IonItem>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonItem>
                            <IonLabel position="floating">
                              Your Weight ({calcUnits === "mkg" ? "kg" : "lbs"})
                            </IonLabel>
                            <IonInput
                              type="number"
                              ref={weightInputRef}
                            ></IonInput>
                          </IonItem>
                          <BmiControls
                            onCalculate={calculateBMI}
                            onReset={resetInputs}
                          />
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                {calculatedBmi && <BmiResult result={calculatedBmi} />}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
