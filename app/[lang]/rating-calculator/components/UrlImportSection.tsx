import styles from "../rating-calculator.module.css";

interface IProps {
  url: string;
  onUrlChange: (url: string) => void;
  onImport: () => void;
  isFetching: boolean;
  error: string;
  labels: {
    chessResultsUrl: string;
    importFromUrl: string;
    fetching: string;
    urlPlaceholder: string;
  };
}

export default function UrlImportSection({
  url,
  onUrlChange,
  onImport,
  isFetching,
  error,
  labels,
}: IProps) {
  return (
    <div className={styles.urlSection}>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="chess-results-url">
          {labels.chessResultsUrl}
        </label>
        <input
          id="chess-results-url"
          className={`${styles.input} ${styles.urlInput}`}
          type="url"
          placeholder={labels.urlPlaceholder}
          value={url}
          onChange={(e) => onUrlChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onImport()}
          disabled={isFetching}
        />
        <button
          className={styles.fetchButton}
          onClick={onImport}
          type="button"
          disabled={isFetching || !url.trim()}
        >
          {isFetching ? labels.fetching : labels.importFromUrl}
        </button>
      </div>
      {error && <p className={styles.errorMsg}>{error}</p>}
    </div>
  );
}
