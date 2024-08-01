import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import InnerNav from "./InnerNav";
import Models from "./Models";

export const TrainModel = () => {
  const [tableHeader, setHeader] = useState("");
  const [tableBody, setBody] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const handleSubmit = (e) => {
    var formData = new FormData();
    var file = document.getElementById("fileUpload").files[0];
    formData.append("uploadFile", file);
    fetch("http://127.0.0.1:5000/uploadFile", {
      method: "POST",
      body: formData,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        toast.success("File Uploaded Successfully");
        const heads = response[0];
        let headerString = "<tr>";
        for (var col in heads) {
          headerString += <td>${col}</td>;
        }
        setHeader(headerString + "</tr>");

        var bodyString = "";
        for (const entry of response) {
          bodyString += "<tr>";
          for (var value in entry) {
            bodyString += <td>${entry[value]}</td>;
          }
          bodyString += "</tr>";
        }
        setBody(bodyString);
        setShowButtons(true);
      })
      .catch((err) => {
        toast.error("Error Uploading File");
        console.log(err);
      });
  };
  const reqDeleteFile = () => {
    fetch("http://127.0.0.1:5000/deleteFile", {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        toast.success("File Deleted Successfully");
        setHeader("");
        setBody("");
        setShowButtons(false);
      })
      .catch((err) => {
        toast.error("Error Deleting File");
        console.log(err);
      });
  };
  document.cookie={tablehead}
  return (
    <div className="relative bg-black h-auto w-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed blur-sm z-0"
        style={{ backgroundImage: "url('/images/bg1.jpg')" }}
      ></div>
      <div className="relative z-10">
        <InnerNav />
        <br />
        <Models />
        <br />
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="p-5"
        >
          <div
            className="form rounded-lg shadow-lg p-5"
            style={{
              flex: 1,
              marginRight: "20px",
              backgroundColor: "#F4F1FD",
              height: "80vh",
              borderRadius: "20px",
            }}
          >
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              action="javascript:void"
            >
              <div className="mb-3">
                <br />
                <br />
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                  style={{ fontSize: "30px", fontWeight: "bolder" }}
                >
                  <i className="fa-solid fa-microchip"></i> &nbsp;Upload your
                  Dataset file
                </label>
                <br />
                <br />
                <br />
                <br />
                <center>
                  <input
                    type="file"
                    className="form-control"
                    name="uploadFile"
                    id="fileUpload"
                    accept=".csv, .xlsx, .xls"
                    aria-describedby="Upload File"
                    style={{ borderRadius: "20px", width: "40vh" }}
                  />
                </center>
                <div id="emailHelp" className="form-text">
                  Upload your file to train your model &nbsp;
                  <i className="fa-solid fa-file-import"></i>
                </div>
                <br />
                <br />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    borderRadius: "20px",
                    background:
                      "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)",
                    color: "white",
                    borderColor: "#EFF2FF",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <i className="fa-solid fa-cloud-arrow-up"></i> &nbsp; Upload
                  File
                </button>
              </div>
            </form>
            <div className={showButtons ? "block" : "hidden"}>
              <button
                onClick={reqDeleteFile}
                className="btn btn-primary"
                style={{
                  borderRadius: "20px",
                  background:
                    "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)",
                  color: "white",
                  borderColor: "#EFF2FF",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <i class="fa-sharp fa-solid fa-trash"></i> &nbsp; Delete File
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  borderRadius: "20px",
                  background:
                    "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)",
                  color: "white",
                  borderColor: "#EFF2FF",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                Continue &nbsp; <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div
            className="table-primary bg-yellow-200 rounded-lg shadow-lg p-5 "
            style={{
              flex: 1,
              marginLeft: "20px",
              backgroundColor: "#FCD571",
              borderRadius: "20px",
            }}
          >
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <i
                className="fa-solid fa-database"
                style={{ color: "#EC7A6F" }}
              ></i>
              &nbsp;&nbsp;{" "}
              <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}>
                Uploaded Dataset
              </h1>
            </div>
            <br />
            <table
              className="table overflow-scroll"
              style={{
                backgroundColor: "#FCD571",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <thead className="font-bold" dangerouslySetInnerHTML={{ __html: tableHeader }}></thead>
              <tbody dangerouslySetInnerHTML={{ __html: tableBody }}></tbody>
            </table>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default TrainModel;