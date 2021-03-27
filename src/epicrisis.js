import React from "react";
import "./styles.css";
import { Block } from "./block";
import { BlockList } from "./blockList";
import { Table } from "./table";
import { Text } from "./text";
import { FormulaTable } from "./formulaTable";
import { bloodTestExponents, urineTestExponents } from "./database";
import { bloodTestChecker } from "./functions/bloodTestChecker";

export const Epicrisis = ({ current }) => {
  const drugs = current.drugs.filter((drug) => drug !== "");
  const formula = current.toothFormulaPost || current.toothFormula;
  const tLength = formula ? formula.length / 2 : 1;
  const mandibulaNames = formula
    .map((item) => item.name)
    .splice(tLength, tLength);
  const mandibulaStatusList = formula
    .map((item) => item.status)
    .splice(tLength, tLength);
  const maxillaNames = formula.map((item) => item.name).splice(0, tLength);
  const maxillaStatusList = formula
    .map((item) => item.status)
    .splice(0, tLength);
  const abNormalList = bloodTestChecker(current.bloodTest);
  return (
    <div id="epicrisis">
      {current.epicrisisDataSend && (
        <>
          <div className="flexi headers">
            <Block header="№історії хвороби:" content={current.cardNumber} />
            <Block header="Дитина:" content={current.name} />
          </div>
          <div className="flexi headers">
            <Block header="ЕПІКРИЗ" content={""} size="28px" />
          </div>
          <Block
            header=""
            content={`Дитина знаходилася на лікуванні в отоларингологічному відділенні (щелепно-лицева хірургія) КНП "ТОДКЛ" ТОР з ${current.reviewDate} по ${current.dischargeDate}.`}
          />
          <Block header="Скарги:" content={current.complaintsContent} />
          <Block
            header="Анамнез захворювання:"
            content={current.anamnesisMorbiContent}
          />
          <Block header="Об'єктивно:" content={current.shortStatusContent} />
          {current.disease === "caries" && (
            <div className="flexi headers">
              <FormulaTable
                line1={maxillaStatusList}
                line2={maxillaNames}
                line3={mandibulaNames}
                line4={mandibulaStatusList}
              />
            </div>
          )}
          <Block
            header="Діагноз:"
            content={current.finalDiagnosis || current.diagnosis}
          />
          <Block
            header=""
            content={`${current.operationDate} під ${current.anestesiaTypeModified} знеболенням проведено оперативне втручання - ${current.operationName} Післяопераційний період без ускладнень.`}
          />
          <Block
            header="Післяопераційний діагноз:"
            content={current.finalDiagnosis || current.diagnosis}
          />
          {drugs.length !== 0 ? (
            <BlockList header="Медикаментозне лікування:" content={drugs} />
          ) : (
            <Block header="Медикаментозне лікування відсутнє." content="" />
          )}

          <Block
            header=""
            content={` ${
              current.wasViolation
                ? "Дитина виписана за вимогою батьків."
                : "Дитина виписана в задовільному загальному стані."
            } Виписка видана батькам на руки. В контакті з інфекційними хворими не перебувала.`}
          />
          <Block header="Рекомендації:" content={current.recommendations} />
          <div className="flexi headers">
            <Block header="ДАНІ ОБСТЕЖЕНЬ" content="" size="20px" />
          </div>
          <div className="flexi headers">
            <Block header="ЗАГАЛЬНИЙ АНАЛІЗ КРОВІ" content="" size="16px" />
          </div>
          <div className="flexi headers">
            <Table
              headerList={bloodTestExponents}
              contentList={current.bloodTest}
              abNormalList={abNormalList}
            />
          </div>
          <div className="flexi headers">
            <Block header="ЗАГАЛЬНИЙ АНАЛІЗ СЕЧІ" content="" size="16px" />
          </div>
          <div className="flexi headers">
            <Table
              headerList={urineTestExponents}
              contentList={current.urineTest}
            />
          </div>
          <Block header="Глюкоза крові:" content={`${current.glucose}.`} />
          <div className="block">
            {current.enterobioz !== `не визначався` && (
              <>
                <Text size="18px" fontWeight="bold">
                  Зішкріб на ентеробіоз:
                </Text>
                {""}
                <span id="content"> {current.enterobioz}. </span>
              </>
            )}
            {current.dung !== `не визначався` && (
              <>
                <Text size="18px" fontWeight="bold">
                  Кал на я/г:
                </Text>
                {""}
                <span id="content"> {current.dung}. </span>
              </>
            )}
          </div>
          {current.planned && (
            <div className="block">
              <Text size="18px" fontWeight="bold">
                Група крові:
              </Text>
              {""}
              <span id="content"> {current.bloodGroup}, </span>
              <Text size="18px" fontWeight="bold">
                резус-фактор:
              </Text>
              {""}
              <span id="content"> {current.rezusFactor}. </span>
            </div>
          )}
          <div className="flexEnd headers">
            <div className="lastLine">
              <Block header="" content={current.doctor} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
