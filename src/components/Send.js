import React from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Btn from './Button';
import Alert from './Alert';
import '../styles/send.css';
import Axios from "axios";

class Send extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        message: "",
      },
      status: {
        alertMessage: '',
        isSuccess: false,
        isError: false,
      }
    }
  }

handleAddMessage = (event) => {
  event.preventDefault();
  this.setState({
    status: {
      alertMessage: '',
      isSuccess: false,
      isError: false,
    },
  });
  Axios.post('http://localhost:4000/app/messages',
  {...this.state.fields, [event.target.name]: event.target.value,})
  .then(response => {
    console.log(response);
    this.setState({
      status: {
        alertMessage: 'Message Sent!',
        isSuccess: true, 
      },
    });
  })
  .catch(error => {
    console.log(error);
    this.setState({
     status: {
       alertMessage: 'Server error. Please try again later.',
       isError: true,
     },
    });
  });
};

handleFieldChange = (event) => {
  this.setState({
    fields: {...this.state.fields, [event.target.name]: event.target.value},
  });
};
  render() {
    return (
      <div className="send">
        <Form className="form" onSubmit={this.handleAddMessage}>
        <FormGroup>
          <div className="class1">
            {this.state.status.isSuccess && <Alert message={this.state.status.alertMessage} success />}
          </div>
          <div className="class2">
            {this.state.status.isError && <Alert message={this.state.status.alertMessage} />}
          </div>
          <Label htmlFor="message">Create Message...</Label>
          <Input type="textarea" name="message" id="message" value={this.state.fields.message} onChange={this.handleFieldChange} />
        </FormGroup>
        <Btn type="submit"/>
      </Form>
      </div>
    );
  }
}

export default Send;