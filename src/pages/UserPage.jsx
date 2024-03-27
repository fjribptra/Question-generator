import { useState } from "react";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const { question, yesMessage } = useParams();
  const [isClicked, setIsClicked] = useState(false);
//   const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    // const random = Math.floor(Math.random() * 10);
    // setRandomNumber(random);
  };

  function handleClickNoButton() {
    setIsClicked(true);
    generateRandomNumber();
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{question}</h2>
          <p>????</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent" onClick={() => document.getElementById("my_modal_1").showModal()}>
              Yes
            </button>

            <button className={`btn ${isClicked ? "btn-disabled" : ""} btn-secondary`} onClick={handleClickNoButton}>
              No
            </button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <p className="py-4">{yesMessage}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
