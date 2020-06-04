import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { addEducation } from "../../actions/profileAction";

function AddEducation({ addEducation, history, alerts }) {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, setToDateDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitEducation = (e) => {
    e.preventDefault();
    addEducation(formData, history);
    if (alerts) {
      window.scroll(0, 0);
    }
  };

  return (
    <Fragment>
      <section class="container">
        <h1 class="large text-primary">Add Your Education</h1>
        <p class="lead">
          <i class="fas fa-graduation-cap"></i> Add any school, bootcamp, etc
          that you have attended
        </p>
        <p>* required field</p>
        <form class="form" onSubmit={(e) => onSubmitEducation(e)}>
          <div class="form-group">
            <input
              type="text"
              placeholder="* School or Bootcamp"
              name="school"
              value={school}
              required
              onChange={onChange}
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              placeholder="* Degree or Certificate"
              name="degree"
              value={degree}
              required
              onChange={onChange}
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              placeholder="Field Of Study"
              name="fieldofstudy"
              value={fieldofstudy}
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
              Current School or Bootcamp
            </p>
          </div>

          <div class="form-group">
            <h4>To Date</h4>
            <input
              type="date"
              name="to"
              value={to}
              onChange={onChange}
              disabled={toDateDisabled}
            />
          </div>

          <div class="form-group">
            <textarea
              name="description"
              value={description}
              cols="30"
              rows="5"
              placeholder="Program Description"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alertReducer,
});

export default connect(mapStateToProps, { addEducation })(
  withRouter(AddEducation)
);
