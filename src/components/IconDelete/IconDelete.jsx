import styles from "./IconDelete.module.scss";

function IconDelete({ onClick, ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.iconDelete}
      aria-label="Eliminar"
      {...props}
    >
      {/* La "X" heredará el color definido en el CSS module */}X
    </button>
  );
}

export default IconDelete;
