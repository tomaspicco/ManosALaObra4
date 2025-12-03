import styles from "./Checkbox.module.scss";

function Checkbox({ checked = false, onChange, ...rest }) {
  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      {...rest}
    />
  );
}

export default Checkbox;
