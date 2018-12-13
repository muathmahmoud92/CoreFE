import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Description</p>
        <p style={{fontSize: 12, position: 'relative', bottom: '20px'}}>Step 2 of 8</p>
        <hr />
        <TextField
          label="Description of your job post"
          placeholder="A good description includes: What the deliverable is, Type of freelancer you're looking for, Unique things about the project or team members"
          helperText="Please limit length of words to less than 50 characters each"
          fullWidth="true"
          multiline="true"
          rows="3"
          onChange={this.props.cb1}
          value={this.props.desc}
        />
        <p style={{fontSize: 25}}>Attachments</p>
        <p>import files here</p>
      </div>
    );
  }
};
