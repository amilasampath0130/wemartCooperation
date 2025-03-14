import { contactUs } from "../assets";
import Container from "../ui/Container";
import './Contact.css';

const ContactUS = () => {
  // Function to handle form submission
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevents page reload on form submission
  
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "051c365f-2436-421b-8b90-f4c51e8f2e88");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      // Submit the form data to the Web3Forms API
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
  
      const data = await res.json();
      if (data.success) {
        console.log("Success", data);
      } else {
        console.log("Failed", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <Container className="bg-logoBlue">
      <div className="flex flex-col sm:flex-row items-center rounded-2xl bg-[#132e57] px-6 py-16 sm:p-16 gap-8">
        {/* Contact Form */}
        <section className="Contact w-full sm:w-1/2">
          <form onSubmit={onSubmit}>
            <h2>Contact us</h2>

            <div className="input-box">
              <label htmlFor="First Name"></label>
              <input
                type="text"
                className="feild"
                placeholder="Enter Your Name"
                required
                name="name"
              />
            </div>

            <div className="input-box">
              <label htmlFor="Email Address"></label>
              <input
                type="email"
                className="feild"
                placeholder="Enter Your Email"
                required
                name="email"
              />
            </div>

            <div className="input-box">
              <label htmlFor="Your message"></label>
              <textarea
                name="message"
                className="feild mess"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit">Send message</button>
          </form>
        </section>

        {/* Image Section (Hidden on Small Screens) */}
        <div className="hidden sm:block w-1/2">
          <img 
            src={contactUs} 
            alt="Contact Illustration" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactUS;
