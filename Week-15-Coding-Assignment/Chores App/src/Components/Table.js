import React from "react";
import { Container, Table } from "react-bootstrap";

export default function TableInfo() {
    return (
        <Container fluid>
            {/* <!-- Chores Table --> */}
            <table id="list" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Chore</th>
                        <th>Created Date</th>
                        <th>Start Date</th>
                        <th>Due Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
        </Container>
    )
}