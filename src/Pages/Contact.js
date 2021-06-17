import React from "react";

function Contact() {
  return(
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <section className="card container col-lg-6">
        <h5 className="card-header">Contact</h5>
          <figure className="card-body">
            <form>
              <div className="form-group">
                
                <label for="exampleFormControlInput1">Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="John Smith"></input>
              </div>

              <div className="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="example@gmail.com"></input>
              </div>
              
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </figure>
        
        </section>
    </div>

  )
}

export default Contact;