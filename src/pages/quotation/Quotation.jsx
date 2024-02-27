// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Container } from "@mui/material";
// import Header from "../../components/Header/Header";
// import "./Quotation.css";
// import Step1 from "../../components/quotation-step/Step1";
// import Step2 from "../../components/quotation-step/Step2";
// import Step3 from "../../components/quotation-step/Step3";
// import Footer from "../../components/Footer/Footer";

// const Quotation = () => {
//   const steps = ["Điền thông tin", "Chọn mục ưu thích", "Hợp đồng báo giá"];
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState({});

//   const totalSteps = () => {
//     return steps.length;
//   };

//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };

//   const isLastStep = () => {
//     return activeStep === totalSteps() - 1;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const handleNext = () => {
//     const newActiveStep =
//       isLastStep() && !allStepsCompleted()
//         ? steps.findIndex((step, i) => !(i in completed))
//         : activeStep + 1;
//     setActiveStep(newActiveStep);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStep = (step) => () => {
//     setActiveStep(step);
//   };

//   const handleComplete = () => {
//     const newCompleted = completed;
//     newCompleted[activeStep] = true;
//     setCompleted(newCompleted);
//     handleNext();
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//   };

//   return (
//     <>
//       <Header />
//       <Container className="container-quotation">
//         <Box sx={{ width: "100%" }}>
//           <Stepper nonLinear activeStep={activeStep}>
//             {steps.map((label, index) => (
//               <Step key={label} completed={completed[index]}>
//                 <StepButton color="inherit" onClick={handleStep(index)}>
//                   {label}
//                 </StepButton>
//               </Step>
//             ))}
//           </Stepper>
//           <div>
//             {allStepsCompleted() ? (
//               <React.Fragment>
//                 <Typography sx={{ mt: 2, mb: 1 }}>
//                   All steps completed - you&apos;re finished
//                 </Typography>
//                 <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//                   <Box sx={{ flex: "1 1 auto" }} />
//                   <Button onClick={handleReset}>Reset</Button>
//                 </Box>
//               </React.Fragment>
//             ) : (
//               <React.Fragment>
//                 <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
//                   {activeStep === 0 && (
//                     <div>
//                       <Step1 />
//                     </div>
//                   )}
//                   {activeStep === 1 && (
//                     <div>
//                       <Step2 />
//                     </div>
//                   )}
//                   {activeStep === 2 && (
//                     <div>
//                       {/* <PDFDownloadLink document={<Step3 />} fileName="Hợp đồng">
//                         {({ loading }) => {
//                           loading ? (
//                             <Button>Loading document...</Button>
//                           ) : (
//                             <Button>Download</Button>
//                           );
//                         }}
//                       </PDFDownloadLink> */}
//                       {/* <Step3 /> */}
//                     </div>
//                   )}
//                 </Typography>
//                 <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//                   <Button
//                     color="inherit"
//                     disabled={activeStep === 0}
//                     onClick={handleBack}
//                     sx={{ mr: 1 }}
//                   >
//                     Back
//                   </Button>
//                   <Box sx={{ flex: "1 1 auto" }} />
//                   <Button onClick={handleNext} sx={{ mr: 1 }}>
//                     Next
//                   </Button>
//                   {activeStep !== steps.length &&
//                     (completed[activeStep] ? (
//                       <Typography
//                         variant="caption"
//                         sx={{ display: "inline-block" }}
//                       >
//                         Step {activeStep + 1} already completed
//                       </Typography>
//                     ) : (
//                       <Button onClick={handleComplete}>
//                         {completedSteps() === totalSteps() - 1
//                           ? "Finish"
//                           : "Complete Step"}
//                       </Button>
//                     ))}
//                 </Box>
//               </React.Fragment>
//             )}
//           </div>
//         </Box>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default Quotation;

import React from "react";
import Header from "../../components/Header/Header";
import { Container, Grid, Typography } from "@mui/material";
import "./Quotation.css";
function Quotation() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Typography variant="h5" gutterBottom>
            Báo giá theo yêu cầu
          </Typography>
        </div>
        <div className="form-quotaion">
          <div>
            <label className="label-title">NỘI DUNG</label>
            <br />
            <input type="text" className="w-100 input-style" />
          </div>
          <div className="form-information">
            <div className="row">
              <label className="label-title">NỘI DUNG</label>
              <br />
              <input type="text" className="input-style" />
            </div>
            <div className="row">
              <label className="label-title">NỘI DUNG</label>
              <br />
              <input type="text" className="input-style" />
            </div>
            <div className="row">
              <label className="label-title">NỘI DUNG</label>
              <br />
              <input type="text" className="input-style" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Quotation;
