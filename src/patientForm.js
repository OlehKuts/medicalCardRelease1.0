import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import T from "prop-types";
import "./styles.css";
import { changedListMounter } from "./functions/changedListMounter";
import { numArrayCreator } from "./functions/numArrayCreator";
import { routes } from "./routesConfig";
import {
  diseaseList,
  doctors,
  start2List,
  conditionList,
  crownDestructionList,
  drugName1List,
  drugName2List,
  drugName3List,
  drugName4List,
  drugName5List,
  pliersList,
  elevatorList,
  surgeons,
  assistants,
  anesthetistList,
  areaList,
  sideList,
  injuryReasonList,
  woundSurfaceList,
  woundTypeList,
  woundFormList,
  woundLedgesList,
  woundBleedingList,
  woundAliensList,
  sutureTypeList,
  sutureMaterialList,
  sutureSizeList,
  toothList,
  retention1List,
  retention2List,
  retention3List,
  retention4List,
  morbiList,
  abscessAreaList,
  abscessTypeList,
  abscessReasonList,
  cystTypeList,
  rootSealedList,
  neoplasmTypeList,
  growthRateList,
  neoplasmFormList,
  neoplasmBorderList,
  neoplasmMovabilityList,
  neoplasmPoignancyList,
  neoplasmConsistanceList,
  neoplasmSurfaceList,
  neoplasmColorList,
  bilateralismList,
  fractureLowerAreaList,
  fractureBiasList,
  fractureDirectionList,
  fractureLowerTeethList,
  teethInFractureLineList,
  fractureStepList,
  continuityList,
  xRayList,
  fractureOperationTypeList,
  dlTypeList,
  dlOperationTypeList,
  dlToothList,
  dlDirectionList,
  overCompleteLocationList,
  xRayList2,
  overCompleteFormList,
  overCompleteAmountList
} from "./database";

