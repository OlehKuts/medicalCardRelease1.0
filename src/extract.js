import React from "react";
import "./styles.css";
import { Block } from "./block";
import { Text } from "./text";
import { BlockList } from "./blockList";
import { Table } from "./table";
import { FormulaTable } from "./formulaTable";
import { bloodTestExponents, urineTestExponents } from "./database";
import { bloodTestChecker } from "./functions/bloodTestChecker";
import signKuts from "./images/signetKuts.jpg";
import signKuchmiy from "./images/signetKuchmiy.jpg";

export const Extract = ({ current }) => {
  const showSignet =
    current.doctor === "Куц О.В." || current.doctor === "Кучмій В.Я."
      ? true
      : false;
  const urlSign =
    current.doctor === "Куц О.В."
      ? signKuts
      : current.doctor === "Кучмій В.Я."
      ? signKuchmiy
      : "";
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
    <div id="extract">
      {current.extractDataSend && (
        <>
          <div className="flexStart">
            <Text size="18px" fontWeight="bold">
              КНП "ТОДКЛ" ТОР
            </Text>
          </div>
          <div className="flexStart">
            <Text size="18px" fontWeight="bold">
              отоларингологічне
            </Text>
          </div>
          <div className="flexStart">
            <Text size="18px" fontWeight="bold">
              відділення
            </Text>
          </div>
          <div className="flexi headers">
            <Block header="ВИПИСКА" content={""} size="28px" />
          </div>
          <div className="flexi headers">
            <Block
              header={""}
              content={`з медичної карти стаціонарного хворого №${current.cardNumber}`}
              size="18px"
            />
          </div>
          <Block header="П.І.Б хворого: " content={current.name} />
          <Block header="Дата народження: " content={current.birthDate} />
          <Block header="Адреса проживання: " content={current.fullAdress} />
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
          {drugs.length === 0 ? (
            <Block header="Медикаментозне лікування відсутнє." content="" />
          ) : (
            <BlockList header="Медикаментозне лікування:" content={drugs} />
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
            {!showSignet && (
              <div className="lastLine">
                <Block header="" content={current.doctor} />
              </div>
            )}
            {showSignet && (
              <div className="block signet">
                <Text fontWeight="bold">
                  <img src={urlSign} alt="" />
                </Text>
                {""}
                <span className="signature"> {current.doctor} </span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
//
