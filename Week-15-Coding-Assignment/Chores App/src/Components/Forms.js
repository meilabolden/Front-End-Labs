import React from "react";
import { Container, Form } from "react-bootstrap";
import TableInfo from "./Table";

export default function Forms() {
    return (

        <Container>
        {/* <!-- Add Chore Form --> */}
        <Form>
            <div className="card bg bg-light">
            <div className="card-body">
                    <div className="row">
                        <img src="Images/choresBanner2.jpg" alt="" />
                        <h2 className="text-center">Family Chores Chart</h2>
                        <div className="col-sm'">
                            <div className="form-group">
                                <label htmlFor="new-name">Name</label>
                                <input type="text" className="form-control" id="new-name" placeholder="Who will complete this chore?"/>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label htmlFor="new-start-date">Start Date</label>
                                <input type="date" className="form-control" id="new-start-date"/>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label htmlFor="new-end-date">Due Date</label>
                                <input type="date" className="form-control" id="new-end-date"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm'">
                            <div className="form-group">
                                <label htmlFor="new-task">Chore</label>
                                <input type="text" className="form-control" id="new-task" placeholder="Chore"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" value="Submit" id="addChore" className="btn btn-outline-info">Add Chore</button>
                    </div>
            </div>
            </div>
        </Form>    

        {/* <!-- Update Form --> */}

        <Form>
            <div className="card bg bg-light">
            <div className="card-body">
                    <div className="row">
                    <h2 className="text-center">Updates to Family Chores Chart</h2>
                        <div className="col-sm'">
                            <div className="form-group">
                                <label htmlFor="updateId">Id</label>
                                <input type="text" className="form-control" id="updateId" placeholder="Enter Id #"/>
                            </div>
                        </div>
                        <div className="col-sm'">
                            <div className="form-group">
                                <label htmlFor="update-name">Name</label>
                                <input type="text" className="form-control" id="update-name" placeholder="Who will complete this chore?"/>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label htmlFor="update-start-date">Start Date</label>
                                <input type="date" className="form-control" id="update-start-date"/>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label htmlFor="update-end-date">Due Date</label>
                                <input type="date" className="form-control" id="update-end-date"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm'">
                            <div className="form-group">
                                <label htmlFor="update-task">Chore</label>
                                <input type="text" className="form-control" id="update-task" placeholder="Chore"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button id="updateChore" className="btn btn-outline-success">Update Chore</button>
                    </div>
            </div>
            </div>
        </Form>
        <TableInfo />
        </Container>
    )
}