export default function GeneretedLink({generatedLink}) {
    function handleCopyToClipBoard(e) {
        e.target.previousSibling.select()
        document.execCommand('copy')
    }
    return (
        <div className="flex flex-col justify-center items-center p-5">
            <textarea className="w-full textarea textarea-bordered" value={generatedLink}></textarea>
            <button className="btn mt-5 w-full btn-secondary" onClick={handleCopyToClipBoard}>Copy</button>
        </div>
        )
}