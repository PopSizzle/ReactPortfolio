import React, { useState, useEffect } from "react";

function Contact() {

  const [getName, setName] = useState();
  const [getEmail, setEmail] = useState();
  const [getMessage, setMessage] = useState();

  const writeToFile = (event) =>{
    event.preventDefault();

    let name = getName;
    let email = getEmail;
    let message = getMessage;

    let text = `${name} from ${email} says ${message}`;

    setName('');
    setEmail('');
    setMessage('');
  }

  return(
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <section className="card container col-lg-6">
        <h3 className="card-header">Message me!</h3>
          <figure className="card-body">
            <form onSubmit={writeToFile}>
              <div className="form-group">
                
                <label for="nameInput">Name</label>
                <input className="form-control" id="nameInput" placeholder="Steve Jobs" onChange={e => setName(e.target.value)}></input>
              </div>

              <div className="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input type="email" className="form-control" id="emailInput" placeholder="steve@apple.com" onChange={e => setEmail(e.target.value)}></input>
              </div>
              
              <div className="form-group">
                <label for="messageText">Message</label>
                  <textarea className="form-control" id="messageText" rows="3" onChange={e => setMessage(e.target.value)}></textarea>
              </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </figure>
        
        </section>
    </div>

  )
}

export default Contact;