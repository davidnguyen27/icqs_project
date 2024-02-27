import { Container } from "@mui/material";
import React from "react";

const Step1 = () => {
  return (
    <Container>
      <div className="date-quotation">
        <span>Ngày soạn báo giá:</span>
        <span>28/01/2024</span>
      </div>

      <form action="/action_page.php" className="form-step1">
        <label for="fname">Nhập tên</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label for="lname">Số điện thoại</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />
        <label for="lname">Địa chỉ công trình</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />

        <br />
        <br />
        <input type="submit" value="Submit" className="button-step1" />
      </form>
    </Container>
  );
};

export default Step1;