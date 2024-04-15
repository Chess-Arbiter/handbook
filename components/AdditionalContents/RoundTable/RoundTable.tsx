"use client";

import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import strtr from "../../../utils/strTr";
import { data } from "./data";
import styles from "./RoundTable.module.css";

export default function RoundTable() {
  const [tableNumber, setTableNumber] = useState(0);
  const { lang }: any = useParams();

  const title: string = useMemo(() => {
    return strtr(data.messages?.[lang].title, [
      String(data.tables[tableNumber].players1),
      String(data.tables[tableNumber].players2),
    ]);
  }, [tableNumber, lang]);

  const handleTableChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const event = e.target as HTMLButtonElement;
    setTableNumber(Number(event.getAttribute("data-index")));
  };

  return (
    <div className={styles.round_table_wrapper}>
      <h2>{title}</h2>
      <div className={styles.table_buttons_wrapper}>
        {data.tables.map(
          (
            { players1, players2 }: { players1: number; players2: number },
            index: number
          ) => {
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
          }
        )}
      </div>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <tbody>
            {data.tables[tableNumber].rows.map(
              (row: string[], index: number) => {
                return (
                  <tr key={index}>
                    <td>
                      {data.messages[lang].tour} {index + 1}
                    </td>
                    {row.map((field: string, index: number) => {
                      return <td key={index}>{field}</td>;
                    })}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
