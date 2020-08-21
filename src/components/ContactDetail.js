import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ContactDetail = () => {
  let { id } = useParams();

  var [contactDetail, setContactDetail] = useState({});

  useEffect(() => {
    get().then((data) => setContactDetail(data));
  }, []);

  const get = async () => {
    const response = await fetch("http://localhost:5000/Contact/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  };
  console.log(contactDetail);
  if (!contactDetail.emails) {
    return <div></div>;
  }
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact</h1>
        </div>
      </div>
      <div className="col-md-7">
        <table className="table table-borderless table-stripped">
          <thead className="thead-light">
            <tr>
              <th> First Name </th>
              <th> Last Name </th>
              <th> Phone Number</th>
              <th> Email </th>
              <th> Tag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{contactDetail.firstName}</td>
              <td>{contactDetail.lastName}</td>
              <td>
                {contactDetail.phoneNumbers.map((ph) => ph.number).join(", ")}
              </td>
              <td>
                {contactDetail.emails.map((em) => em.emailAddress).join(", ")}
              </td>
              <td>{contactDetail.tags.map((tg) => tg.name).join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactDetail;
