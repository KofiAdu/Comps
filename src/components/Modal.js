import ReactDOM from "react-dom";
import { useEffect } from "react";
function Modal({ onClose, children, actionBar }) {
  //disabling scroll if modal is open
  useEffect(() => {
    //adding the css prop to the body when modal is open
    document.body.classList.add("overflow-hidden");

    //cleanup function to remove css prop when modal is closed
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  //using a portal to correctly display a modal
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,

    //reference to the div created in the index.html
    document.querySelector(".modal-container")
  );
}

export default Modal;
