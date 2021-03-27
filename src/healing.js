import React, { useState } from "react";
import "./styles.css";
import { Text } from "./text";
import { days } from "./database";

export const Healing = ({ drugs }) => {
  const [showForm, setShowForm] = useState(true);
  const filteredDrugs = drugs.filter((d) => d !== "");
  const [drug1, setDrug1] = useState(days[0]);
  const onDrug1Change = (e) => setDrug1(e.target.value);
  const [drug2, setDrug2] = useState(days[0]);
  const onDrug2Change = (e) => setDrug2(e.target.value);
  const [drug3, setDrug3] = useState(days[0]);
  const onDrug3Change = (e) => setDrug3(e.target.value);
  const [drug4, setDrug4] = useState(days[0]);
  const onDrug4Change = (e) => setDrug4(e.target.value);
  const [drug5, setDrug5] = useState(days[0]);
  const onDrug5Change = (e) => setDrug5(e.target.value);
  const [drugDays, setDrugDays] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    setDrugDays([drug1, drug2, drug3, drug4, drug5].filter((d) => d !== ""));
    setShowForm(false);
  };
  return (
    <>
      <hr className="healingHr" />
      <div className="healingHeader">
        {" "}
        <h1>Призначення</h1>{" "}
      </div>
      {showForm && (
        <>
          <form onSubmit={onSubmit}>
            <div className="drugDaysForm healingHeader">
              {filteredDrugs.length > 0 && (
                <>
                  <div className="label">{filteredDrugs[0]}</div>
                  <select value={drug1} onChange={onDrug1Change}>
                    {days.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
              {filteredDrugs.length > 1 && (
                <>
                  <div className="label">{filteredDrugs[1]}</div>
                  <select value={drug2} onChange={onDrug2Change}>
                    {days.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
              {filteredDrugs.length > 2 && (
                <>
                  <div className="label">{filteredDrugs[2]}</div>
                  <select value={drug3} onChange={onDrug3Change}>
                    {days.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
              {filteredDrugs.length > 3 && (
                <>
                  <div className="label">{filteredDrugs[3]}</div>
                  <select value={drug4} onChange={onDrug4Change}>
                    {days.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
              {filteredDrugs.length > 4 && (
                <>
                  <div className="label">{filteredDrugs[4]}</div>
                  <select value={drug5} onChange={onDrug5Change}>
                    {days.map((item, idx) => {
                      return (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
            </div>
            <div className="healingHeader">
              {" "}
              <input className="send" type="submit" value="Відправити" />{" "}
            </div>
          </form>
        </>
      )}
      <div className="healing">
        <div className="drugElementList" id="drugElementList1">
          <ul>
            {filteredDrugs.map((d, idx) => (
              <li key={idx} className="drugElement">
                <Text size="24px">{d}</Text>
              </li>
            ))}
          </ul>
        </div>
        <div className="drugElementList">
          <ul>
            {drugDays.map((d, idx) => (
              <li key={idx} className="drugElement">
                <Text size="24px">{d}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="healingHr" />
    </>
  );
};
