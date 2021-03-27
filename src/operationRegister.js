import React from "react";
import "./styles.css";
import { Block } from "./block";
import { Healing } from "./healing";

export const OperationRegister = ({ current }) => {
  return (
    <>
      <div className="flexEnd" id="opFirstLine">
        <Block header="Від: " content={current.operationDate} />
      </div>
      <div className="flexi">
        <Block header="ОПЕРАЦІЯ №: " content={current.protocolNumber} />
      </div>
      <div id="registerBlock">
        <div className="registerPartOfBlock">
          <Block
            header="1. Прізвище, ім'я, по-батькові: "
            content={current.name}
          />
          <Block header="2. Хірург: " content={current.surgeon} />
          <Block header="3. Анестезіолог: " content={current.anesthetist} />
          <Block
            header="4. Діагноз до операції: "
            content={current.diagnosis}
          />
          <Block header="5. Вид анестезії: " content="в/в, заг." />
        </div>

        <div className="registerPartOfBlock">
          <Block
            header="7. Медична карта стаціонарного хворого №:"
            content={current.cardNumber}
          />
          <Block header="8. Асистенти: " content={current.assistant} />
          <Block header="9. Операційна медсестра: " content="" />
        </div>
      </div>
      <div id="lastOpLine">
        <Block
          header="6. Діагноз після операції: "
          content={current.diagnosis}
        />
      </div>
      <div className="flexi opDesc">
        <Block header="ОПИС ОПЕРАЦІЇ" content="" />
      </div>
      <div className="flexi opDesc">
        <Block header={current.operationNameCap} content={""} />
      </div>
      <div className="flexi protocolContent">
        <Block header={""} content={current.operationContent} />
      </div>
      <Healing drugs={current.drugs} />
    </>
  );
};
