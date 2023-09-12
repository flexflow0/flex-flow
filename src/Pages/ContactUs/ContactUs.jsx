import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react-web";
import contactUs from "../../../public/Contact.json"

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_37l9qzf', 'template_tpxsmlj', form.current, '0U470BXDY0_P44gkx')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="border-y-2 py-4 border-purple-800">
      <h2 className="lg:text-6xl text-4xl font-bold text-center text-white">Contact Us</h2>

      <div className="lg:flex lg:h-[450px] lg:px-20 px-12 my-10 gap-10 text-white justify-center items-center">
        <div className="w-full mt-20 h-[500px]">
          <Lottie
            options={{
              animationData: contactUs
            }}
          />

        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-md border-2 border-[#8700f5] rounded-xl">
          <div className="card-body">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="input input-bordered rounded-xl border border-[#8700f5] "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="input input-bordered rounded-xl border border-[#8700f5]"
                />
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="text"
                  id=""
                  placeholder="Write here...."
                  cols="30"
                  rows="5"
                  className="input-bordered rounded-xl border border-[#8700f5] to-black p-3"
                ></textarea>
              </div>
              <div className="form-control">
                <button className=" lg:-right-5 right-5 drop-shadow-md transition-all duration-200 border-2 border-[#830FEA] px-4 text-white sm:px-10 rounded-full text-lg font-bold py-1 mt-4 bg-[#830FEA] hover:bg-purple-950">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