export const PatientForm = ({ onAdd }) => {
  const history = useHistory();
  console.log(history);
  // const onClick = () => {
  //   history.push(routes.HOME);
  // };

  const [showForm, setShowForm] = useState(false);
  const [showAddPatients, setShowAddPatients] = useState(true);
  const [showPerioLines, setShowPerioLines] = useState(false);
  const [showSkinWoundLines, setShowSkinWoundLines] = useState(false);
  const [suturingLine, setSuturingLine] = useState(false);
  const [showCariesLines, setShowCariesLines] = useState(false);
  const [showAbscessLines, setShowAbscessLines] = useState(false);
  const [showNeoplasmLines, setShowNeoplasmLines] = useState(false);
  const [showCystLines, setShowCystLines] = useState(false);
  const [showRetentionLines, setShowRetentionLines] = useState(false);
  const [showFractureLowerJawLines, setShowFractureLowerJawLines] = useState(
    false
  );
  const [showFractureLowerJawLine2, setShowFractureLowerJawLine2] = useState(
    false
  );
  const [showDlLines, setShowDlLines] = useState(false);
  const [showDlLine2, setShowDlLine2] = useState(false);
  const [showOverCompleteLines, setShowOverCompleteLines] = useState(false);
  const [showOverCompleteLine2, setShowOverCompleteLine2] = useState(false);
  const [urgentDisease, setUrgentDisease] = useState(true);
  const [complaintsDuration, setComplaintsDuration] = useState(true);
  const [showAdditionAppointment, setShowAdditionAppointment] = useState(false);

  const onCancel = () => {
    setShowForm(false);
    setShowAddPatients(true);
    setDisease(diseaseList[0].value);
    setShowPerioLines(false);
    setShowSkinWoundLines(false);
    setSuturingLine(false);
    setShowCariesLines(false);
    setShowAbscessLines(false);
    setUrgentDisease(true);
    setDoctorSelected(false);
    setCardNumberSelected(false);
    setNameSelected(false);
    setWeightSelected(false);
    setDurationSelected(false);
    setSurgeonSelected(false);
    setAssistantSelected(false);
    setAnesthetistSelected(false);
    setOperationTimeSelected(false);
    setProgressValue(0);
  };
  const onShowForm = () => {
    if (disease === "") return;
    setShowForm(true);
    if (disease === "periodontit" || disease === "periostit") {
      setShowPerioLines(true);
    }
    if (disease === "skinWound") {
      setShowSkinWoundLines(true);
      setSuturingLine(true);
    }
    if (disease === "tongueBridle" || disease === "lipBridle") {
      setSuturingLine(true);
      setUrgentDisease(false);
    }
    if (
      disease === "tongueBridle" ||
      disease === "lipBridle" ||
      disease === "caries" ||
      disease === "cyst" ||
      disease === "neoplasm" ||
      disease === "overComplete" ||
      disease === "retention"
    ) {
      setComplaintsDuration(false);
    }
    if (disease === "caries") {
      setShowCariesLines(true);
      setUrgentDisease(false);
    }
    if (disease === "cyst") {
      setShowCystLines(true);
      setUrgentDisease(false);
    }
    if (disease === "neoplasm") {
      setShowNeoplasmLines(true);
      setUrgentDisease(false);
    }
    if (disease === "abscess") {
      setShowAbscessLines(true);
    }
    if (disease === "dislocationTooth") {
      setShowDlLines(true);
    }
    if (disease === "overComplete") {
      setShowOverCompleteLines(true);
    }
    if (disease === "retention") {
      setShowRetentionLines(true);
      setUrgentDisease(false);
    }
    if (disease === "fractureLowerJaw") {
      setShowFractureLowerJawLines(true);
    }
    if (disease === "overComplete") {
      setShowOverCompleteLines(true);
      setUrgentDisease(false);
    }
    setShowAddPatients(false);
  };
  const initDate = new Date();
  const date = `${initDate.getDate()}.${
    initDate.getMonth() + 1
  }.${initDate.getFullYear()}`;
  const startDayList = numArrayCreator(1, 31);
  const [startDay, setStartDay] = useState(Number(initDate.getDate()));
  const onStartDayChange = (e) => {
    setStartDay(e.target.value);
  };
  const startMonthList = numArrayCreator(1, 12);
  const [startMonth, setStartMonth] = useState(1 + Number(initDate.getMonth()));
  const onStartMonthChange = (e) => {
    setStartMonth(e.target.value);
  };
  const startYearList = numArrayCreator(2020, 2040);
  const [startYear, setStartYear] = useState(Number(initDate.getFullYear()));
  const onStartYearChange = (e) => {
    setStartYear(e.target.value);
  };
  const [disease, setDisease] = useState(diseaseList[0].value);
  const onDiseaseChange = (event) => setDisease(event.target.value);
  const [name, setName] = useState("");
  const onNameChange = (event) => {
    setName(event.target.value);
    setNameSelected(true);
    setProgressValue(
      progressChecker(
        doctorSelected,
        cardNumberSelected,
        nameSelected,
        weightSelected,
        durationSelected,
        surgeonSelected,
        assistantSelected,
        anesthetistSelected,
        operationTimeSelected
      )
    );
  };
  const [cardNumber, setCardNumber] = useState("");
  const onCardNumberChange = (event) => {
    setCardNumber(event.target.value);
    setCardNumberSelected(true);
    setProgressValue(
      progressChecker(
        doctorSelected,
        cardNumberSelected,
        nameSelected,
        weightSelected,
        durationSelected,
        surgeonSelected,
        assistantSelected,
        anesthetistSelected,
        operationTimeSelected
      )
    );
  };
  const [doctor, setDoctor] = useState(doctors[0].value);
  const onDoctorChange = (event) => {
    setDoctor(event.target.value);
    setDoctorSelected(true);
    setProgressValue(
      progressChecker(
        doctorSelected,
        cardNumberSelected,
        nameSelected,
        weightSelected,
        durationSelected,
        surgeonSelected,
        assistantSelected,
        anesthetistSelected,
        operationTimeSelected
      )
    );
  };
  const [toothCasual, setToothCasual] = useState("");
  const onToothCasualChange = (event) => setToothCasual(event.target.value);
  const start1List = numArrayCreator(1, 6);
  const [start1, setStart1] = useState(start1List[0]);
  const onStart1Change = (event) => setStart1(event.target.value);
  const [start2, setStart2] = useState(start2List[0]);
  const onStart2Change = (event) => setStart2(event.target.value);
  const pregnancyList = numArrayCreator(1, 8);
  const [pregnancy, setPregnancy] = useState(pregnancyList[0]);
  const onPregnancyChange = (event) => setPregnancy(event.target.value);
  const childbirthList = numArrayCreator(1, 8);
  const [childbirth, setChildbirth] = useState(childbirthList[0]);
  const onChildbirthChange = (event) => setChildbirth(event.target.value);
  const [birthWeight, setBirthWeight] = useState("3600");
  const onBirthWeightChange = (event) => setBirthWeight(event.target.value);
  const [condition, setCondition] = useState(conditionList[1]);
  const onConditionChange = (event) => setCondition(event.target.value);
  const [weight, setWeight] = useState("");
  const onWeightChange = (event) => {
    setWeight(event.target.value);
    setWeightSelected(true);
    setProgressValue(
      progressChecker(
        doctorSelected,
        cardNumberSelected,
        nameSelected,
        weightSelected,
        durationSelected,
        surgeonSelected,
        assistantSelected,
        anesthetistSelected,
        operationTimeSelected
      )
    );
  };
  const ageList = numArrayCreator(0, 18);
  const [age, setAge] = useState(ageList[1]);
  const onAgeChange = (event) => setAge(event.target.value);
  const [crownDestruction, setCrownDestruction] = useState(
    crownDestructionList[0].value
  );
  const onCrownDestructionChange = (event) => {
    setCrownDestruction(event.target.value);
  };
  const [inflammationArea, setInflammationArea] = useState("");
  const onInflammationAreaChange = (event) =>
    setInflammationArea(event.target.value);
  const [drugName1, setDrugName1] = useState(drugName1List[0].value);
  const onDrugName1Change = (event) => setDrugName1(event.target.value);
  const [drugName2, setDrugName2] = useState(drugName2List[0].value);
  const onDrugName2Change = (event) => setDrugName2(event.target.value);
  const [drugName3, setDrugName3] = useState(drugName3List[0].value);
  const onDrugName3Change = (event) => setDrugName3(event.target.value);
  const [drugName4, setDrugName4] = useState(drugName4List[0].value);
  const onDrugName4Change = (event) => setDrugName4(event.target.value);
  const [drugName5, setDrugName5] = useState(drugName5List[0].value);
  const onDrugName5Change = (event) => setDrugName5(event.target.value);
  const [appointment, setAppointment] = useState("");
  const onAppointmentChange = (event) => setAppointment(event.target.value);
  const [appointment2, setAppointment2] = useState("");
  const onAppointment2Change = (event) => setAppointment2(event.target.value);
  const [appointment3, setAppointment3] = useState("");
  const onAppointment3Change = (event) => setAppointment3(event.target.value);
  const [protocolNumber, setProtocolNumber] = useState("");
  const onProtocolNumberChange = (event) =>
    setProtocolNumber(event.target.value);
  const [operationDate, setOperationDate] = useState(date);
  const onOperationDateChange = (event) => setOperationDate(event.target.value);
  const [operationTime, setOperationTime] = useState("");
  const onOperationTimeChange = (event) => {
    setOperationTime(event.target.value);
    setOperationTimeSelected(true);
    setProgressValue(
      progressChecker(
        doctorSelected,
        cardNumberSelected,
        nameSelected,
        weightSelected,
        durationSelected,
        surgeonSelected,
        assistantSelected,
        anesthetistSelected,
        operationTimeSelected
      )
    );
  };
  const [pliers, setPliers] = useState(pliersList[0].value);
  const onPliersChange = (event) => setPliers(event.target.value);
  const [elevator, setElevator] = useState(elevatorList[0].value);
  const onElevatorChange = (event) => setElevator(event.target.value);
  const [duration, setDuration] = useState("");
  const onDurationChange = (event) => {
    setDuration(event.target.value);
    setDurationSelected(true);
    setProgressValue(
      progressChecker(
        doctorSelected,
        cardNumberSelected,
        nameSelected,
        weightSelected,
        durationSelected,
        surgeonSelected,
        assistantSelected,
        anesthetistSelected,
        operationTimeSelected
      )
    );
  };
  const [surgeon, setSurgeon] = useState(surgeons[0].value);
  const onSurgeonChange = (event) => {
    setSurgeon(event.target.value);
    setSurgeonSelected(true);
    setProgressValue(
      progressChecker(
        doctorSelected,
        cardNumberSelected,
        nameSelected,
        weightSelected,
        durationSelected,
        surgeonSelected,
        assistantSelected,
        anesthetistSelected,
        operationTimeSelected
      )
    );
  };
  const [assistant, setAssistant] = useState(assistants[0].value);
  const onAssistantChange = (event) => {
    setAssistant(event.target.value);
    setAssistantSelected(true);
    setProgressValue(
      progressChecker(
        doctorSelected,
        cardNumberSelected,
        nameSelected,
        weightSelected,
        durationSelected,
        surgeonSelected,
        assistantSelected,
        anesthetistSelected,
        operationTimeSelected
      )
    );
  };
  const [anesthetist, setAnesthetist] = useState(anesthetistList[0].value);
  const onAnesthetistChange = (event) => {
    setAnesthetist(event.target.value);
    setAnesthetistSelected(true);
    setProgressValue(
      progressChecker(
        doctorSelected,
        cardNumberSelected,
        nameSelected,
        weightSelected,
        durationSelected,
        surgeonSelected,
        assistantSelected,
        anesthetistSelected,
        operationTimeSelected
      )
    );
  };
  const [woundArea, setWoundArea] = useState(areaList[0].value);
  const onWoundAreaChange = (event) => setWoundArea(event.target.value);
  const [woundSide, setWoundSide] = useState(sideList[0].value);
  const onWoundSideChange = (event) => setWoundSide(event.target.value);
  const [injuryDate, setInjuryDate] = useState(date);
  const onInjuryDateChange = (event) => setInjuryDate(event.target.value);
  const [injuryTime, setInjuryTime] = useState("");
  const onInjuryTimeChange = (event) => setInjuryTime(event.target.value);
  const [injuryReason, setInjuryReason] = useState(injuryReasonList[0].value);
  const onInjuryReasonChange = (event) => setInjuryReason(event.target.value);
  const [woundSurface, setWoundSurface] = useState(woundSurfaceList[0].value);
  const onWoundSurfaceChange = (event) => setWoundSurface(event.target.value);
  const [woundType, setWoundType] = useState(woundTypeList[0].value);
  const onWoundTypeChange = (event) => setWoundType(event.target.value);
  const [woundLength, setWoundLength] = useState("");
  const onWoundLengthChange = (event) => setWoundLength(event.target.value);
  const [woundWidth, setWoundWidth] = useState("");
  const onWoundWidthChange = (event) => setWoundWidth(event.target.value);
  const [woundDepth, setWoundDepth] = useState("");
  const onWoundDepthChange = (event) => setWoundDepth(event.target.value);
  const [woundForm, setWoundForm] = useState(woundFormList[0].value);
  const onWoundFormChange = (event) => setWoundForm(event.target.value);
  const [woundLedges, setWoundLedges] = useState(woundLedgesList[0].value);
  const onWoundLedgesChange = (event) => setWoundLedges(event.target.value);
  const [woundBleeding, setWoundBleeding] = useState(
    woundBleedingList[0].value
  );
  const onWoundBleedingChange = (event) => setWoundBleeding(event.target.value);
  const [woundAliens, setWoundAliens] = useState(woundAliensList[0].value);
  const onWoundAliensChange = (event) => setWoundAliens(event.target.value);
  const [sutureType, setSutureType] = useState(sutureTypeList[0].value);
  const onSutureTypeChange = (event) => setSutureType(event.target.value);
  const [sutureMaterial, setSutureMaterial] = useState(
    sutureMaterialList[0].value
  );
  const onSutureMaterialChange = (event) =>
    setSutureMaterial(event.target.value);
  const [sutureSize, setSutureSize] = useState(sutureSizeList[0].value);
  const onSutureSizeChange = (event) => setSutureSize(event.target.value);
  const [perioTeeth, setPerioTeeth] = useState("");
  const onPerioTeethChange = (event) => setPerioTeeth(event.target.value);

  const [retention1, setRetention1] = useState("");
  const onRetention1Change = (event) => setRetention1(event.target.value);

  const [retention2, setRetention2] = useState("");
  const onRetention2Change = (event) => setRetention2(event.target.value);
  const [retention3, setRetention3] = useState("");
  const onRetention3Change = (event) => setRetention3(event.target.value);
  const [retention4, setRetention4] = useState("");
  const onRetention4Change = (event) => setRetention4(event.target.value);

  const [anestesiaType, setAnestesiaType] = useState("Загальне");
  const onAnestesiaTypeChoise = (event) => {
    setAnestesiaType(event.target.value);
  };

  const [tooth1, setTooth1] = useState(toothList[0]);
  const onTooth1Change = (e) => setTooth1(e.target.value);
  const [tooth2, setTooth2] = useState(toothList[0]);
  const onTooth2Change = (e) => setTooth2(e.target.value);
  const [tooth3, setTooth3] = useState(toothList[0]);
  const onTooth3Change = (e) => setTooth3(e.target.value);
  const [morbi1, setMorbi1] = useState(morbiList[0].value);
  const onMorbi1Change = (e) => setMorbi1(e.target.value);
  const [morbi2, setMorbi2] = useState(morbiList[0].value);
  const onMorbi2Change = (e) => setMorbi2(e.target.value);
  const [morbi3, setMorbi3] = useState(morbiList[0].value);
  const onMorbi3Change = (e) => setMorbi3(e.target.value);
  const [tooth4, setTooth4] = useState(toothList[0]);
  const onTooth4Change = (e) => setTooth4(e.target.value);
  const [tooth5, setTooth5] = useState(toothList[0]);
  const onTooth5Change = (e) => setTooth5(e.target.value);
  const [tooth6, setTooth6] = useState(toothList[0]);
  const onTooth6Change = (e) => setTooth6(e.target.value);
  const [morbi4, setMorbi4] = useState(morbiList[0].value);
  const onMorbi4Change = (e) => setMorbi4(e.target.value);
  const [morbi5, setMorbi5] = useState(morbiList[0].value);
  const onMorbi5Change = (e) => setMorbi5(e.target.value);
  const [morbi6, setMorbi6] = useState(morbiList[0].value);
  const onMorbi6Change = (e) => setMorbi6(e.target.value);
  const [tooth7, setTooth7] = useState(toothList[0]);
  const onTooth7Change = (e) => setTooth7(e.target.value);
  const [tooth8, setTooth8] = useState(toothList[0]);
  const onTooth8Change = (e) => setTooth8(e.target.value);
  const [tooth9, setTooth9] = useState(toothList[0]);
  const onTooth9Change = (e) => setTooth9(e.target.value);
  const [morbi7, setMorbi7] = useState(morbiList[0].value);
  const onMorbi7Change = (e) => setMorbi7(e.target.value);
  const [morbi8, setMorbi8] = useState(morbiList[0].value);
  const onMorbi8Change = (e) => setMorbi8(e.target.value);
  const [morbi9, setMorbi9] = useState(morbiList[0].value);
  const onMorbi9Change = (e) => setMorbi9(e.target.value);
  const [tooth10, setTooth10] = useState(toothList[0]);
  const onTooth10Change = (e) => setTooth10(e.target.value);
  const [morbi10, setMorbi10] = useState(morbiList[0].value);
  const onMorbi10Change = (e) => setMorbi10(e.target.value);
  const [changedList, setChangedList] = useState([]);
  const onBtnChangesClick = () => {
    setChangedList(
      changedListMounter(
        tooth1,
        tooth2,
        tooth3,
        tooth4,
        tooth5,
        tooth6,
        tooth7,
        tooth8,
        tooth9,
        tooth10,
        morbi1,
        morbi2,
        morbi3,
        morbi4,
        morbi5,
        morbi6,
        morbi7,
        morbi8,
        morbi9,
        morbi10
      )
    );
    setShowCariesLines(false);
  };

  //progress bar
  const [progressValue, setProgressValue] = useState(0);
  const progressChecker = (
    doctor,
    cardNumber,
    name,
    weight,
    duration,
    surgeon,
    assistant,
    anesthetist,
    operationTime
  ) => {
    let array = [
      doctor,
      cardNumber,
      name,
      weight,
      duration,
      surgeon,
      assistant,
      anesthetist,
      operationTime
    ];
    let result = 0;
    result = array.reduce(function (sum, current) {
      return current ? (sum += 10) : sum;
    }, 0);
    return result;
  };
  const [abscessType, setAbscessType] = useState(abscessTypeList[0].value);
  const onAbscessTypeChange = (e) => setAbscessType(e.target.value);
  const [abscessArea, setAbscessArea] = useState(abscessAreaList[0].value);
  const onAbscessAreaChange = (e) => setAbscessArea(e.target.value);
  const [abscessSide, setAbscessSide] = useState(sideList[0].value);
  const onAbscessSideChange = (e) => setAbscessSide(e.target.value);
  const [abscessReason, setAbscessReason] = useState(
    abscessReasonList[0].value
  );
  const onAbscessReasonChange = (e) => setAbscessReason(e.target.value);
  const [abscessTooth, setAbscessTooth] = useState("");
  const onAbscessToothChange = (e) => setAbscessTooth(e.target.value);
  const [doctorSelected, setDoctorSelected] = useState(false);
  const [cardNumberSelected, setCardNumberSelected] = useState(false);
  const [nameSelected, setNameSelected] = useState(false);
  const [weightSelected, setWeightSelected] = useState(false);
  const [durationSelected, setDurationSelected] = useState(false);
  const [surgeonSelected, setSurgeonSelected] = useState(false);
  const [assistantSelected, setAssistantSelected] = useState(false);
  const [anesthetistSelected, setAnesthetistSelected] = useState(false);
  const [operationTimeSelected, setOperationTimeSelected] = useState(false);
  const [cystType, setCystType] = useState(cystTypeList[0].value);
  const onCystTypeChange = (e) => {
    setCystType(e.target.value);
  };
  const [cystTooth, setCystTooth] = useState(toothList[0]);
  const onCystToothChange = (e) => {
    setCystTooth(e.target.value);
  };
  const cystDiameterList = numArrayCreator(5, 40).map((d) =>
    (d / 10).toFixed(1)
  );
  const [cystDiameter, setCystDiameter] = useState(cystDiameterList[0]);
  const onCystDiameterChange = (e) => {
    setCystDiameter(e.target.value);
  };

  const [rootSealed, setRootSealed] = useState(rootSealedList[0].value);
  const onRootSealedChange = (e) => {
    setRootSealed(e.target.value);
  };
  const [isTemporaryToothAbove, setIsTemporaryToothAbove] = useState(false);
  const onIsTemporaryToothAboveChange = () => {
    setIsTemporaryToothAbove(!isTemporaryToothAbove);
  };
  const [neoplasmType, setNeoplasmType] = useState(neoplasmTypeList[0].value);
  const onNeoplasmTypeChange = (e) => {
    setNeoplasmType(e.target.value);
  };

  const [growthRate, setGrowthRate] = useState(growthRateList[0].value);
  const onGrowthRateChange = (e) => {
    setGrowthRate(e.target.value);
  };
  const neoplasmDiameterList = numArrayCreator(1, 40).map((d) =>
    (d / 10).toFixed(1)
  );
  const [neoplasmDiameter, setNeoplasmDiameter] = useState(
    neoplasmDiameterList[0]
  );
  const onNeoplasmDiameterChange = (e) => {
    setNeoplasmDiameter(e.target.value);
  };
  const [neoplasmForm, setNeoplasmForm] = useState(neoplasmFormList[0].value);
  const onNeoplasmFormChange = (e) => {
    setNeoplasmForm(e.target.value);
  };
  const [neoplasmBorders, setNeoplasmBorders] = useState(
    neoplasmBorderList[0].value
  );
  const onNeoplasmBordersChange = (e) => {
    setNeoplasmBorders(e.target.value);
  };
  const [neoplasmMovability, setNeoplasmMovability] = useState(
    neoplasmMovabilityList[0].value
  );
  const onNeoplasmMovabilityChange = (e) => {
    setNeoplasmMovability(e.target.value);
  };
  const [neoplasmPoignancy, setNeoplasmPoignancy] = useState(
    neoplasmPoignancyList[0].value
  );
  const onNeoplasmPoignancyChange = (e) => {
    setNeoplasmPoignancy(e.target.value);
  };
  const [neoplasmConsistance, setNeoplasmConsistance] = useState(
    neoplasmConsistanceList[0].value
  );
  const onNeoplasmConsistanceChange = (e) => {
    setNeoplasmConsistance(e.target.value);
  };
  const [neoplasmArea, setNeoplasmArea] = useState(areaList[0].value);
  const onNeoplasmAreaChange = (e) => {
    setNeoplasmArea(e.target.value);
  };
  const [neoplasmSide, setNeoplasmSide] = useState(sideList[0].value);
  const onNeoplasmSideChange = (e) => {
    setNeoplasmSide(e.target.value);
  };
  const [neoplasmSurface, setNeoplasmSurface] = useState(
    neoplasmSurfaceList[0].value
  );
  const onNeoplasmSurfaceChange = (e) => {
    setNeoplasmSurface(e.target.value);
  };
  const [neoplasmColor, setNeoplasmColor] = useState(
    neoplasmColorList[0].value
  );
  const onNeoplasmColorChange = (e) => {
    setNeoplasmColor(e.target.value);
  };
  const [neoplasmAboveSurface, setNeoplasmAboveSurface] = useState(false);
  const onNeoplasmAboveSurfaceChange = (e) => {
    setNeoplasmAboveSurface(!neoplasmAboveSurface);
  };
  const [neoplasmSurfaceAlter, setNeoplasmSurfaceAlter] = useState(false);
  const onNeoplasmSurfaceAlterChange = (e) => {
    setNeoplasmSurfaceAlter(e.target.value);
  };
  const [bilateralismLower, setBilateralismLower] = useState(
    bilateralismList[0].value
  );
  const onBilateralismLowerChange = (e) => {
    setBilateralismLower(e.target.value);
  };
  const [fractureLowerArea1, setFractureLowerArea1] = useState(
    fractureLowerAreaList[0].value
  );
  const onFractureLowerArea1Change = (e) => {
    setFractureLowerArea1(e.target.value);
  };
  const [fractureLowerArea2, setFractureLowerArea2] = useState(
    fractureLowerAreaList[0].value
  );
  const onFractureLowerArea2Change = (e) => {
    setFractureLowerArea2(e.target.value);
  };
  const [fractureLowerSide1, setFractureLowerSide1] = useState(
    sideList[0].value
  );
  const onFractureLowerSide1Change = (e) => {
    setFractureLowerSide1(e.target.value);
  };
  const [fractureLowerSide2, setFractureLowerSide2] = useState(
    sideList[0].value
  );
  const onFractureLowerSide2Change = (e) => {
    setFractureLowerSide2(e.target.value);
  };
  const [fractureLowerBias2, setFractureLowerBias2] = useState(
    fractureBiasList[0]
  );
  const onFractureLowerBias2Change = (e) => {
    setFractureLowerBias2(e.target.value);
  };
  const [fractureLowerBias1, setFractureLowerBias1] = useState(
    fractureBiasList[0]
  );
  const onFractureLowerBias1Change = (e) => {
    setFractureLowerBias1(e.target.value);
  };
  const [fractureLowerDirection1, setFractureLowerDirection1] = useState(
    fractureDirectionList[0].value
  );
  const onFractureLowerDirection1Change = (e) => {
    setFractureLowerDirection1(e.target.value);
  };
  const [fractureLowerDirection2, setFractureLowerDirection2] = useState(
    fractureDirectionList[0].value
  );
  const onFractureLowerDirection2Change = (e) => {
    setFractureLowerDirection2(e.target.value);
  };
  const [fractureLowerTooth1a, setFractureLowerTooth1a] = useState(
    fractureLowerTeethList[0].value
  );
  const onFractureLowerTooth1aChange = (e) => {
    setFractureLowerTooth1a(e.target.value);
  };
  const [fractureLowerTooth2a, setFractureLowerTooth2a] = useState(
    fractureLowerTeethList[0].value
  );
  const onFractureLowerTooth2aChange = (e) => {
    setFractureLowerTooth2a(e.target.value);
  };
  const [fractureLowerTooth1b, setFractureLowerTooth1b] = useState(
    fractureLowerTeethList[0].value
  );
  const onFractureLowerTooth1bChange = (e) => {
    setFractureLowerTooth1b(e.target.value);
  };
  const [fractureLowerTooth2b, setFractureLowerTooth2b] = useState(
    fractureLowerTeethList[0].value
  );
  const onFractureLowerTooth2bChange = (e) => {
    setFractureLowerTooth2b(e.target.value);
  };
  const [fractureTooth1aText, setFractureTooth1aText] = useState("");
  const [fractureTooth1bText, setFractureTooth1bText] = useState("");
  const [fractureTooth2aText, setFractureTooth2aText] = useState("");
  const [fractureTooth2bText, setFractureTooth2bText] = useState("");
  const [fractureLowerTeethInLine1, setFractureLowerTeethInLine1] = useState(
    teethInFractureLineList[0].value
  );
  const onFractureLowerTeethInLine1Change = (e) => {
    setFractureLowerTeethInLine1(e.target.value);
  };
  const [fractureLowerTeethInLine2, setFractureLowerTeethInLine2] = useState(
    teethInFractureLineList[0].value
  );
  const onFractureLowerTeethInLine2Change = (e) => {
    setFractureLowerTeethInLine2(e.target.value);
  };
  const [fractureLowerStep1, setFractureLowerStep1] = useState(
    fractureStepList[0].value
  );
  const onFractureLowerStep1Change = (e) => {
    setFractureLowerStep1(e.target.value);
  };
  const [fractureLowerStep2, setFractureLowerStep2] = useState(
    fractureStepList[0].value
  );
  const onFractureLowerStep2Change = (e) => {
    setFractureLowerStep2(e.target.value);
  };
  const [lowerJawSubmucous1, setLowerJawSubmucous1] = useState(false);
  const onLowerJawSubmucous1Change = () => {
    setLowerJawSubmucous1(!lowerJawSubmucous1);
  };
  const [lowerJawSubmucous2, setLowerJawSubmucous2] = useState(false);
  const onLowerJawSubmucous2Change = () => {
    setLowerJawSubmucous2(!lowerJawSubmucous2);
  };
  const [xRay, setXRay] = useState(xRayList[0]);
  const onXRayChange = (e) => {
    setXRay(e.target.value);
  };
  const [continuity, setContinuity] = useState(continuityList[0].value);
  const onContinuityChange = (e) => {
    setContinuity(e.target.value);
  };
  const [fractureOperationType, setFractureOperationType] = useState(
    fractureOperationTypeList[0].value
  );
  const onFractureOperationTypeChange = (e) => {
    setFractureOperationType(e.target.value);
  };
  const [dlType, setDlType] = useState(dlTypeList[0].value);
  const onDlTypeChange = (e) => {
    setDlType(e.target.value);
  };
  const [dlAlveolusDestroyed, setDlAlveolusDestroyed] = useState(false);
  const onDlAlveolusDestroyedChange = () => {
    setDlAlveolusDestroyed(!dlAlveolusDestroyed);
  };
  const [dlOperationType, setDlOperationType] = useState(
    dlOperationTypeList[0].value
  );
  const onDlOperationTypeChange = (e) => {
    setDlOperationType(e.target.value);
  };
  const [dlDirection, setDlDirection] = useState(dlDirectionList[0].value);
  const onDlDirectionChange = (e) => {
    setDlDirection(e.target.value);
  };
  const dlDistanceList = numArrayCreator(0, 10);
  const [dlDistance, setDlDistance] = useState(dlDistanceList[0]);
  const onDlDistanceChange = (e) => {
    setDlDistance(e.target.value);
  };
  const [dlDeployed, setDlDeployed] = useState(false);
  const onDlDeployedChange = () => {
    setDlDeployed(!dlDeployed);
  };
  const [dlTooth1, setDlTooth1] = useState(dlToothList[0]);
  const onDlTooth1Change = (e) => {
    setDlTooth1(e.target.value);
  };
  const [dlTooth2, setDlTooth2] = useState(dlToothList[0]);
  const onDlTooth2Change = (e) => {
    setDlTooth2(e.target.value);
  };
  const [dlTooth3, setDlTooth3] = useState(dlToothList[0]);
  const onDlTooth3Change = (e) => {
    setDlTooth3(e.target.value);
  };
  const [dlType2, setDlType2] = useState(dlTypeList[0].value);
  const onDlType2Change = (e) => {
    setDlType2(e.target.value);
  };
  const [dlAlveolusDestroyed2, setDlAlveolusDestroyed2] = useState(false);
  const onDlAlveolusDestroyed2Change = () => {
    setDlAlveolusDestroyed2(!dlAlveolusDestroyed);
  };
  const [dlOperationType2, setDlOperationType2] = useState(
    dlOperationTypeList[0].value
  );
  const onDlOperationType2Change = (e) => {
    setDlOperationType2(e.target.value);
  };
  const [dlDirection2, setDlDirection2] = useState(dlDirectionList[0].value);
  const onDlDirection2Change = (e) => {
    setDlDirection2(e.target.value);
  };
  const [dlDistance2, setDlDistance2] = useState(dlDistanceList[0]);
  const onDlDistance2Change = (e) => {
    setDlDistance2(e.target.value);
  };
  const [dlDeployed2, setDlDeployed2] = useState(false);
  const onDlDeployed2Change = () => {
    setDlDeployed2(!dlDeployed);
  };
  const [dlTooth4, setDlTooth4] = useState(dlToothList[0]);
  const onDlTooth4Change = (e) => {
    setDlTooth4(e.target.value);
  };
  const [dlTooth5, setDlTooth5] = useState(dlToothList[0]);
  const onDlTooth5Change = (e) => {
    setDlTooth5(e.target.value);
  };
  const [dlTooth6, setDlTooth6] = useState(dlToothList[0]);
  const onDlTooth6Change = (e) => {
    setDlTooth6(e.target.value);
  };
  const [overCompleteTooth1, setOverCompleteTooth1] = useState(dlToothList[0]);
  const onOverCompleteTooth1Change = (e) => {
    setOverCompleteTooth1(e.target.value);
  };
  const [overCompleteTooth2, setOverCompleteTooth2] = useState(dlToothList[0]);
  const onOverCompleteTooth2Change = (e) => {
    setOverCompleteTooth2(e.target.value);
  };
  const [overCompleteTooth3, setOverCompleteTooth3] = useState(dlToothList[0]);
  const onOverCompleteTooth3Change = (e) => {
    setOverCompleteTooth3(e.target.value);
  };
  const [overCompleteTooth4, setOverCompleteTooth4] = useState(dlToothList[0]);
  const onOverCompleteTooth4Change = (e) => {
    setOverCompleteTooth4(e.target.value);
  };
  const [overCompleteLocation, setOverCompleteLocation] = useState(
    overCompleteLocationList[0].value
  );
  const onOverCompleteLocationChange = (e) => {
    setOverCompleteLocation(e.target.value);
  };
  const [overCompleteForm, setOverCompleteForm] = useState(
    overCompleteFormList[0].value
  );
  const onOverCompleteFormChange = (e) => {
    setOverCompleteForm(e.target.value);
  };
  const [overCompleteLocation2, setOverCompleteLocation2] = useState(
    overCompleteLocationList[0].value
  );
  const onOverCompleteLocation2Change = (e) => {
    setOverCompleteLocation2(e.target.value);
  };
  const [overCompleteForm2, setOverCompleteForm2] = useState(
    overCompleteFormList[0].value
  );
  const onOverCompleteForm2Change = (e) => {
    setOverCompleteForm2(e.target.value);
  };
  const [overCompleteXRay, setOverCompleteXRay] = useState(xRayList2[0].value);
  const onOverCompleteXRayChange = (e) => {
    setOverCompleteXRay(e.target.value);
  };
  const [overCompleteAmount, setOverCompleteAmount] = useState(
    Number(overCompleteAmountList[0].value)
  );
  const onOverCompleteAmountChange = (e) => {
    setOverCompleteAmount(Number(e.target.value));
  };
  // console.log(dlToothList);
  //onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    if (doctor === "") {
      alert(`Не вказано особистого лікаря`);
      return;
    }
    if (cardNumber === "") {
      alert(`Не введено номер медичної карти`);
      return;
    }
    if (name === "") {
      alert(`Не введено ім'я пацієнта`);
      return;
    }
    if (weight === "") {
      alert(`Введіть вагу пацієнта`);
      return;
    }
    if (
      (disease === "periodontit" || disease === "periostit") &&
      toothCasual === ""
    ) {
      alert(`Вкажіть причинний зуб`);
      return;
    }
    if (
      (disease === "periodontit" || disease === "periostit") &&
      inflammationArea === ""
    ) {
      alert(`Вкажіть ділянку запалення`);
      return;
    }
    if (disease === "skinWound" && woundArea === "") {
      alert(`Вкажіть ділянку рани`);
      return;
    }
    if (disease === "skinWound" && woundType === "") {
      alert(`Вкажіть вид рани`);
      return;
    }
    if (
      disease !== "caries" &&
      disease !== "tongueBridle" &&
      disease !== "lipBridle" &&
      disease !== "cyst" &&
      disease !== "retention" &&
      disease !== "neoplasm" &&
      disease !== "overComplete" &&
      duration === ""
    ) {
      alert(`Не вказано тривалість операції`);
      return;
    }
    if (
      disease !== "caries" &&
      disease !== "tongueBridle" &&
      disease !== "lipBridle" &&
      disease !== "cyst" &&
      disease !== "retention" &&
      disease !== "neoplasm" &&
      disease !== "overComplete" &&
      surgeon === ""
    ) {
      alert(`Не вказано ім'я хірурга`);
      return;
    }
    if (
      disease !== "caries" &&
      disease !== "tongueBridle" &&
      disease !== "lipBridle" &&
      disease !== "cyst" &&
      disease !== "retention" &&
      disease !== "neoplasm" &&
      disease !== "overComplete" &&
      assistant === ""
    ) {
      alert(`Не вказано ім'я асистента`);
      return;
    }
    if (
      disease !== "caries" &&
      disease !== "tongueBridle" &&
      disease !== "lipBridle" &&
      disease !== "cyst" &&
      disease !== "retention" &&
      disease !== "neoplasm" &&
      disease !== "overComplete" &&
      anesthetist === ""
    ) {
      alert(`Не вказано ім'я анестезіолога`);
      return;
    }
    if (
      disease !== "caries" &&
      disease !== "tongueBridle" &&
      disease !== "lipBridle" &&
      disease !== "cyst" &&
      disease !== "retention" &&
      disease !== "neoplasm" &&
      disease !== "overComplete" &&
      operationTime === ""
    ) {
      alert(`Не вказано час операції`);
      return;
    }

    onAdd(
      disease,
      startDay,
      startMonth,
      startYear,
      cardNumber,
      name,
      doctor,
      toothCasual,
      start1,
      start2,
      pregnancy,
      childbirth,
      birthWeight,
      condition,
      weight,
      age,
      crownDestruction,
      inflammationArea,
      drugName1,
      drugName2,
      drugName3,
      drugName4,
      drugName5,
      appointment,
      appointment2,
      appointment3,
      protocolNumber,
      operationDate,
      operationTime,
      pliers,
      elevator,
      duration,
      surgeon,
      assistant,
      anesthetist,
      woundArea,
      woundSide,
      injuryDate,
      injuryTime,
      injuryReason,
      woundType,
      woundLength,
      woundWidth,
      woundDepth,
      woundForm,
      woundLedges,
      woundBleeding,
      woundAliens,
      sutureType,
      sutureMaterial,
      sutureSize,
      perioTeeth,
      changedList,
      anestesiaType,
      woundSurface,
      abscessType,
      abscessArea,
      abscessSide,
      abscessReason,
      abscessTooth,
      cystTooth,
      cystDiameter,
      isTemporaryToothAbove,
      cystType,
      rootSealed,
      retention1,
      retention2,
      retention3,
      retention4,
      neoplasmType,
      neoplasmArea,
      neoplasmSide,
      growthRate,
      neoplasmSurface,
      neoplasmMovability,
      neoplasmPoignancy,
      neoplasmConsistance,
      neoplasmDiameter,
      neoplasmColor,
      neoplasmBorders,
      neoplasmAboveSurface,
      neoplasmSurfaceAlter,
      neoplasmForm,
      bilateralismLower,
      fractureLowerArea1,
      fractureLowerSide1,
      fractureLowerBias1,
      fractureLowerDirection1,
      fractureLowerTooth1a,
      fractureLowerTooth1b,
      fractureLowerTeethInLine1,
      fractureLowerStep1,
      lowerJawSubmucous1,
      xRay,
      continuity,
      fractureOperationType,
      fractureLowerArea2,
      fractureLowerSide2,
      fractureLowerBias2,
      fractureLowerDirection2,
      fractureLowerTooth2a,
      fractureLowerTooth2b,
      fractureLowerTeethInLine2,
      fractureLowerStep2,
      lowerJawSubmucous2,
      dlType,
      dlAlveolusDestroyed,
      dlOperationType,
      dlDirection,
      dlDistance,
      dlDeployed,
      dlTooth1,
      dlTooth2,
      dlTooth3,
      dlAlveolusDestroyed2,
      dlOperationType2,
      dlDirection2,
      dlDistance2,
      dlDeployed2,
      dlTooth4,
      dlTooth5,
      dlTooth6,
      dlType2,
      overCompleteTooth1,
      overCompleteTooth2,
      overCompleteTooth3,
      overCompleteTooth4,
      overCompleteForm,
      overCompleteForm2,
      overCompleteLocation,
      overCompleteLocation2,
      overCompleteXRay,
      overCompleteAmount
    );
    setDisease(diseaseList[0].value);
    setStartDay(initDate.getDate());
    setStartMonth(initDate.getMonth());
    setStartYear(initDate.getFullYear());
    setName("");
    setCardNumber("");
    setDoctor(doctors[0].value);
    setToothCasual("");
    setStart1(start1List[0]);
    setStart2(start2List[0]);
    setPregnancy(pregnancyList[0]);
    setChildbirth(childbirthList[0]);
    setBirthWeight("3600");
    setCondition(conditionList[1]);
    setWeight("");
    setAge(ageList[1]);
    setCrownDestruction(crownDestructionList[0].value);
    setInflammationArea("");
    setDrugName1(drugName1List[0].value);
    setDrugName2(drugName2List[0].value);
    setDrugName3(drugName3List[0].value);
    setDrugName4(drugName4List[0].value);
    setDrugName5(drugName5List[0].value);
    setAppointment("");
    setProtocolNumber("");
    setOperationDate(date);
    setOperationTime("");
    setPliers(pliersList[0].value);
    setElevator(elevatorList[0].value);
    setDuration("");
    setSurgeon(surgeons[0].value);
    setAssistant(assistants[0].value);
    setAnesthetist(anesthetistList[0].value);
    setWoundArea(areaList[0].value);
    setWoundSide(sideList[0].value);
    setInjuryDate(date);
    setInjuryTime("");
    setInjuryReason(injuryReasonList[0].value);
    setWoundType(woundTypeList[0].value);
    setWoundLength("");
    setWoundWidth("");
    setWoundDepth("");
    setWoundForm(woundFormList[0].value);
    setWoundLedges(woundLedgesList[0].value);
    setWoundBleeding(woundBleedingList[0].value);
    setWoundAliens(woundAliensList[0].value);
    setSutureType(sutureTypeList[0].value);
    setSutureMaterial(sutureMaterialList[0].value);
    setSutureSize(sutureSizeList[0].value);
    setPerioTeeth("");
    setShowAddPatients(true);
    setShowForm(false);
    setChangedList([]);
    setShowPerioLines(false);
    setShowSkinWoundLines(false);
    setShowAbscessLines(false);
    setSuturingLine(false);
    setShowCariesLines(false);
    setUrgentDisease(true);
    setDoctorSelected(false);
    setCardNumberSelected(false);
    setNameSelected(false);
    setWeightSelected(false);
    setDurationSelected(false);
    setSurgeonSelected(false);
    setAssistantSelected(false);
    setAnesthetistSelected(false);
    setOperationTimeSelected(false);
    setProgressValue(0);
    setAnestesiaType("Загальне");
    setWoundSurface(woundSurfaceList[0].value);
    setAbscessType(abscessTypeList[0].value);
    setAbscessArea(abscessAreaList[0].value);
    setAbscessSide(sideList[0].value);
    setAbscessReason(abscessReasonList[0].value);
    setAbscessTooth("");
    setCystTooth(toothList[0]);
    setCystDiameter(cystDiameterList[0]);
    setIsTemporaryToothAbove(false);
    setCystType(cystTypeList[0].value);
    setRootSealed(rootSealedList[0].value);
    setNeoplasmType(neoplasmTypeList[0].value);
    setNeoplasmArea(areaList[0].value);
    setNeoplasmSide(sideList[0].value);
    setGrowthRate(growthRateList[0].value);
    setNeoplasmSurface(neoplasmSurfaceList[0].value);
    setNeoplasmMovability(neoplasmMovabilityList[0].value);
    setNeoplasmPoignancy(neoplasmPoignancyList[0].value);
    setNeoplasmConsistance(neoplasmConsistanceList[0].value);
    setNeoplasmDiameter(neoplasmDiameter[0]);
    setNeoplasmColor(neoplasmColorList[0].value);
    setNeoplasmBorders(neoplasmBorderList[0].value);
    setNeoplasmAboveSurface(false);
    setNeoplasmSurfaceAlter(false);
    // history.push(routes.MAIN);
  };
  useEffect(() => {
    setShowFractureLowerJawLine2(bilateralismLower ? true : false);
  }, [bilateralismLower]);
  useEffect(() => {
    setFractureTooth1aText(
      fractureLowerTeethInLine1 === "between"
        ? `між`
        : fractureLowerTeethInLine1 === "through"
        ? `через`
        : ``
    );
    setFractureTooth1bText(fractureLowerTeethInLine1 === "between" ? `та` : ``);
  }, [fractureLowerTeethInLine1]);
  useEffect(() => {
    setFractureTooth2aText(
      fractureLowerTeethInLine2 === "between"
        ? `між`
        : fractureLowerTeethInLine2 === "through"
        ? `через`
        : ``
    );
    setFractureTooth2bText(fractureLowerTeethInLine2 === "between" ? `та` : ``);
  }, [fractureLowerTeethInLine2]);
  return (
    <div className="form">
      {showAddPatients && (
        <div id="addPatient">
          <select value={disease} onChange={onDiseaseChange}>
            {diseaseList.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <button onClick={onShowForm}>Додати пацієнта</button>
        </div>
      )}
      <form onSubmit={onSubmit}>
        {showForm && (
          <div className="mainForm">
            <div className="flexBetween">
              <div className="label" id="firstLine">
                Дата госпіталізації
              </div>{" "}
              <select value={startDay} onChange={onStartDayChange}>
                {startDayList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <select value={startMonth} onChange={onStartMonthChange}>
                {startMonthList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <select value={startYear} onChange={onStartYearChange}>
                {startYearList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <select value={doctor} onChange={onDoctorChange}>
                {doctors.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flexBetween">
              {" "}
              <input
                className="shortInputs"
                value={cardNumber}
                onChange={onCardNumberChange}
                placeholder="№ карти..."
              />{" "}
              <input
                className="longInputs"
                value={name}
                onChange={onNameChange}
                placeholder="ПІБ пацієнта..."
              />
              <div className="label">Вік</div>
              <select value={age} onChange={onAgeChange}>
                {ageList.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <input
                className="shortInputs"
                value={weight}
                onChange={onWeightChange}
                placeholder="Вага..."
              />{" "}
            </div>
            {complaintsDuration && (
              <div className="flexBetween">
                {" "}
                <div className="label">Тривалість скарг</div>
                <select value={start1} onChange={onStart1Change}>
                  {start1List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select value={start2} onChange={onStart2Change}>
                  {start2List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="label">Загальний стан</div>
                <select value={condition} onChange={onConditionChange}>
                  {conditionList.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="flexBetween">
              {" "}
              <div className="label">Вагітність</div>
              <select value={pregnancy} onChange={onPregnancyChange}>
                {pregnancyList.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="label">Пологи</div>
              <select value={childbirth} onChange={onChildbirthChange}>
                {childbirthList.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <input
                value={birthWeight}
                onChange={onBirthWeightChange}
                placeholder="Вага при народженні..."
              />
            </div>
            {showPerioLines && (
              <div className="flexBetween">
                {" "}
                <input
                  value={toothCasual}
                  onChange={onToothCasualChange}
                  placeholder="Причинний зуб..."
                />{" "}
                <select
                  value={crownDestruction}
                  onChange={onCrownDestructionChange}
                >
                  {crownDestructionList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <input
                  value={inflammationArea}
                  onChange={onInflammationAreaChange}
                  placeholder="Ділянка запалення..."
                />
              </div>
            )}
            {(showSkinWoundLines ||
              showFractureLowerJawLines ||
              showDlLines) && (
              <div className="flexBetween">
                {" "}
                <div className="label">Дата травми:</div>
                <input
                  className="shortInputs"
                  value={injuryDate}
                  onChange={onInjuryDateChange}
                  placeholder="Дата травми..."
                />
                <input
                  className="shortInputs"
                  value={injuryTime}
                  onChange={onInjuryTimeChange}
                  placeholder="Час травми..."
                />{" "}
                <select value={injuryReason} onChange={onInjuryReasonChange}>
                  {injuryReasonList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <input
                  className="middleInputs"
                  value={injuryReason}
                  onChange={onInjuryReasonChange}
                  placeholder="Причина травми..."
                />
              </div>
            )}
            {showSkinWoundLines && (
              <div className="flexBetween">
                <select value={woundSurface} onChange={onWoundSurfaceChange}>
                  {woundSurfaceList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>{" "}
                <select value={woundArea} onChange={onWoundAreaChange}>
                  {areaList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={woundSide} onChange={onWoundSideChange}>
                  {sideList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={woundType} onChange={onWoundTypeChange}>
                  {woundTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <input
                  className="superShortInputs"
                  value={woundLength}
                  onChange={onWoundLengthChange}
                  placeholder="довжина..."
                />
                <input
                  className="superShortInputs"
                  value={woundWidth}
                  onChange={onWoundWidthChange}
                  placeholder="ширина..."
                />
                <input
                  className="superShortInputs"
                  value={woundDepth}
                  onChange={onWoundDepthChange}
                  placeholder="глибина..."
                />
              </div>
            )}

            {showSkinWoundLines && (
              <div className="flexBetween">
                {" "}
                <select value={woundForm} onChange={onWoundFormChange}>
                  {woundFormList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={woundLedges} onChange={onWoundLedgesChange}>
                  {woundLedgesList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={woundBleeding} onChange={onWoundBleedingChange}>
                  {woundBleedingList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={woundAliens} onChange={onWoundAliensChange}>
                  {woundAliensList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {showAbscessLines && (
              <div className="flexBetween">
                {" "}
                <select value={abscessType} onChange={onAbscessTypeChange}>
                  {abscessTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={abscessArea} onChange={onAbscessAreaChange}>
                  {abscessAreaList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={abscessSide} onChange={onAbscessSideChange}>
                  {sideList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={abscessReason} onChange={onAbscessReasonChange}>
                  {abscessReasonList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <input
                  className="shortInputs"
                  value={abscessTooth}
                  onChange={onAbscessToothChange}
                  placeholder="зуб..."
                />{" "}
              </div>
            )}
            {showCystLines && (
              <div className="flexBetween">
                <select value={cystType} onChange={onCystTypeChange}>
                  {cystTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <div className="label">Причинний зуб</div>
                <select value={cystTooth} onChange={onCystToothChange}>
                  {toothList.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="label">Діаметр</div>
                <select value={cystDiameter} onChange={onCystDiameterChange}>
                  {cystDiameterList.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="label2">+ тимч. зуб</div>
                <input
                  className="checkbox"
                  type="checkbox"
                  value={isTemporaryToothAbove}
                  onChange={onIsTemporaryToothAboveChange}
                  checked={isTemporaryToothAbove}
                />
                <select value={rootSealed} onChange={onRootSealedChange}>
                  {rootSealedList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* //fractureAr */}
            {showFractureLowerJawLines && (
              <div className="flexBetween">
                {" "}
                <select
                  value={bilateralismLower}
                  onChange={onBilateralismLowerChange}
                >
                  {bilateralismList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={continuity} onChange={onContinuityChange}>
                  {continuityList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={xRay} onChange={onXRayChange}>
                  {xRayList.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  value={fractureOperationType}
                  onChange={onFractureOperationTypeChange}
                >
                  {fractureOperationTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {showFractureLowerJawLines && (
              <>
                <div className="flexBetween">
                  <div className="label">1-й перелом</div>
                  <select
                    value={fractureLowerArea1}
                    onChange={onFractureLowerArea1Change}
                  >
                    {fractureLowerAreaList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerSide1}
                    onChange={onFractureLowerSide1Change}
                  >
                    {sideList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerBias1}
                    onChange={onFractureLowerBias1Change}
                  >
                    {fractureBiasList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerDirection1}
                    onChange={onFractureLowerDirection1Change}
                  >
                    {fractureDirectionList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  <select
                    value={fractureLowerTeethInLine1}
                    onChange={onFractureLowerTeethInLine1Change}
                  >
                    {teethInFractureLineList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">{fractureTooth1aText}</div>
                  <select
                    value={fractureLowerTooth1a}
                    onChange={onFractureLowerTooth1aChange}
                  >
                    {fractureLowerTeethList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="label">{fractureTooth1bText}</div>
                  <select
                    value={fractureLowerTooth1b}
                    onChange={onFractureLowerTooth1bChange}
                  >
                    {fractureLowerTeethList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerStep1}
                    onChange={onFractureLowerStep1Change}
                  >
                    {fractureStepList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">Розрив слизової</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={lowerJawSubmucous1}
                    onChange={onLowerJawSubmucous1Change}
                    checked={lowerJawSubmucous1}
                  />
                </div>
              </>
            )}

            {showFractureLowerJawLine2 && (
              <>
                <div
                  className="flexBetween"
                  style={{ backgroundColor: `aliceBlue` }}
                >
                  <div className="label">2-й перелом</div>
                  <select
                    value={fractureLowerArea2}
                    onChange={onFractureLowerArea2Change}
                  >
                    {fractureLowerAreaList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerSide2}
                    onChange={onFractureLowerSide2Change}
                  >
                    {sideList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerBias2}
                    onChange={onFractureLowerBias2Change}
                  >
                    {fractureBiasList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerDirection2}
                    onChange={onFractureLowerDirection2Change}
                  >
                    {fractureDirectionList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  className="flexBetween"
                  style={{ backgroundColor: `aliceBlue` }}
                >
                  <select
                    value={fractureLowerTeethInLine2}
                    onChange={onFractureLowerTeethInLine2Change}
                  >
                    {teethInFractureLineList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">{fractureTooth2aText}</div>
                  <select
                    value={fractureLowerTooth2a}
                    onChange={onFractureLowerTooth2aChange}
                  >
                    {fractureLowerTeethList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="label">{fractureTooth2bText}</div>
                  <select
                    value={fractureLowerTooth2b}
                    onChange={onFractureLowerTooth2bChange}
                  >
                    {fractureLowerTeethList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerStep2}
                    onChange={onFractureLowerStep2Change}
                  >
                    {fractureStepList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">Розрив слизової</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={lowerJawSubmucous2}
                    onChange={onLowerJawSubmucous2Change}
                    checked={lowerJawSubmucous2}
                  />
                </div>
              </>
            )}

            {showDlLines && (
              <>
                <div className="flexBetween">
                  <select value={dlType} onChange={onDlTypeChange}>
                    {dlTypeList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">Зуби</div>
                  <select value={dlTooth1} onChange={onDlTooth1Change}>
                    {dlToothList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select value={dlTooth2} onChange={onDlTooth2Change}>
                    {dlToothList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select value={dlTooth3} onChange={onDlTooth3Change}>
                    {dlToothList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={dlOperationType}
                    onChange={onDlOperationTypeChange}
                  >
                    {dlOperationTypeList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  <div className="label">Руйнування альвеоли</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={dlAlveolusDestroyed}
                    onChange={onDlAlveolusDestroyedChange}
                    checked={dlAlveolusDestroyed}
                  />
                  <select value={dlDirection} onChange={onDlDirectionChange}>
                    {dlDirectionList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">мм</div>
                  <select value={dlDistance} onChange={onDlDistanceChange}>
                    {dlDistanceList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="label">Розвернутий по осі</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={dlDeployed}
                    onChange={onDlDeployedChange}
                    checked={dlDeployed}
                  />
                  <div className="label2" onClick={() => setShowDlLine2(true)}>
                    +зуб
                  </div>
                </div>
                {showDlLine2 && (
                  <>
                    <div className="flexBetween">
                      <select value={dlType2} onChange={onDlType2Change}>
                        {dlTypeList.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <div className="label">Зуби</div>
                      <select value={dlTooth4} onChange={onDlTooth4Change}>
                        {dlToothList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select value={dlTooth5} onChange={onDlTooth5Change}>
                        {dlToothList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select value={dlTooth6} onChange={onDlTooth6Change}>
                        {dlToothList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select
                        value={dlOperationType2}
                        onChange={onDlOperationType2Change}
                      >
                        {dlOperationTypeList.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flexBetween">
                      <div className="label">Руйнування альвеоли</div>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value={dlAlveolusDestroyed2}
                        onChange={onDlAlveolusDestroyed2Change}
                        checked={dlAlveolusDestroyed2}
                      />
                      <select
                        value={dlDirection2}
                        onChange={onDlDirection2Change}
                      >
                        {dlDirectionList.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <div className="label">мм</div>
                      <select
                        value={dlDistance2}
                        onChange={onDlDistance2Change}
                      >
                        {dlDistanceList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <div className="label">Розвернутий по осі</div>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value={dlDeployed2}
                        onChange={onDlDeployed2Change}
                        checked={dlDeployed2}
                      />
                    </div>
                  </>
                )}
              </>
            )}
            {/* //overComplete */}
            {showOverCompleteLines && (
              <>
                <div className="flexBetween">
                  <select
                    value={overCompleteAmount}
                    onChange={onOverCompleteAmountChange}
                  >
                    {overCompleteAmountList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">В проекції зубів</div>
                  <select
                    value={overCompleteTooth1}
                    onChange={onOverCompleteTooth1Change}
                  >
                    {dlToothList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={overCompleteTooth2}
                    onChange={onOverCompleteTooth2Change}
                  >
                    {dlToothList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={overCompleteLocation}
                    onChange={onOverCompleteLocationChange}
                  >
                    {overCompleteLocationList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={overCompleteForm}
                    onChange={onOverCompleteFormChange}
                  >
                    {overCompleteFormList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={overCompleteXRay}
                    onChange={onOverCompleteXRayChange}
                  >
                    {xRayList2.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div
                    className="label2"
                    onClick={() => setShowOverCompleteLine2(true)}
                  >
                    +зуб
                  </div>
                </div>
                {showOverCompleteLine2 && (
                  <>
                    <div className="flexBetween">
                      <div className="label">В проекції зубів</div>
                      <select
                        value={overCompleteTooth3}
                        onChange={onOverCompleteTooth3Change}
                      >
                        {dlToothList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select
                        value={overCompleteTooth4}
                        onChange={onOverCompleteTooth4Change}
                      >
                        {dlToothList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select
                        value={overCompleteLocation2}
                        onChange={onOverCompleteLocation2Change}
                      >
                        {overCompleteLocationList.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <select
                        value={overCompleteForm2}
                        onChange={onOverCompleteForm2Change}
                      >
                        {overCompleteFormList.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
              </>
            )}

            {showNeoplasmLines && (
              <>
                <div className="flexBetween">
                  <select value={neoplasmType} onChange={onNeoplasmTypeChange}>
                    {neoplasmTypeList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select value={neoplasmArea} onChange={onNeoplasmAreaChange}>
                    {areaList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select value={neoplasmSide} onChange={onNeoplasmSideChange}>
                    {sideList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmSurface}
                    onChange={onNeoplasmSurfaceChange}
                  >
                    {neoplasmSurfaceList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select value={growthRate} onChange={onGrowthRateChange}>
                    {growthRateList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  <select
                    value={neoplasmMovability}
                    onChange={onNeoplasmMovabilityChange}
                  >
                    {neoplasmMovabilityList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmPoignancy}
                    onChange={onNeoplasmPoignancyChange}
                  >
                    {neoplasmPoignancyList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmConsistance}
                    onChange={onNeoplasmConsistanceChange}
                  >
                    {neoplasmConsistanceList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmDiameter}
                    onChange={onNeoplasmDiameterChange}
                  >
                    {neoplasmDiameterList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmColor}
                    onChange={onNeoplasmColorChange}
                  >
                    {neoplasmColorList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  <select value={neoplasmForm} onChange={onNeoplasmFormChange}>
                    {neoplasmFormList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmBorders}
                    onChange={onNeoplasmBordersChange}
                  >
                    {neoplasmBorderList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">Над поверхнею</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={neoplasmAboveSurface}
                    onChange={onNeoplasmAboveSurfaceChange}
                    checked={neoplasmAboveSurface}
                  />
                  <div className="label">Поверхня над ним змінена</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={neoplasmSurfaceAlter}
                    onChange={onNeoplasmSurfaceAlterChange}
                    checked={neoplasmSurfaceAlter}
                  />
                </div>
              </>
            )}

            {showRetentionLines && (
              <div className="flexBetween">
                <div className="label">Ретеновані зуби</div>
                <select value={retention1} onChange={onRetention1Change}>
                  {retention1List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select value={retention2} onChange={onRetention2Change}>
                  {retention2List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select value={retention3} onChange={onRetention3Change}>
                  {retention3List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select value={retention4} onChange={onRetention4Change}>
                  {retention4List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flexBetween">
              {" "}
              <select value={drugName1} onChange={onDrugName1Change}>
                {drugName1List.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select value={drugName2} onChange={onDrugName2Change}>
                {drugName2List.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select value={drugName3} onChange={onDrugName3Change}>
                {drugName3List.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select value={drugName4} onChange={onDrugName4Change}>
                {drugName4List.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flexBetween">
              {" "}
              <select value={drugName5} onChange={onDrugName5Change}>
                {drugName5List.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <input
                className="extraLongInputs"
                value={appointment}
                onChange={onAppointmentChange}
                placeholder="Додаткові призначення..."
              />
              <div
                className="label2"
                onClick={() => setShowAdditionAppointment(true)}
              >
                додаткові
              </div>
            </div>
            {showAdditionAppointment && (
              <div className="flexBetween">
                <input
                  className="longInputs"
                  value={appointment2}
                  onChange={onAppointment2Change}
                  placeholder="Дод. призначення..."
                />
                <input
                  className="longInputs"
                  value={appointment3}
                  onChange={onAppointment3Change}
                  placeholder="Дод. призначення..."
                />
              </div>
            )}
            {urgentDisease && (
              <>
                <div className="flexBetween">
                  {" "}
                  <input
                    className="middleInputs"
                    value={duration}
                    onChange={onDurationChange}
                    placeholder="Тривалість..."
                  />{" "}
                  <select value={surgeon} onChange={onSurgeonChange}>
                    {surgeons.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select value={assistant} onChange={onAssistantChange}>
                    {assistants.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select value={anesthetist} onChange={onAnesthetistChange}>
                    {anesthetistList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  {" "}
                  <input
                    className="shortInputs"
                    value={protocolNumber}
                    onChange={onProtocolNumberChange}
                    placeholder="№ протоколу"
                  />{" "}
                  <div className="label">Знеболення</div>
                  <label className="radioButtons">
                    <span>загальне</span>
                    <input
                      className="radioButtonsInput"
                      name="anestesiaType"
                      type="radio"
                      value="Загальне"
                      checked={anestesiaType === "Загальне"}
                      onChange={onAnestesiaTypeChoise}
                    />
                  </label>
                  <label className="radioButtons">
                    <span>місцеве</span>
                    <input
                      className="radioButtonsInput"
                      name="anestesiaType"
                      type="radio"
                      value="Місцеве"
                      checked={anestesiaType === "Місцеве"}
                      onChange={onAnestesiaTypeChoise}
                    />
                  </label>
                  <input
                    className="shortInputs"
                    value={operationDate}
                    onChange={onOperationDateChange}
                    placeholder="Дата операції..."
                  />
                  <input
                    className="shortInputs"
                    value={operationTime}
                    onChange={onOperationTimeChange}
                    placeholder="Час операції"
                  />
                </div>
                {showPerioLines && (
                  <div className="flexBetween">
                    <select value={pliers} onChange={onPliersChange}>
                      {pliersList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <select value={elevator} onChange={onElevatorChange}>
                      {elevatorList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <input
                      className="extraLongInputs"
                      value={perioTeeth}
                      onChange={onPerioTeethChange}
                      placeholder="Періодонтитні зуби(через кому)..."
                    />
                  </div>
                )}

                {suturingLine && (
                  <div className="flexBetween">
                    {" "}
                    <select value={sutureType} onChange={onSutureTypeChange}>
                      {sutureTypeList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <select
                      value={sutureMaterial}
                      onChange={onSutureMaterialChange}
                    >
                      {sutureMaterialList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <select value={sutureSize} onChange={onSutureSizeChange}>
                      {sutureSizeList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </>
            )}
            {showCariesLines && (
              <div id="cariesLines">
                <div className="flexBetween">
                  {" "}
                  <select value={tooth1} onChange={onTooth1Change}>
                    {toothList.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="morbiSelect"
                    value={morbi1}
                    onChange={onMorbi1Change}
                  >
                    {morbiList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <select value={tooth2} onChange={onTooth2Change}>
                    {toothList.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="morbiSelect"
                    value={morbi2}
                    onChange={onMorbi2Change}
                  >
                    {morbiList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <select value={tooth3} onChange={onTooth3Change}>
                    {toothList.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="morbiSelect"
                    value={morbi3}
                    onChange={onMorbi3Change}
                  >
                    {morbiList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <select value={tooth4} onChange={onTooth4Change}>
                    {toothList.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="morbiSelect"
                    value={morbi4}
                    onChange={onMorbi4Change}
                  >
                    {morbiList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <select value={tooth5} onChange={onTooth5Change}>
                    {toothList.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="morbiSelect"
                    value={morbi5}
                    onChange={onMorbi5Change}
                  >
                    {morbiList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flexBetween">
                  <select value={tooth6} onChange={onTooth6Change}>
                    {toothList.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="morbiSelect"
                    value={morbi6}
                    onChange={onMorbi6Change}
                  >
                    {morbiList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <select value={tooth7} onChange={onTooth7Change}>
                    {toothList.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="morbiSelect"
                    value={morbi7}
                    onChange={onMorbi7Change}
                  >
                    {morbiList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <select value={tooth8} onChange={onTooth8Change}>
                    {toothList.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="morbiSelect"
                    value={morbi8}
                    onChange={onMorbi8Change}
                  >
                    {morbiList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <select value={tooth9} onChange={onTooth9Change}>
                    {toothList.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="morbiSelect"
                    value={morbi9}
                    onChange={onMorbi9Change}
                  >
                    {morbiList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <select value={tooth10} onChange={onTooth10Change}>
                    {toothList.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="morbiSelect"
                    value={morbi10}
                    onChange={onMorbi10Change}
                  >
                    {morbiList.map((item, idx) => {
                      return (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flexi">
                  <button onClick={onBtnChangesClick} id="submitChanges">
                    Підтвердити зміни в зубній формулі
                  </button>
                </div>
              </div>
            )}
            {urgentDisease && (
              <div className="flexi">
                <progress value={progressValue} max="90"></progress>
              </div>
            )}
            <div className="sendLine">
              <input className="send" type="submit" value="Відправити" />
              <button onClick={onCancel}>Скасувати</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

PatientForm.propTypes = {
  onAdd: T.func.isRequired
};
