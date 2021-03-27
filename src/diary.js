import React from "react";
import "./styles.css";
import { Block } from "./block";
export const Diary = ({ current, lastIndex, patient, penultimateIndex }) => {
  const hrCounter = (rate) => {
    let numRate = Number(rate);
    let randomInc = Number((Math.random() * 3).toFixed(0));
    numRate = numRate + randomInc;
    return numRate;
  };
  const rrCounter = (rate) => {
    let numRate = Number(rate);
    let randomInc = Number((Math.random() * 5).toFixed(0));
    numRate = numRate + randomInc;
    return numRate;
  };
  return (
    <div id="diary">
      <div className="flexi flexDiary">
        <Block header="Дата:" content={current.date} />
      </div>
      {current.workDay && (
        <div id="workdayBlock">
          <div className="flexi flexDiaryMiddle">
            <Block
              header="Спільний огляд зі зав.відділенням Корицьким В.Г."
              content=""
            />
          </div>
          <div className="flexi flexDiaryMiddle">
            <Block
              header=""
              content={`ЧСС=${hrCounter(patient.heartRate)}/хв; ЧДР=${rrCounter(
                patient.respiratoryRate
              )}/хв; t ̊- N`}
            />
          </div>

          {lastIndex && (
            <div className="diary">
              <Block
                header=""
                content="Загальний стан дитини задовільний. Скарги відсутні. Свідомість ясна, шкірні покриви чисті. Серцева діяльність ритмічна, тони чисті, звучні. Перкуторно ясний легеневий звук. Везикулярне дихання. Живіт при пальпації м’який, безболісний. Печінка не збільшена. Нирки та селезінка не пальпуються. Фізіологічні відправлення не порушені."
              />
            </div>
          )}
          {!lastIndex && (
            <div className="diary">
              <Block
                header=""
                content="Загальний стан дитини близький до задовільного. Свідомість ясна, шкірні покриви чисті. Серцева діяльність ритмічна, тони чисті, звучні. Перкуторно ясний легеневий звук. Везикулярне дихання. Живіт при пальпації м’який, безболісний. Печінка не збільшена. Нирки та селезінка не пальпуються. Фізіологічні відправлення не порушені."
              />
            </div>
          )}

          {lastIndex && (
            <div className="diary">
              <Block header="" content={patient.lastDayContent} />
            </div>
          )}
          {!lastIndex && !penultimateIndex && (
            <div className="diary">
              <Block header="" content={patient.someDayContent} />
            </div>
          )}
          {!lastIndex &&
            penultimateIndex &&
            patient.disease === "abscess" &&
            patient.abscessArea !== "дна порожнини рота" &&
            patient.abscessArea !== "твердого піднебіння" &&
            patient.abscessArea !== "щелепно-язикового жолобка" && (
              <div className="diary">
                <Block
                  header=""
                  content="Обличчя симетричне. Припухлостей немає.
   Знято асептичну пов'язку. Видалено гумовий випускник. Асептична пов'язка з офлокаїновою маззю. Призначення виконуються."
                />
              </div>
            )}
          {!lastIndex && penultimateIndex && patient.disease !== "abscess" && (
            <div className="diary">
              <Block header="" content={patient.someDayContent} />
            </div>
          )}
          {!lastIndex &&
            penultimateIndex &&
            (patient.abscessArea === "щелепно-язикового жолобка" ||
              patient.abscessArea === "твердого піднебіння" ||
              patient.abscessArea === "дна порожнини рота") && (
              <div className="diary">
                <Block header="" content={patient.someDayContent} />
              </div>
            )}
          <div className="flexEnd">
            <div className="lastLine">
              {" "}
              <Block header="" content={patient.doctor} />{" "}
            </div>
          </div>
        </div>
      )}
      {!current.workDay && (
        <div className="flexi">
          <Block
            header=""
            content="Вихідний день. Дитина перебуває під наглядом чергового медичного персоналу."
          />
        </div>
      )}
    </div>
  );
};
