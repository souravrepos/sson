import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { addExperience } from "../../actions/profileAction";

function AddExpirence({ addExperience, history, alerts }) {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, setToDateDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitExperience = (e) => {
    e.preventDefault();
    addExperience(formData, history);
    if (alerts) {
      window.scroll(0, 0);
    }
  };

  return (
    <Fragment>
      <section class="container">
        <h1 class="large text-primary">Add An Experience</h1>
        <p class="lead">
          <i class="fas fa-code-branch"></i> Add any developer/programming
          positions that you have had in the past
        </p>
        <small>* = required field</small>

        <form class="form" onSubmit={(e) => onSubmitExperience(e)}>
          <div class="form-group">
            <input
              type="text"
              placeholder="* Job Title"
              name="title"
              value={title}
              required
              onChange={onChange}
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              placeholder="* Company"
              name="company"
              value={company}
              required
              onChange={onChange}
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onChange}
            />
          </div>

          <div class="form-group">
            <h4>From Date</h4>
            <input type="date" name="from" value={from} onChange={onChange} />
          </div>

          <div class="form-group">
            <p>
              <input
                type="checkbox"
                name="current"
                value={current}
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  setToDateDisabled(!toDateDisabled);
                }}
              />{" "}
              Current Job
            </p>
          </div>

          <div class="form-group">
            <h4>To Date</h4>
            <input
              type="date"
              name="to"
              value={to}
              disabled={toDateDisabled}
              onChange={onChange}
            />
          </div>

          <div class="form-group">
            <textarea
              name="description"
              value={description}
              cols="30"
              rows="5"
              placeholder="Job Description"
              onChange={onChange}
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary my-1">
            Submit
          </button>

          <Link to="/dashboard">
            <button class="btn btn-light my-1">Back</button>
          </Link>
        </form>
      </section>
    </Fragment>
  );
}

AddExpirence.protoTypes = {
  addExperience: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alertReducer,
});

export default connect(mapStateToProps, { addExperience })(
  withRouter(AddExpirence)
);
