import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

const Contacts = () => {
  var [contactObjects, setContactObjects] = useState({});

  const post = async (obj) => {
    console.log(obj);
    const data = await fetch({
      method: "POST",
      url: "http://localhost:56701/Contact",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    return await data.json();
  };

  useEffect(() => {}, []);
  const addOrEdit = async (obj) => {
    console.log(obj);
    const obj1 = {
      FirstName: obj.firstName,
      LastName: obj.lastName,
      PhoneNumbers: [{ number: obj.phoneNumber }],
      Emails: [{ emailAddress: obj.email }],
      Tags: [{ name: obj.tag }],
    };
    const data = await post(obj1);
    console.log(data);
  };
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">Contacts</h1>
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
                <th First Name></th>
                <th Last Name></th>
                <th Phone Number></th>
                <th Email></th>
                <th Tag></th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{contactObjects[id].firstName}</td>
                    <td>{contactObjects[id].lastName}</td>
                    <td>{contactObjects[id].phoneNumber}</td>
                    <td>{contactObjects[id].email}</td>
                    <td>{contactObjects[id].tag}</td>
                    <td>
                      <a className="btn btn-text">
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a className="btn btn-danger">
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
