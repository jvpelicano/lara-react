import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddStudent extends Component {
  state = {
    name: "",
    course: "",
    email: "",
    phone: "",
  };

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  saveStudent = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/add-student", this.state);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>
                  Add Student
                  <Link to={"/"} className="btn btn-secondary btn-sm float-end">
                    Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.saveStudent}>
                  <div className="mb-3 form-group">
                    <label>Student Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="mb-3 form-group">
                    <label>Student Course</label>
                    <input
                      className="form-control"
                      type="text"
                      name="course"
                      value={this.state.course}
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="mb-3 form-group">
                    <label>Student Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="mb-3 form-group">
                    <label>Student Phone</label>
                    <input
                      className="form-control"
                      type="text"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="mb-3 form-group">
                    <button type="submit" className="btn btn-success btn-sm">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddStudent;
