import axios from "axios";

export const pdfFile = (userId) => {
  return `https://firebasestorage.googleapis.com/v0/b/swp-quote.appspot.com/o/${userId}?alt=media`;
};

export const downloadPdf = (url, filename) => {
  axios({
    url: url,
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
  });
};
