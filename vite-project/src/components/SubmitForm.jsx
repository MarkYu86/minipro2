import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";

function SubmitForm() {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [openDialog, setOpenDialog] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (number.length < 11) {
      setSubmitResult("Please enter a valid number");
      setOpenDialog(true); 
    } else if (userEmail.indexOf("@") === -1) {
      setSubmitResult("Please enter a valid email address");
      setOpenDialog(true); 
    } else {
      setSubmitResult("We have got you!");
      setOpenDialog(true); 
    }
    setName("");
setUserEmail("");
setNumber("");
setMessage("");
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); 
  };

  return (
    <div className="submitForm componentBox">
      <div className="formRow">
        <label>
          Name:
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Email Address:
          <input
            type="email"
            value={userEmail}
            name="userEmail"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Contact Number:
          <input
            type="text"
            value={number}
            name="number"
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Message:
          <textarea
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Submission Status</DialogTitle>
        <DialogContent>
          <p>{submitResult}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SubmitForm;
