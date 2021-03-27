import React, { useState, useEffect } from "react";
import { patientListPropTypes } from "./propTypes";
import { Text } from "./text";
import { Icon } from "./icon";
import "./styles.css";
import T from "prop-types";
import {
  uColorList,
  uOpacityList,
  enterobiozList,
  dungList,
  bloodGroupList,
  rezusFactorList,
  townList,
  districtList,
  pliersList,
  elevatorList,
  surgeons,
  assistants,
  anesthetistList,
  sutureTypeList,
  sutureMaterialList,
  sutureSizeList,
  restMaterialList,
  editTypeList,
  toothList,
  morbiList
} from "./database";
import { changedListMounter } from "./functions/changedListMounter";
import { numArrayCreator } from "./functions/numArrayCreator";

export const PatientItem = ({
  idx,
  patient,
  onRemove,
  onSetCurrent,
  onDischargeAdd,
  onExtractAdd,
  onOperationAdd,
  onEditAdd,
  ...props
}) => {
  const year = new Date().getFullYear();
  const initDate = new Date();
  const date = `${initDate.getDate()}.${
    initDate.getMonth() + 1
  }.${initDate.getFullYear()}`;
  const onDischargeCancel = () => {
    setShowDischargeForm(false);
  };

  const onExtractCancel = () => {
    setShowExtractForm(false);
  };

  const onOperationCancel = () => {
    setShowOperationForm(false);
  };

  const onEditCancel = () => {
    setShowEditForm(false);
  };
  const lastDayList = numArrayCreator(1, 31);
  const [lastDay, setLastDay] = useState(Number(initDate.getDate()));
  const onLastDayChange = (e) => {
    setLastDay(e.target.value);
  };
  const lastMonthList = numArrayCreator(1, 12);
  const [lastMonth, setLastMonth] = useState(1 + Number(initDate.getMonth()));
  const onLastMonthChange = (e) => {
    setLastMonth(e.target.value);
  };
  const lastYearList = numArrayCreator(year, year + 2);
  const [lastYear, setLastYear] = useState(year);
  const onLastYearChange = (e) => {
    setLastYear(e.target.value);
  };

  const [showDischargeForm, setShowDischargeForm] = useState(false);
  const onShowDischargeForm = () => {
    setShowDischargeForm((prev) => !prev);
  };
  const [showExtractForm, setShowExtractForm] = useState(false);
  const onShowExtractForm = () => {
    setShowExtractForm(!showExtractForm);
  };
  const [showOperationForm, setShowOperationForm] = useState(false);
  const onShowOperationForm = () => {
    if (patient.disease === "") return;
    if (patient.disease === "periodontit" || patient.disease === "periostit") {
      setShowPerioLines(true);
    }
    if (patient.disease === "tongueBridle" || patient.disease === "lipBridle") {
      setSuturingLine(true);
    }
    setShowOperationForm(!showOperationForm);
  };
  const [showAllEditForm, setShowAllEditForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showFirstLineEditForm, setShowFirstLineEditForm] = useState(true);
  const onShowEditForm = () => {
    if (editType === "") return;
    setEditedValue(eTypeChecker(patient, editType));
    setShowEditForm(true);
    setShowFirstLineEditForm(false);
  };

  const onShowAllEditForm = () => {
    setShowAllEditForm(!showAllEditForm);
  };
  const [showPerioLines, setShowPerioLines] = useState(false);
  const [suturingLine, setSuturingLine] = useState(false);

  //toothFormula
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

  const [hb, setHb] = useState("");
  const onHbChange = (e) => setHb(e.target.value);
  const [er, setEr] = useState("");
  const onErChange = (e) => setEr(e.target.value);
  const [leu, setLeu] = useState("");
  const onLeuChange = (e) => setLeu(e.target.value);
  const [pal, setPal] = useState("");
  const onPalChange = (e) => setPal(e.target.value);
  const [segm, setSegm] = useState("");
  const onSegmChange = (e) => setSegm(e.target.value);
  const [eoz, setEoz] = useState("");
  const onEozChange = (e) => setEoz(e.target.value);
  const [limf, setLimf] = useState("");
  const onLimfChange = (e) => setLimf(e.target.value);
  const [rse, setRse] = useState("-");
  const onRseChange = (e) => setRse(e.target.value);
  const [uColor, setUColor] = useState(uColorList[0]);
  const onUColorChange = (e) => setUColor(e.target.value);
  const [uOpacity, setUOpacity] = useState(uOpacityList[0]);
  const onUOpacityChange = (e) => setUOpacity(e.target.value);
  const [uWeight, setUWeight] = useState("м/с");
  const onUWeightChange = (e) => setUWeight(e.target.value);
  const uPhList = numArrayCreator(8, 18).map((i) => (i / 2).toFixed(1));
  const [uPh, setUPh] = useState(uPhList[4]);
  const onUPhChange = (e) => setUPh(e.target.value);
  const [uProtein, setUProtein] = useState("-");
  const onUProteinChange = (e) => setUProtein(e.target.value);
  const [uLeu, setULeu] = useState("2-3");
  const onULeuChange = (e) => setULeu(e.target.value);
  const [uEp1, setUEp1] = useState("1-2");
  const onUEp1Change = (e) => setUEp1(e.target.value);
  const [uEp2, setUEp2] = useState("0-1");
  const onUEp2Change = (e) => setUEp2(e.target.value);
  const [uOther, setUOther] = useState("-");
  const onUOtherChange = (e) => setUOther(e.target.value);
  const [glucose, setGlucose] = useState("ммоль/л");
  const onGlucoseChange = (e) => setGlucose(e.target.value);
  const [enterobioz, setEnterobioz] = useState(enterobiozList[0].value);
  const onEnterobiozChange = (e) => setEnterobioz(e.target.value);
  const [dung, setDung] = useState(dungList[0].value);
  const onDungChange = (e) => setDung(e.target.value);
  const [bloodGroup, setBloodGroup] = useState(bloodGroupList[0].value);
  const onBloodGroupChange = (e) => {
    setBloodGroup(e.target.value);
  };
  const [rezusFactor, setRezusFactor] = useState(rezusFactorList[0].value);
  const onRezusFactorChange = (e) => {
    setRezusFactor(e.target.value);
  };
  const [wasViolation, setWasViolation] = useState(false);
  const onWasViolationChange = () => {
    setWasViolation(!wasViolation);
  };
  const [anestesiaType, setAnestesiaType] = useState("Загальне");
  const onAnestesiaTypeChoise = (event) => {
    setAnestesiaType(event.target.value);
  };
  const [finalDiagnosis, setFinalDiagnosis] = useState(patient.finalDiagnosis);
  const onFinalDiagnosisChange = (event) => {
    setFinalDiagnosis(event.target.value);
  };
  const onDischargeSubmit = (e) => {
    e.preventDefault();
    onDischargeAdd(
      patient._id,
      lastDay,
      lastMonth,
      lastYear,
      hb,
      er,
      leu,
      pal,
      segm,
      eoz,
      limf,
      rse,
      uColor,
      uOpacity,
      uWeight,
      uPh,
      uProtein,
      uLeu,
      uEp1,
      uEp2,
      glucose,
      enterobioz,
      dung,
      bloodGroup,
      rezusFactor,
      uOther,
      wasViolation,
      finalDiagnosis
    );
    setShowDischargeForm(false);
  };
  const birthDayList = numArrayCreator(1, 31);
  const [birthDay, setBirthDay] = useState(birthDayList[0]);
  const onBirthDayChange = (e) => setBirthDay(e.target.value);
  const birthMonthList = numArrayCreator(1, 12);
  const [birthMonth, setBirthMonth] = useState(birthMonthList[0]);
  const onBirthMonthChange = (e) => setBirthMonth(e.target.value);
  const birthYearList = numArrayCreator(year - 19, year);
  const [birthYear, setBirthYear] = useState(birthYearList[0]);
  const onBirthYearChange = (e) => setBirthYear(e.target.value);
  const [town, setTown] = useState(townList[0].value);
  const onTownChange = (e) => setTown(e.target.value);
  const [adress, setAdress] = useState("");
  const onAdressChange = (e) => setAdress(e.target.value);
  const [district, setDistrict] = useState(districtList[0].value);
  const onDistrictChange = (e) => setDistrict(e.target.value);
  const [village, setVillage] = useState("");
  const onVillageChange = (e) => setVillage(e.target.value);
  const [otherRegion, setOtherRegion] = useState("");
  const onOtherRegionChange = (e) => setOtherRegion(e.target.value);

  const onExtractSubmit = (e) => {
    e.preventDefault();
    onExtractAdd(
      patient._id,
      birthDay,
      birthMonth,
      birthYear,
      town,
      adress,
      district,
      village,
      otherRegion
    );
    setShowExtractForm(false);
  };

  const onOperationSubmit = (e) => {
    e.preventDefault();
    if (patient.disease === "caries" && restMaterial === "") return;
    onOperationAdd(
      patient._id,
      protocolNumber,
      operationDate,
      operationTime,
      pliers,
      elevator,
      duration,
      surgeon,
      assistant,
      anesthetist,
      restMaterial,
      sutureType,
      sutureMaterial,
      sutureSize,
      anestesiaType,
      operationDataSend,
      changedList
    );
    setShowOperationForm(false);
  };

  const [protocolNumber, setProtocolNumber] = useState("");
  const onProtocolNumberChange = (event) =>
    setProtocolNumber(event.target.value);
  const [operationDate, setOperationDate] = useState(date);
  const onOperationDateChange = (event) => setOperationDate(event.target.value);
  const [operationTime, setOperationTime] = useState("");
  const onOperationTimeChange = (event) => setOperationTime(event.target.value);
  const [pliers, setPliers] = useState(pliersList[0].value);
  const onPliersChange = (event) => setPliers(event.target.value);
  const [elevator, setElevator] = useState(elevatorList[0].value);
  const onElevatorChange = (event) => setElevator(event.target.value);
  const [duration, setDuration] = useState("");
  const onDurationChange = (event) => setDuration(event.target.value);
  const [surgeon, setSurgeon] = useState(surgeons[0].value);
  const onSurgeonChange = (event) => setSurgeon(event.target.value);
  const [assistant, setAssistant] = useState(assistants[0].value);
  const onAssistantChange = (event) => setAssistant(event.target.value);
  const [anesthetist, setAnesthetist] = useState(anesthetistList[0].value);
  const onAnesthetistChange = (event) => setAnesthetist(event.target.value);
  const [sutureType, setSutureType] = useState(sutureTypeList[0].value);
  const onSutureTypeChange = (event) => setSutureType(event.target.value);
  const [sutureMaterial, setSutureMaterial] = useState(
    sutureMaterialList[0].value
  );
  const onSutureMaterialChange = (event) =>
    setSutureMaterial(event.target.value);
  const [sutureSize, setSutureSize] = useState(sutureSizeList[0].value);
  const onSutureSizeChange = (event) => setSutureSize(event.target.value);
  const [restMaterial, setRestMaterial] = useState(restMaterialList[0].value);
  const onRestMaterialChange = (event) => setRestMaterial(event.target.value);
  const [editType, setEditType] = useState(editTypeList[0].value);
  const onEditTypeChange = (event) => setEditType(event.target.value);
  const eTypeChecker = (patient, type) => {
    if (type === "") return;
    let result = "";
    switch (type) {
      case "name":
        result = patient.name;
        break;
      case "cardNumber":
        result = patient.cardNumber;
        break;
      case "reviewDate":
        result = patient.reviewDate;
        break;
      case "doctor":
        result = patient.doctor;
        break;
      case "complaintsContent":
        result = patient.complaintsContent;
        break;
      case "anamnesisMorbiContent":
        result = patient.anamnesisMorbiContent;
        break;
      case "anamnesisVitaeContent":
        result = patient.anamnesisVitaeContent;
        break;
      case "statusPraesensContent":
        result = patient.statusPraesensContent;
        break;
      case "statusLocalisContent":
        result = patient.statusLocalisContent;
        break;
      case "diagnosis":
        result = patient.diagnosis;
        break;
      case "protocolNumber":
        result = patient.protocolNumber;
        break;
      case "operationName":
        result = patient.operationName;
        break;
      case "operationDate":
        result = patient.operationDate;
        break;
      case "operationTime":
        result = patient.operationTime;
        break;
      case "operationContent":
        result = patient.operationContent;
        break;
      case "drugName1":
        result = patient.drugName1;
        break;
      case "drugName2":
        result = patient.drugName2;
        break;
      case "drugName3":
        result = patient.drugName3;
        break;
      case "drugName4":
        result = patient.drugName4;
        break;
      case "drugName5":
        result = patient.drugName5;
        break;
      case "appointment":
        result = patient.appointment;
        break;
      case "appointment2":
        result = patient.appointment2;
        break;
      case "appointment3":
        result = patient.appointment3;
        break;
      case "shortStatusContent":
        result = patient.shortStatusContent;
        break;
      default:
        throw new Error();
    }
    return result;
  };

  const onEditSubmit = (e) => {
    e.preventDefault();
    onEditAdd(patient._id, editType, editedValue);
    setShowAllEditForm(false);
    setShowEditForm(false);
    setShowFirstLineEditForm(true);
    setEditType(editTypeList[0].value);
  };
  const [editedValue, setEditedValue] = useState("");
  const onEditedValueChange = (e) => setEditedValue(e.target.value);
  const operationDataSend = true;
  useEffect(() => {
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
  }, [restMaterial]);
  return (
    <>
      {idx < 100 && (
        <div className="patientLine" style={{ ...props }}>
          <div id="cardNumberinList">
            {" "}
            <Text size="20px">{patient.cardNumber}</Text>
          </div>
          <div id="patientNameinList">
            {" "}
            <Text size="20px">{patient.name}</Text>
          </div>
          <button
            onClick={onShowDischargeForm}
            style={{
              backgroundColor: patient.epicrisisDataSend ? "olive" : "#6c7592"
            }}
          >
            Епікриз
          </button>
          <button
            onClick={onShowExtractForm}
            style={{
              backgroundColor: patient.extractDataSend ? "olive" : "#6c7592"
            }}
          >
            Виписка
          </button>
          <button id="viewBtn" onClick={() => onSetCurrent(patient._id)}>
            <Icon name="eye" />
          </button>
          <button id="operationBtn" onClick={onShowOperationForm}>
            <Icon name="operation" />
          </button>
          <button id="editBtn" onClick={onShowAllEditForm}>
            <Icon name="edit" fill="olive" />
          </button>
          <button onClick={() => onRemove(patient._id)} id="removeBtn">
            {" "}
            <Icon name="remove" />
          </button>
        </div>
      )}
      {showDischargeForm && (
        <div id="dischargeForm">
          <form onSubmit={onDischargeSubmit}>
            <p className="flexBetween">
              {" "}
              <input
                className="superShortInputs"
                value={hb}
                onChange={onHbChange}
                placeholder="Hb..."
              />{" "}
              <input
                className="superShortInputs"
                value={er}
                onChange={onErChange}
                placeholder="Er..."
              />
              <input
                className="superShortInputs"
                value={leu}
                onChange={onLeuChange}
                placeholder="Leu..."
              />
              <input
                className="superShortInputs"
                value={pal}
                onChange={onPalChange}
                placeholder="Пал..."
              />
              <input
                className="superShortInputs"
                value={segm}
                onChange={onSegmChange}
                placeholder="Сегм..."
              />
              <input
                className="superShortInputs"
                value={eoz}
                onChange={onEozChange}
                placeholder="Еоз..."
              />
              <input
                className="superShortInputs"
                value={limf}
                onChange={onLimfChange}
                placeholder="Лімф..."
              />
              <input
                className="superShortInputs"
                value={rse}
                onChange={onRseChange}
                placeholder="ШОЕ..."
              />
            </p>
            <p className="flexBetween">
              <div className="label">Сеча</div>
              <select value={uColor} onChange={onUColorChange}>
                {uColorList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <select value={uOpacity} onChange={onUOpacityChange}>
                {uOpacityList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <input
                className="superShortInputs"
                value={uWeight}
                onChange={onUWeightChange}
                placeholder="Питома вага..."
              />
              <select value={uPh} onChange={onUPhChange}>
                {uPhList.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <input
                className="superShortInputs"
                value={uProtein}
                onChange={onUProteinChange}
                placeholder="Білок..."
              />
              <input
                className="superShortInputs"
                value={uLeu}
                onChange={onULeuChange}
                placeholder="Лейкоцити"
              />
              <input
                className="superShortInputs"
                value={uEp1}
                onChange={onUEp1Change}
                placeholder="Плоский"
              />
              <input
                className="superShortInputs"
                value={uEp2}
                onChange={onUEp2Change}
                placeholder="Перехідний"
              />
              <input
                className="superShortInputs"
                value={uOther}
                onChange={onUOtherChange}
                placeholder="інше..."
              />
            </p>
            <p className="flexBetween">
              <div className="label" id="firstLine">
                Глюкоза
              </div>{" "}
              <input
                className="shortInputs"
                value={glucose}
                onChange={onGlucoseChange}
                placeholder="Глюкоза..."
              />
              <select value={enterobioz} onChange={onEnterobiozChange}>
                {enterobiozList.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select value={dung} onChange={onDungChange}>
                {dungList.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              {(patient.disease === "tongueBridle" ||
                patient.disease === "caries" ||
                patient.disease === "lipBridle" ||
                patient.disease === "cyst" ||
                patient.disease === "neoplasm" ||
                patient.disease === "retention") && (
                <>
                  <select value={bloodGroup} onChange={onBloodGroupChange}>
                    {bloodGroupList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <select value={rezusFactor} onChange={onRezusFactorChange}>
                    {rezusFactorList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </p>
            <p className="flexi">
              <div className="label" id="firstLine">
                Дата виписки
              </div>{" "}
              <select value={lastDay} onChange={onLastDayChange}>
                {lastDayList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <select value={lastMonth} onChange={onLastMonthChange}>
                {lastMonthList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <select value={lastYear} onChange={onLastYearChange}>
                {lastYearList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <input
                className="extraLongInputs"
                value={finalDiagnosis}
                onChange={onFinalDiagnosisChange}
                placeholder="заключний діагноз..."
              />
              <div className="label">За порушення режиму</div>
              <input
                className="checkbox"
                type="checkbox"
                value={wasViolation}
                onChange={onWasViolationChange}
                checked={wasViolation}
              />
            </p>
            <p className="sendLine">
              <input className="send" type="submit" value="Відправити" />
              <button onClick={onDischargeCancel}>Скасувати</button>
            </p>
          </form>
        </div>
      )}

      {showExtractForm && (
        <div id="extractForm">
          <form onSubmit={onExtractSubmit}>
            <p className="flexi">
              <div className="label">Дата народження</div>
              <select value={birthDay} onChange={onBirthDayChange}>
                {birthDayList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <select value={birthMonth} onChange={onBirthMonthChange}>
                {birthMonthList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <select value={birthYear} onChange={onBirthYearChange}>
                {birthYearList.map((item, idx) => {
                  return (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </p>
            <p className="flexi">
              <div className="label">Для жителя міста</div>
              <select value={town} onChange={onTownChange}>
                {townList.map((item, idx) => {
                  return (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <input
                className="longInputs"
                value={adress}
                onChange={onAdressChange}
                placeholder="введіть адресу..."
              />
            </p>
            <p className="flexi">
              <div className="label">Для сільського мешканця</div>
              <select value={district} onChange={onDistrictChange}>
                {districtList.map((item, idx) => {
                  return (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <input
                className="longInputs"
                value={village}
                onChange={onVillageChange}
                placeholder="введіть назву села або СМТ..."
              />
            </p>
            <p className="flexi">
              <div className="label">Для жителя іншої області</div>
              <input
                className="extraLongInputs"
                value={otherRegion}
                onChange={onOtherRegionChange}
                placeholder="введіть повну адресу..."
              />
            </p>
            <p className="sendLine">
              <input className="send" type="submit" value="Відправити" />
              <button onClick={onExtractCancel}>Скасувати</button>
            </p>
          </form>
        </div>
      )}
      {showOperationForm && (
        <div id="operationForm">
          <form onSubmit={onOperationSubmit}>
            <p className="flexi">
              {" "}
              <input
                className="middleInputs"
                value={duration}
                onChange={onDurationChange}
                placeholder="Тривалість операції..."
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
            </p>
            <p className="flexi">
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
            </p>
            {showPerioLines && (
              <p className="flexi">
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
              </p>
            )}

            {suturingLine && (
              <p className="flexi">
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
              </p>
            )}

            {patient.disease === "caries" && (
              <div id="cariesLines">
                <p className="flexBetween">
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
                </p>
                <p className="flexBetween">
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
                </p>

                <p className="flexi">
                  <select value={restMaterial} onChange={onRestMaterialChange}>
                    {restMaterialList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
            )}

            <p className="sendLine">
              <input className="send" type="submit" value="Відправити" />
              <button onClick={onOperationCancel}>Скасувати</button>
            </p>
          </form>
        </div>
      )}
      {showAllEditForm && (
        <div id="allEditForm">
          {showFirstLineEditForm && (
            <p className="flexi">
              <select value={editType} onChange={onEditTypeChange}>
                {editTypeList.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
              <button onClick={onShowEditForm}>Підтвердити</button>
            </p>
          )}
          {showEditForm && (
            <form onSubmit={onEditSubmit}>
              <p className="flexi">
                <textarea
                  value={editedValue}
                  onChange={onEditedValueChange}
                  placeholder="введіть значення..."
                  rows="10"
                  cols="100"
                />
              </p>
              <p className="sendLine">
                <input className="send" type="submit" value="Відправити" />
                <button onClick={onEditCancel}>Скасувати</button>
              </p>
            </form>
          )}
        </div>
      )}
    </>
  );
};

PatientItem.propTypes = {
  ...patientListPropTypes,
  onRemove: T.func.isRequired
};
