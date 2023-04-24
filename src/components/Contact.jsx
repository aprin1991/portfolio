import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { toast } from "react-toastify";

const patterns = {
  email: /([\w\.-]+)@([\w-]+)\.([a-z]{2,8})(\.[a-zA-Z]{2,8})?/,
  message: /^\S+$/,
};

function validate(field, regex) {
  if (!regex) return true;

  if (regex.test(field)) {
    return true;
  } else {
    return false;
  }
}

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    const validation = validate(value, patterns[name]);

    setForm({
      ...form,
      [name]: value,
    });
    if (validation) {
      setErrors({
        ...errors,
        [name]: "",
      });
    } else {
      setErrors({
        ...errors,
        [name]: `please input valid ${name.toUpperCase()}`,
      });
    }
  };

  useEffect(() => {
    const { name, email, message } = errors;
    if (name !== "" || email !== "" || message !== "") {
      setDisabledSubmit(true);
    } else {
      setDisabledSubmit(false);
    }
  }, [errors.email, errors.name, errors.message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (name === "" || email === "" || message === "") {
      return false;
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        setDisabledSubmit(true);
        return false;
      }
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          email_id: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        function () {
          setForm({
            name: "",
            email: "",
            message: "",
          });
          toast.success(
            "Thank you. I will get back to you as soon as possible."
          );
        },
        function (error) {
          console.log("FAILED...", error);
          toast.error("Ahh, something went wrong. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors["name"] ? (
              <span className="text-red-600 text-xs mt-2 pl-1">
                {errors["name"]}
              </span>
            ) : null}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your email<span className="text-red-600 ml-0.5">*</span>
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors["email"] ? (
              <span className="text-red-600 text-xs mt-2">
                {errors["email"]}
              </span>
            ) : null}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message<span className="text-red-600 ml-0.5">*</span>
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors["message"] ? (
              <span className="text-red-600 text-xs mt-2">
                {errors["message"]}
              </span>
            ) : null}
          </label>

          <button
            type="submit"
            disabled={disabledSubmit}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
