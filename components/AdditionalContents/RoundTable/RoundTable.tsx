import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import strtr from "../../../utils/strTr";
import { data } from "./data";
import styles from "./RoundTable.module.css";

export default function RoundTable() {
  const [tableNumber, setTableNumber] = useState(0);
  const { query }: any = useRouter();

  const title = useMemo(() => {
    return strtr(data.messages?.[query.lang].title, [
      data.tables[tableNumber].players1,
      data.tables[tableNumber].players2,
    ]);
  }, [tableNumber, query.lang]);

  const handleTableChange = (e: any) => {
    setTableNumber(Number(e.target.getAttribute("data-index")));
  };

  return (
    <div className={styles.round_table_wrapper}>
      <h2>{title}</h2>
      <div className={styles.table_buttons_wrapper}>
        {data.tables.map(({ players1, players2 }: any, index: number) => {
          return (
            <button
              className={index === tableNumber ? styles.active : ""}
              key={index}
              onClick={handleTableChange}
              data-index={index}
            >
              {players1} - {players2}
            </button>
          );
        })}
      </div>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <tbody>
            {data.tables[tableNumber].rows.map((row: any, index: number) => {
              return (
                <tr key={index}>
                  <td>
                    {data.messages[query.lang].tour} {index + 1}
                  </td>
                  {row.map((field: any, index: number) => {
                    return <td key={index}>{field}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
