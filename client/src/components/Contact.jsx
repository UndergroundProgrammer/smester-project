import React from 'react';
const Contact = () => {
    return (  <div>
        <div className="container">
        <div className="row">
            <ol className="col-12 breadcrumb">
                <li className="breadcrumb-item"><a href="./index.html">Home</a></li>
                <li className="breadcrumb-item active">Contact Us</li>
            </ol>
            <div className="col-12">
               <h3>Contact Us</h3>
               <hr></hr>
            </div>
        </div>

        <div className="row row-content">
           <div className="col-12">
              <h3>Location Information</h3>
           </div>
            <div className="col-12 col-sm-4 offset-sm-1">
                   <h5>Our Address</h5>
                    <address style={{fontSize:"100%"}}>
		              121, Clear Water Bay Road<br></br>
		              Clear Water Bay, Kowloon<br></br>
		              HONG KONG<br></br>
		              <i className="fa fa-phone"></i>: +852 1234 5678<br></br>
		              <i className="fa fa-fax"></i>: +852 8765 4321<br></br>
		              <i className="fa fa-envelope"></i>:
                        <a href="mailto:confusion@food.net">confusion@food.net</a>
		           </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
                <h5>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11 offset-sm-1">
                <div className="btn-group" role="group">
                    <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                    <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                    <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                </div>
            </div>
        </div>

        <div className="row row-content">
           <div className="col-12">
              <h3>Send us your Feedback</h3>
           </div>
            <div className="col-12 col-md-9">
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="firstname" className="col-md-2 col-form-label">First Name</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name"></input>
     </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="lastname" className="col-md-2 col-form-label">Last Name</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name"></input>
                                        </div>
                                    </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="telnum" className="col-12 col-md-2 col-form-label">Contact Tel.</label>
                                                            <div className="col-5 col-md-3">
                                                                <input type="tel" className="form-control" id="areacode" name="areacode" placeholder="Area code"></input>
                                                            </div>
                                                            <div className="col-7 col-md-7">
                                                                <input type="tel" className="form-control" id="telnum" name="telnum" placeholder="Tel. number"></input>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="emailid" className="col-md-2 col-form-label">Email</label>
                                                            <div className="col-md-10">
                                                                <input type="email" className="form-control" id="emailid" name="emailid" placeholder="Email"></input>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="feedback" className="col-md-2 col-form-label">Your Feedback</label>
                                                            <div className="col-md-10">
                                                                <textarea className="form-control" id="feedback" name="feedback" rows="12"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="offset-md-2 col-md-10">
                                                                <button type="submit" className="btn btn-primary">Send Feedback</button>
                                                            </div>
                                                        </div>
                                </form>
            </div>
             <div className="col-12 col-md">
            </div>
       </div>

    </div>

    </div>);
}
 
export default Contact;