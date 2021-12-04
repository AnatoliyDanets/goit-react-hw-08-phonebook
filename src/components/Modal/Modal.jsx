import { useEffect } from "react";
import s from "../Modal/Modal.module.css";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");
export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    console.log("effect");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      console.log("uneffect");
    };
  });
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot
  );
}
// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };
