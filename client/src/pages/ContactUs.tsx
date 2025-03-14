import { useState } from "react";
import Container from "../ui/Container";
import "./Contact.css";

const ContactUS = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Function to handle form submission
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "051c365f-2436-421b-8b90-f4c51e8f2e88");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true); // Hide the form
        setStatusMessage("Your message has been sent successfully! ✅");
      } else {
        setIsSubmitted(true); // Hide the form
        setStatusMessage("Failed to send the message. Please try again ❌");
      }
    } catch (error) {
      setIsSubmitted(true);
      setStatusMessage("An error occurred. Please try again later ❌");
    }
  };

  return (
    <Container className="bg-logoBlue">
      <div className="flex flex-col sm:flex-row items-center rounded-2xl bg-[#132e57] px-6 py-16 sm:p-16 gap-8">
        {/* Form Section (Hidden after Submission) */}
        {!isSubmitted ? (
          <section className="Contact w-full sm:w-1/2">
            <form onSubmit={onSubmit}>
              <h2>Contact us</h2>

              <div className="input-box">
                <input
                  type="text"
                  className="feild"
                  placeholder="Enter Your Name"
                  required
                  name="name"
                />
              </div>

              <div className="input-box">
                <input
                  type="email"
                  className="feild"
                  placeholder="Enter Your Email"
                  required
                  name="email"
                />
              </div>

              <div className="input-box">
                <textarea
                  name="message"
                  className="feild mess"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button type="submit">Send message</button>
            </form>
          </section>
        ) : (
          // Notification Message
          <div className="text-center w-full">
            <p className="text-white text-lg font-semibold bg-green-500 px-4 py-2 rounded-lg">
              {statusMessage}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </button>
          </div>
        )}

        {/* Image Section (Hidden on Small Screens) */}
        <div className="hidden sm:block w-1/2">
          <img
            src="/path-to-your-image.jpg"
            alt="Contact Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactUS;
