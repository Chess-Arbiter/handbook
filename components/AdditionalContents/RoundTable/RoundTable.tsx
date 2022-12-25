import { useMemo, useState } from "react";
import strtr from "../../../utils/strTr";
import { data } from "./data";
import styles from "./RoundTable.module.css";

export default function RoundTable({ language = "en" }) {
  const [tableNumber, setTableNumber] = useState(0);
  const title = useMemo(() => {
    return strtr(data.messages?.[language].title, [
      data.tables[tableNumber].players1,
      data.tables[tableNumber].players2,
    ]);
  }, [tableNumber, language]);

  const handleTableChange = (e) =>
    setTableNumber(e.target.getAttribute("data-index"));

  return (
    <div className={styles.round_table_wrapper}>
      <h2>{title}</h2>
      <div className={styles.table_buttons_wrapper}>
        {data.tables.map(({ players1, players2 }, index) => {
          return (
            <button onClick={handleTableChange} data-index={index}>
              {players1} - {players2}
            </button>
          );
        })}
      </div>
      <table className={styles.table}>
        {data.tables[tableNumber].rows.map((row, index) => {
          return (
            <tr>
              <td>Tour {index + 1}</td>
              {row.map((field) => {
                return <td>{field}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
