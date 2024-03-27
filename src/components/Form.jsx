export default function Form({label, htmlFor}) {
  return (
    <div className="w-full justify-center items-center">
      <label htmlFor={htmlFor} className="mt-3 inline-block">{label} :</label>
      <input type="text" id={htmlFor} className="input input-bordered input-primary w-full mt-3" />
    </div>
  );
}
