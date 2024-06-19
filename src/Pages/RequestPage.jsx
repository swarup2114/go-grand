import React from 'react';
import "../stylesComponents/requestForm.css";
import { IoClose } from "react-icons/io5";


const RequestPage = () => {
  return (
    <div className="container">
    
      <div className="request-page">
    <div className='heading'>
    <h3 >Request Access</h3>
    <IoClose className='close-icon'/>
    </div>
        <div className="input-group data">
          <div>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" className="input-field" placeholder='Enter Id' />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="input-field" placeholder='Enter Email' />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="reason">Role:</label>
          <select id="reason" className="input-field" placeholder="Enter Reason">
            <option value="" disabled selected hidden>Enter Role</option>
            <option value="abc">abc</option>
            <option value="pqr">pqr</option>
            <option value="xyz">xyz</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="name">Reason:</label>
          <input type='text' id="name" className="input-field" placeholder='Enter Reason' />
        </div>
        <div className="button-group">
          <button className="cancel-button">Cancel</button>
          <button className="request-button">Request Access</button>
        </div>
      </div>
    </div>
  );
}

export default RequestPage;
