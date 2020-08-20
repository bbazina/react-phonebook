import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import ContactForm from "./ContactForm";
import ContactDetail from "./ContactDetail";

const Contacts = () => {
  var [contactData, setContactData] = useState([]);

  const history = useHistory();

  const contactDetail = (id) => {
    return history.push("/ContactDetail/" + id);
  };

  const post = async (obj) => {
    console.log(obj);
    const data = await fetch("http://localhost:5000/Contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    console.log(data);
    return await data.json();
  };

  const get = async () => {
    const response = await fetch("http://localhost:5000/Contact", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return await data;
  };

  useEffect(() => {
    get().then((data) => setContactData(data));
  }, []);

  const addOrEdit = async (obj) => {
    console.log(obj);
    const obj1 = {
      FirstName: obj.firstName,
      LastName: obj.lastName,
      PhoneNumbers: [{ number: obj.phoneNumber }],
      Emails: [{ emailAddress: obj.email }],
      Tags: [{ name: obj.tags }],
    };
    const data = await post(obj1);
    console.log(data);
  };

  return (
    <Router>
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">Contacts</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <ContactForm addOrEdit={addOrEdit} />
          </div>
          <div className="col-md-7">
            <table className="table table-borderless table-stripped">
              <thead className="thead-light">
                <tr>
                  <th> First Name </th>
                  <th> Last Name </th>
                </tr>
              </thead>
              <tbody>
                {contactData.map((con) => {
                  return (
                    <tr
                      onClick={() => contactDetail(con.contactId)}
                      key={con.contactId}
                    >
                      <td>{con.firstName}</td>
                      <td>{con.lastName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </Router>
  );
};

export default Contacts;
