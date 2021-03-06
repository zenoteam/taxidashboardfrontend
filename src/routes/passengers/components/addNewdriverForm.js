/**
 * Add New User Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const AddNewDriverForm = ({ addNewUserDetails, onChangeAddNewUserDetails }) => (
    <Form>
        <FormGroup>
            <Label for="userName">First Name</Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Name"
                value={addNewUserDetails.name}
                onChange={(e) => onChangeAddNewUserDetails('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userName">Last Name</Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Name"
                value={addNewUserDetails.name}
                onChange={(e) => onChangeAddNewUserDetails('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userName">Phone no</Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter phone no"
                value={addNewUserDetails.name}
                onChange={(e) => onChangeAddNewUserDetails('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter Email"
                value={addNewUserDetails.emailAddress}
                onChange={(e) => onChangeAddNewUserDetails('emailAddress', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userName">Residential Address</Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Address"
                value={addNewUserDetails.name}
                onChange={(e) => onChangeAddNewUserDetails('name', e.target.value)}
            />
        </FormGroup>
    </Form>
);

export default AddNewDriverForm;
