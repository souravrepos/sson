import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileAction";

const Experience = ({ experience, deleteExperience }) => {
  return (
    <Fragment>
      <div className="my-2"></div>
      <h2>Experience Details:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {experience.length > 0 ? (
            experience.map((exp) => {
              return (
                <tr>
                  <td>{exp.company}</td>
                  <td>{exp.title}</td>
                  <td>
                    <Moment format="DD.MM.YYYY">{exp.from}</Moment> -{" "}
                    {exp.to ? (
                      <Moment format="DD.MM.YYYY">{exp.to}</Moment>
                    ) : (
                      "Till Date"
                    )}
                  </td>
                  <td>{exp.description}</td>
                  <td>
                    <button
                      className="cross"
                      onClick={() => deleteExperience(exp._id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>You need to add your experience</td>
            </tr>
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
