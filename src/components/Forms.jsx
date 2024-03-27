
export default function Forms({ question, yesMessage, setQuestion, setYesMessage, onSubmitForm}) {
 

  return (
    <form className=" flex flex-col justify-center items-center p-5" onSubmit={onSubmitForm}>
      <h3 className="font-bold mb-5 text-3xl">Create Your Question</h3>
      <div className="w-full justify-center items-center">
        <label htmlFor="question" className="mt-3 inline-block">
          Question :
        </label>
        <input type="text" id="question" className="input input-bordered input-primary w-full mt-3" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div className="w-full justify-center items-center">
        <label htmlFor="yes-answer" className="mt-3 inline-block">
          Yes Message :
        </label>
        <input type="text" id="yes-answer" className="input input-bordered input-primary w-full mt-3" value={yesMessage} onChange={(e) => setYesMessage(e.target.value)} />
      </div>
      <button className="btn btn-primary mt-5 w-full">Generate Link</button>
    </form>
  );
}
