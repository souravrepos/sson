import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createProfile, getCurrentProfile } from "../../actions/profileAction";
import PropTypes from "prop-types";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
  alerts,
}) => {
  const [formData, setFormData] = useState({
    status: "",
    company: "",
    website: "",
    location: "",
    bio: "",
    githubusername: "",
    skills: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    youtube: "",
  });

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      status: loading || !profile.status ? "" : profile.status,
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      bio: loading || !profile.bio ? "" : profile.bio,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      githubusername:
        loading || !profile.githubusername ? "" : profile.githubusername,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
      youtube: loading || !profile.socials ? "" : profile.social.youtube,
    });
  }, [loading]);

  const {
    status,
    company,
    website,
    location,
    bio,
    githubusername,
    skills,
    facebook,
    instagram,
    twitter,
    linkedin,
    youtube,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("inside submit");
    createProfile(formData, history, true);
    if (alerts) {
      window.scroll(0, 0);
    }
  };

  const [showSocialLink, setShowSocialLink] = useState(false);
  return (
    <Fragment>
      <h1 class="large text-primary">Edit Your Profile</h1>
      <p class="lead">
        <i class="fas fa-user"></i> Let's update your profile
      </p>
      <small style={{ color: "#17a2b8" }}>Required field marked with *</small>

      <form class="form" onSubmit={(e) => onSubmit(e)}>
        <div class="form-group">
          <select name="status" value={status} onChange={(e) => onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small class="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>

        <div class="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={(e) => onChange(e)}
          />
          <small class="form-text">
            Could be your own company or one you work for
          </small>
        </div>

        <div class="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small class="form-text">
            Could be your own or a company website
          </small>
        </div>

        <div class="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small class="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>

        <div class="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small class="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>

        <div class="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small class="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>

        <div class="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small class="form-text">Tell us a little about yourself</small>
        </div>

        <div class="my-2">
          <button
            type="button"
            class="btn btn-light"
            onClick={() => setShowSocialLink(!showSocialLink)}
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {showSocialLink ? (
          <Fragment>
            <div class="form-group social-input">
              <i class="fab fa-twitter fa-2x"></i>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-facebook fa-2x"></i>
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-youtube fa-2x"></i>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-linkedin fa-2x"></i>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div class="form-group social-input">
              <i class="fab fa-instagram fa-2x"></i>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        ) : null}
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="/dashboard">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  alerts: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alertReducer,
  profile: state.profileReducer,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
