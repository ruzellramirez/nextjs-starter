import React from "react";
import styles from "./style.module.css";

interface Props {
  children: JSX.Element;
  onRequestClose: () => void;
  shouldShow: boolean;
}

const Modal: React.FunctionComponent<Props> = ({
  children,
  onRequestClose,
  shouldShow,
}: Props) => {
  return shouldShow ? (
    <section className={styles.modal__background} onClick={onRequestClose}>
      <div
        className={styles.modal__body}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="text-end">
          {" "}
          <button
            className="btn btn-sm btn-danger  float-end"
            onClick={onRequestClose}
          >
            X
          </button>
        </div>

        {children}
      </div>
    </section>
  ) : null;
};

export default Modal;
