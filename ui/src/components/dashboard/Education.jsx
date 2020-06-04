import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileAction";

const Education = ({ education, deleteEducation }) => {
  return (
    <Fragment>
      <div className="my-2"></div>
      <h2>Education Details:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {education.length > 0 ? (
            education.map((edu) => {
              console.log(edu);
              return (
                <tr>
                  <td>{edu.school}</td>
                  <td>{edu.degree}</td>
                  <td>
                    <Moment format="DD.MM.YYYY">{edu.from}</Moment> -{" "}
                    {edu.to ? (
                      <Moment format="DD.MM.YYYY">{edu.to}</Moment>
                    ) : (
                      "Till Date"
                    )}
                  </td>
                  <td>{edu.description}</td>
                  <td>
                    <button
                      className="cross"
                      onClick={() => deleteEducation(edu._id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>You need to add your education</td>
            </tr>
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
