import { useState } from "react";

const ContactSection = () => {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(""); 

    const handleSubmit = () => {

        const sheetURL = import.meta.env.VITE_GOOGLE_SHEET_URL;

        if (!email.trim() || !phone.trim() || !message.trim()) {
            setError("All fields are required.");

            setTimeout(() => {
                setError("");
            }, 5000);

            return;
        }

        const formData = {
            email,
            phone,
            message
        };

        // console.log("Form submitted:", formData);

        // You can add API call or validation here
        // Example: axios.post("/api/contact", formData)

        fetch(sheetURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData)
        })
        .then((res) => res.text())
        .then((text) => {
            if (text === "Success") {
                setSent(true);
                setEmail("");
                setPhone("");
                setMessage("");
                setError("");  // ✅ Clear error only on success
                setTimeout(() => setSent(false), 3000);
            } else {
                setError("Submission failed. Try again later.");
            }
        })
        .catch(() => {
            setError("Submission error. Please check connection.");
        });



        setEmail("");
        setPhone("");
        setMessage("");
        setError("");
        setSent(true);

        setTimeout(() => setSent(false), 3000);
    };

    return (
        <div className="max-w-5xl mx-auto flex flex-col">
            <div className="w-full mx-auto flex flex-row max-sm:flex-col justify-between border-1 border-dashed rounded-2xl border-zinc-700 p-5">

                <div className="flex-[40%] flex-col">

                    <div className="font-mont font-bold text-[min(7vw,22px)] p-2">Get in Touch</div>
                    <p className="font-mont text-[min(7vw,16px)] p-2">Have an idea or want to collaborate?
                        <span className="font-mont text-[min(7vw,16px)] block">Drop a message and I’ll get back to you very soon.</span>
                    </p>

                </div>

                <div className="flex-[30%] flex flex-col justify-between">
                    {/* Error Message */}
                    {error && (
                        <div className="text-red-500 font-mont text-sm px-2">
                            *{error}
                        </div>
                    )}

                    <input type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" className="font-mont text-[min(7vw,14px)] placeholder-zinc-500 text-white focus:outline-none focus:ring-0 border-1 rounded m-2 pl-2 py-1 border-zinc-700"/> 
                    
                    <input type="tel" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone number" className="font-mont text-[min(7vw,14px)] placeholder-zinc-500 text-white focus:outline-none focus:ring-0 border-1 rounded m-2 pl-2 py-1 border-zinc-700"/> 
                    
                    <textarea type="text" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your Message" className="font-mont text-[min(7vw,14px)] placeholder-zinc-500 h-30 text-white focus:outline-none focus:ring-0 border-1 rounded m-2 pl-2 py-1 border-zinc-700"/> 
                        
                    <button type="submit"
                        onClick={handleSubmit}
                        className={`font-mont text-[min(7vw,14px)] font-bold rounded m-2 pl-2 py-2 transition-all duration-300 ease-in-out transform hover:shadow-xl hover:scale-105
                                    ${sent ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-white text-black hover:bg-zinc-200'}`}>
                            
                            {sent ? "Message Sent" : "Send"}
                    </button>
                
                </div>
            </div>
        </div>
    )
}

export default ContactSection;