import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [submitted,setSubmitted] = useState(false)

    function submit() {
        setSubmitted(true)
        if (name === "" || email === "" || message === "") {
            setError("Fill all fields")
        } else {
            setError("")
        }
    }

    return (

        <div className="flex flex-col min-h-screen bg-black items-center justify-center gap-20">

            <h1 className="text-white font-bold text-7xl ">GET IN TOUCH</h1>

            <div className="flex flex-col gap-10">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" type="text" className="border-1 rounded border-gray-300  text-white p-2 w-104"></input>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" type="text" className="border-1 rounded border-white  text-white p-2 w-104"></input>
                <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" type="text" className="border-1 rounded border-white text-white p-2 w-104"></input>
                 {submitted && (
          <p className="text-red-600">
            {error ? error : <span className="text-green-600">Success</span>}
          </p>
        )}
                <button onClick={submit} className="px-8 py-3 text-white rounded-lg border-2 bg-transparent hover:bg-gradient-to-r from-blue-500 to-pink-600 cursor-pointer transition duration-1000 ease-out ">
                    Send Message
                </button>



            </div>

        </div>

    )


}


export default Contact;
