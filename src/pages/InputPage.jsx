import { useState } from "react";
import Forms from "../components/Forms";
import GeneretedLink from "../components/GeneretedLink";
import NavBar from "../components/NavBar";

export default function Root() {
  const [question, setQuestion] = useState("");
  const [yesMessage, setYesMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  function handleSubmitForm(e) {
    e.preventDefault()
    handleGenerateLink()
}

  function handleGenerateLink() {
    const questionRemovedSpecialCharacters = question.replace(/[^a-zA-Z ]/g, " ")
    const yesMessageRemovedSpecialCharacters= yesMessage.replace(/[^a-zA-Z ]/g, " ")
    const encodedQuestion = encodeURI(questionRemovedSpecialCharacters)
    const encodedYesAnswer = encodeURI(yesMessageRemovedSpecialCharacters)
    setGeneratedLink(`${window.location.href}user/${encodedQuestion}/${encodedYesAnswer}`) 
}

  return (
    <div>
      <NavBar />
      <div className="max-w-[500px] mt-5 min-h-screen mx-auto ">
        <Forms question={question} yesMessage={yesMessage} setQuestion={setQuestion} setYesMessage={setYesMessage} onSubmitForm={handleSubmitForm}/>
        <GeneretedLink generatedLink={generatedLink} />
      </div>
    </div>
  );
}
