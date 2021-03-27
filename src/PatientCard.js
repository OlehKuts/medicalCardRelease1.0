import React from "react";
import "./styles.css";
import { Text } from "./text";
import { Icon } from "./icon";
import { maleNames } from "./database";
import { maleChecker } from "./functions/maleChecker";

export const PatientCard = ({ current }) => {
  const property = current;
  const isMale =
    current !== undefined ? maleChecker(maleNames, property.name) : false;
  return (
    <div className="patientCard">
      <div className="propertyCard">
        <div className="ava">
          {" "}
          {isMale ? (
            <Icon name="man" size="5rem" color="midnightblue" />
          ) : (
            <Icon name="woman" size="5rem" color="mediumpurple" />
          )}
        </div>
        <div
          className="title"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem"
          }}
        >
          {property.name}, {property.age}
        </div>

        <div className="detailsFree">
          {" "}
          <Text size="1rem">
            {property.finalDiagnosis || property.diagnosis}
          </Text>
        </div>
        <div className="details">
          <Text fontWeight="bold">Операція</Text>
          <Text>{property.operationName}</Text>
        </div>
        <div className="details">
          <Text fontWeight="bold">Дата та час операції</Text>
          <Text>
            {property.operationDate}, {property.operationTime}
          </Text>
        </div>
        <div className="details">
          <Text fontWeight="bold">Статус</Text>
          <Text>
            {property.epicrisisDataSend ? "Виписаний" : "Активний"}
          </Text>{" "}
        </div>
        <div className="details">
          <Text fontWeight="bold">Лікар</Text>
          <Text>{property.doctor}</Text>
        </div>
        <hr className="hr" />
        <div
          className="title"
          style={{
            fontWeight: "bold"
          }}
        >
          До друку готові сторінки
        </div>
        <div className="detailsBetween">
          <Text>Первинний огляд (2-3)</Text>
          {property.epicrisisDataSend && <Text>Епікриз(4)</Text>}
          {property.extractDataSend && <Text>Виписка(5)</Text>}
          <Text>Протокол операції (6)</Text>
          {property.epicrisisDataSend && <Text>Щоденник(7 або 7,8)</Text>}
        </div>
      </div>
    </div>
  );
};
