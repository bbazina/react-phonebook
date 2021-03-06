import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
  const initialFieldValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    tags: "",
  };

  var [values, setValues] = useState(initialFieldValues);
  const [inputList, setInputList] = useState({});

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  /*
  function render() {
    const data = [{ name: "test1" }, { name: "test2" }, { name: "test3" }];
    return (
      <div>
        {data.map(function (d, idx) {
          return (
            <input
              className="form-control"
              placeholder="Phone Number"
              name="phoneNumber"
              value={d.name}
              onChange={handleInputChange}
            />
          );
        })}
      </div>
    );
  } */
  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Phone Number"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleInputChange}
          />
          <a className="btn text-primary">
            <i className="fas fa-plus"></i>
          </a>
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <a className="btn text-primary">
            <i className="fas fa-plus"></i>
          </a>
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-users"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Tag"
            name="tags"
            value={values.tags}
            onChange={handleInputChange}
          />
          <a className="btn text-primary">
            <i className="fas fa-plus"></i>
          </a>
        </div>
      </div>
      <div className="form-control">
        <input
          type="submit"
          value="Add"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
