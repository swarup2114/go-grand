import React from 'react';
import "../stylesComponents/requestForm.css"

const RequestPage = () => {
  return (
    <div className="request-page">
      <div className="input-group">
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" className="input-field" placeholder='Enter Id'/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className="input-field" placeholder='Enter Email'/>
      </div>
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input type='text' id="name" className="input-field" placeholder='Enter Name'/>
      </div>
      <div className="input-group">
        <label htmlFor="reason">Reason:</label>
        <input type='text' id="reason" className="input-field" placeholder='Enter Reason'/>
      </div>
      <div className="button-group">
        <button className="cancel-button">Cancel</button>
        <button className="request-button">Request Access</button>
      </div>
    </div>
  );
}

export default RequestPage;
