import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';

// Account needed on EmailJS.com
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
// import { EarthCanvas } from './canvas';
// import { SectionWrapper } from '../higherOrderComponent/index';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  // console.log(process.env.REACT_APP_SERVICE_ID);

  const handleChange = (element) => {
      const {name,value} = element.target;

      setForm({...form, [name]:value});
  }
  const handleSubmit = (element) => {
    element.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_Service_Id,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: import.meta.env.VITE_My_username,
        from_email: form.email,
        to_email: import.meta.env.VITE_My_Email,
        message: form.message
      },
      import.meta.env.VITE_PUBLIC_KEY
    ).then(()=>{
      setLoading(false);
      toast('😀 Thank You! I will connect as soon as I can.', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }).catch((error) => console.log(error));

    setForm({
      name:"",
      email:"",
      message:""
    },(err)=>{
      setLoading(false);
      console.log(err);
      alert("Something went wrong ...")
    });

  }
  return (
    <>
      {/* div holds form inside  */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* extra large margin top 12 */}
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        {/* motion  */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[1] bg-black-100 p-8 rounded-2xl'
        >
          {/* heading and subheading */}
          <p className={`${styles.sectionSubText}`}>Get In Touch</p>
          <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

          {/* form */}
          <form
            ref={formRef}
            className='mt-12 flex flex-col gap-8'
          >
            <label htmlFor="" className="flex flex-col">
              <span className="text-white font-medium mb-4 font-bold">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's Your Name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <label htmlFor="" className="flex flex-col">
              <span className="text-white font-medium mb-4 font-bold">Your Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's Your Email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <label htmlFor="" className="flex flex-col">
              <span className="text-white font-medium mb-4 font-bold">Your Message</span>
              <textarea
                type="text"
                name="message"
                rows="7"
                value={form.message}
                onChange={handleChange}
                placeholder="What's Your Message?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              onClick={handleSubmit}
              // padding on x (left right) padding y (top bottom)
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl font-bold'
            >
              {loading ? "Sending...":"Send"}
            </button>
          </form>
        </motion.div>

        {/* Earth model */}
        {/* <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md-h-[550px] h-[350px]'
        >
          <EarthCanvas/>
        </motion.div> */}

      </div>
    </>
  )
}

export default Contact;