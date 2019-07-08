import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class TimePicker extends React.Component {
  render() {
    return (
      <Form>
          <FormGroup>
            <Label for="event-time">Time (12HR Format)</Label>
            <Input
              
              type="time"
              name="time"
              id="event-time"
              placeholder="time placeholder"
            />
            </FormGroup>
      </Form>
      )
    }
} 




