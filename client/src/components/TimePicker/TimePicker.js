import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class TimePicker extends React.Component {
  render() {
    return (
      <Form>
          <FormGroup>
            <Label for="exampleTime">Time</Label>
            <Input
              className="w-50"
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
            />
            </FormGroup>
      </Form>
      )
    }
} 




