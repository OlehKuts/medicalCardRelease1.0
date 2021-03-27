import React from "react";
import "./styles.css";
import { Block } from "./block";
import { BlockList } from "./blockList";
import { FormulaTable } from "./formulaTable";
import { examinations, baseIndications } from "./database";

export const Review = ({ current }) => {
  const _anestesiaType =
    current.anestesiaType === "Місцеве"
      ? "Місцеве знеболення."
      : "Загальне знеболення.";
  const preIndications = [
    current.diagnosisCap,
    current.operationNameCap,
    _anestesiaType
  ];
  const indications = preIndications.concat(baseIndications);
  const preDrugs = ["Режим палатний", "Стіл загальний"].concat(current.drugs);
  const drugs = preDrugs.filter((drug) => drug !== "");
  const tLength = current.toothFormula ? current.toothFormula.length / 2 : 1;
  const mandibulaNames = current.toothFormula
    .map((item) => item.name)
    .splice(tLength, tLength);
  const mandibulaStatusList = current.toothFormula
    .map((item) => item.status)
    .splice(tLength, tLength);
  const maxillaNames = current.toothFormula
    .map((item) => item.name)
    .splice(0, tLength);
  const maxillaStatusList = current.toothFormula
    .map((item) => item.status)
    .splice(0, tLength);
  return (
    <div id="review">
      <div className="flexi headers">
        <Block header="Дата:" content={current.reviewDate} />
      </div>
      <div className="flexi headers">
        <Block
          header="Спільний огляд зі зав.відділенням Корицьким В.Г."
          content=""
        />
      </div>
      <div className="flexi headers">
        <Block header="№історії хвороби:" content={current.cardNumber} />
        <Block header="Дитина:" content={current.name} />
      </div>
      <div className="flexi headers">
        <Block header="Щелепно-лицевий хірург:" content={current.doctor} />
      </div>
      <Block header="Скарги:" content={current.complaintsContent} />
      <Block
        header="Анамнез захворювання:"
        content={current.anamnesisMorbiContent}
      />
      <Block header="Анамнез життя:" content={current.anamnesisVitaeContent} />
      <Block
        header="Об'єктивний стан:"
        content={current.statusPraesensContent}
      />
      <Block
        header="Стан щелепно-лицевої ділянки:"
        content={current.statusLocalisContent}
      />
      {current.disease === "caries" && (
        <>
          <div className="flexi headers">
            {" "}
            <FormulaTable
              line1={maxillaStatusList}
              line2={maxillaNames}
              line3={mandibulaNames}
              line4={mandibulaStatusList}
              size="20px"
            />
          </div>
          <div className="flexi headers"> </div>
        </>
      )}
      <div id="diagnosis">
        <Block header="Діагноз:" content={current.diagnosis} />
      </div>
      <div className="flexBetween headers">
        <div className="examinationList">
          <BlockList header="План обстеження:" content={examinations} />
          {current.age < 3 && !current.planned && <p>6. Бак.посів калу</p>}
          {current.planned && <p>6. Група крові, резус-фактор</p>}
        </div>
        <div className="examinationList">
          <BlockList header="План лікування:" content={drugs} />
        </div>
      </div>
      <div id="secondPage">
        {!current.operationDataSend && (
          <div className="flexStart headers">
            <BlockList header="Показання до операції:" content={indications} />
          </div>
        )}
        {current.operationDataSend && <div className="emptyField"></div>}
        {(!current.planned || current.operationDataSend) && (
          <>
            <div className="flexi headers" id="protocol">
              <Block
                header="Протокол операції № "
                content={current.protocolNumber}
              />
            </div>
            <div className="flexi headers">
              <Block header="Дата: " content={current.operationDate} />
              <Block header="Час: " content={current.operationTime} />
            </div>
            <div className="flexi headers">
              <Block header={current.operationNameCap} content={""} />
            </div>
            <div className="flexi protocolContent headers">
              <Block header={""} content={current.operationContent} />
            </div>
            <div className="flexEnd headers">
              {" "}
              <Block
                header="Тривалість:"
                content={`${current.duration} хвилин.`}
              />{" "}
            </div>
            <div className="flexEnd headers">
              <Block header="Оперував:" content={current.surgeon} />
            </div>
            <div className="flexEnd headers">
              <Block header="Асистент:" content={current.assistant} />
            </div>
            <div className="flexEnd headers">
              <Block header="Анестезіолог:" content={current.anesthetist} />
            </div>
            <div id="postDiagnosis">
              {" "}
              <Block
                header="Післяопераційний діагноз:"
                content={current.finalDiagnosis || current.diagnosis}
              />{" "}
            </div>
            <Block header="Дата:" content={current.operationDate} />
            <Block header="Час:" content={current.lastTime} />
            <Block
              header=""
              content="Дитина притомна. Серцева діяльність та дихання не порушені. Кровотечі не спостерігається. Призначення виконуються."
            />
            <div className="flexEnd headers">
              <div className="lastLine">
                {" "}
                <Block header="" content={current.doctor} />{" "}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
//
