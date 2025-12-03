import styles from "./Input.module.scss";
function Input({ className = "", ...props }) {
  return <input {...props} className={`${styles.inputBase} ${className}`} />;
}

export default Input;
