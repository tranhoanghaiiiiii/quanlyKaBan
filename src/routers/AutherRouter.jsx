import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../screens";

function AutherRouter() {
  return (
    <div className="container-fluid">
      <div className="row">
            <div className="col-4 d-lg-block content-center" style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
              <div className="mb-4" >
              <img 
          style={{
            width: 256,
            height:256,
            objectFit:'cover'
          }}
          src="https://firebasestorage.googleapis.com/v0/b/kanban-a80bb.appspot.com/o/KanbanLogo.png?alt=media&token=bf837eb1-60cd-43ca-954f-69aef2e8210d" alt="" 
          />
              </div>
            </div>
        <div className="col-8 content-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/sign-up" element={<SignUp />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default AutherRouter;
