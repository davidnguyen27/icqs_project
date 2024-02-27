import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
const BlogRight = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_hwve1ej";
    const templateId = "template_zqe5nec";
    const publicKey = "ZKebbTSFvdQDCGlsj";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "SWP",
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <Item className="container-bodyright">
        <img
          src="https://noithatmanhhe.vn/media/26730/dang-ki-nhan-bao-gia-noi-that-manh-he.png"
          className="image-bodyright"
        />
        <div className="form-bodyright">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Họ và tên"
              value={formData.name}
              onChange={handleChange}
            />
            <br />

            <input
              type="text"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <br />
            <br />
            <textarea
              cols="30"
              rows="10"
              placeholder="Mô tả"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <br />
            <br />
            <Button variant="contained" color="success" type="submit">
              {" "}
              Liên hệ tư vấn
            </Button>
          </form>
        </div>
      </Item>
    </>
  );
};

export default BlogRight;
