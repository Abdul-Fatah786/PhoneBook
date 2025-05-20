import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      <div>
        {isOpen && (
          <>
            <div className="z-50 relative m-auto min-h-[200px] max-w-[80%] bg-white p-4">
              <div className="flex justify-end">
                <AiOutlineClose onClick={onClose} className="text-2xl" />
              </div>
              {children}
            </div>
            <div
              onClick={onClose}
              className="backdrop-blur z-40 h-screen w-screen absolute top-0"
            />
          </>
        )}
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
