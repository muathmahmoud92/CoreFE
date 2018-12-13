import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Title</p>
        <p style={{fontSize: 12, position: 'relative', bottom: '20px'}}>Step 1 of 8</p>
        <hr />
        <TextField
          label="Enter the name of your job post"
          placeholder="Here are some good examples - Developer needed for creating a responsive wordpress theme, CAD designer to create a 3D model of a residential building, Need a design for a new company logo"
          helperText="Please limit length of words to less than 50 characters each"
          fullWidth="true"
          multiline="true"
          rows="3"
          onChange={this.props.cb1}
          value={this.props.name}
        />
        <p style={{fontSize: 25}}>Job Category</p>
        <NativeSelect
          value={this.props.category}
          onChange={this.props.cb2}
          input={<Input name="category" />}
        >
          <option value="">Select category & subcategory</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </NativeSelect>
      </div>
    );
  }
};
