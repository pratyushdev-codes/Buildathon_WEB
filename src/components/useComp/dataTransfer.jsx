import React from 'react';
import InnerNav from './InnerNav';
import Models from './Models';

const DataTransfer = () => {
  return (
    <div className="relative bg-black h-auto w-screen">
      <InnerNav />
      <Models />
      <div
        style={{ display: "flex",justifyContent: "space-between", backgroundImage: "url('/images/bg1.jpg')" }}
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
            overflowY: "auto",
            overflow:"scroll"
          }}
        >
          {/* Left form div Stands here */}


          {/* Clean columns */}
          <br />
          <form>
            <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}><i class="fa-solid fa-broom"></i> Clean Coloumns </h1>
            <br />
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
            <i class="fa-solid fa-arrow-up-from-bracket"></i>&nbsp; Clean Coloumns
            </button>
          </form>
          {/* Remove Duplicates , buttons */}

          <br />
          <form>
            <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}><i class="fa-solid fa-eraser"></i> Remove Duplicates </h1>
            <br />
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
            <i class="fa-solid fa-arrow-up-from-bracket"></i>&nbsp; Remove Duplicates
            </button>
          </form>


          <br />

          {/* Check missing value */}

          <br />
          <form>
            <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}> <i class="fa-solid fa-circle-check"></i> &nbsp;Check Missing Values</h1>
            <br />
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
            <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; Check Missing Values
            </button>
          </form>

          <br />
          {/* Handle non numeric (fill) */}

          <form>
            <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}><i class="fa-solid fa-gears"></i> &nbsp; Handle non numeric (fill)</h1>
            <br />
            <div class="mb-3">
              
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Enter string value' />
            </div>
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
            <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; Handle non numeric (fill)
            </button>
          </form>


          <br />
          {/* Handle non numeric drop  */}

          <form>
            <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}><i class="fa-solid fa-angle-down"></i> &nbsp; Handle non numeric drop </h1>
            <br />
            <div class="mb-3">
              
             <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter String Value"  style={{borderRadius:"20px"}}/>
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
             <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; Handle non numeric drop

            </button>
          </form>
          <br />
          {/* Handle numeric data median  */}
          <form>
            <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}> <i class="fa-solid fa-bars"></i> &nbsp;Handle numeric data median </h1>
            <br />
            <div class="mb-3">
              
             <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter String Value"  style={{borderRadius:"20px"}}/>
            </div>
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
             <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; Handle numeric data median
            </button>
          </form>

          <br />

          {/* Convert to numeric  */}
          <form>
            <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}><i class="fa-solid fa-wand-magic-sparkles"></i> &nbsp;Convert to numeric </h1>

            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
             <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; Covert to numeric

            </button>
          </form>
          <br />

          {/* Normalize date coloumn  */}
          <form> <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}><i class="fa-solid fa-bolt"></i>Normalize date coloumn </h1>
            <div class="mb-3">
              
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter String Value"  style={{borderRadius:"20px"}}/>
            </div>
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
             <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; Normalize date coloumn

            </button></form>


          <br />
          {/* One hot encoding */}
          <form> <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}><i class="fa-solid fa-fire"></i> &nbsp;One hot encoding</h1>
            <div class="mb-3">
              
             <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter String Value"  style={{borderRadius:"20px"}}/>
            </div>
            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
             <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; &nbsp; Normalize date coloumn

            </button></form>

          <br />
          {/* Get  column data types  */}
          <form>
            <h1 style={{ fontSize: "30px", fontWeight: "bolder" }} ><i class="fa-solid fa-folder-open"></i>Get coloumn data types </h1>

            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
             <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp; Get coloumn data types

            </button>
          </form>


          {/* Drop rows without target  */}
          <form>
            <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}><i class="fa-solid fa-layer-group"></i>Drop rows without target </h1>
            <div class="mb-3">
              
             <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter String Value"  style={{borderRadius:"20px"}}/>
            </div>

            <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", background: "radial-gradient(circle, rgba(157,86,224,1) 0%, rgba(253,130,85,1) 100%)", color: "white", borderColor: "#EFF2FF", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", }}>
             <i class="fa-solid fa-arrow-up-from-bracket"></i> &nbsp;Drop rows without target

            </button>
          </form>


        </div>




        {/* Table div Starts Here */}
        <div
          className="table-primary bg-yellow-200 rounded-lg shadow-lg p-5"
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
            className="table"
            style={{
              backgroundColor: "#FCD571",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{ backgroundColor: "yellow" }}>
                  1
                </th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default DataTransfer;
