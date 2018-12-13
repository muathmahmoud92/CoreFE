import React from 'react';
import Button from './Button';
import TextField from '@material-ui/core/TextField';
import { Place, Public } from '@material-ui/icons/';

export default class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Location</p>
        <p style={{fontSize: 12, position: 'relative', bottom: '20px'}}>Step 5 of 8</p>
        <hr />
        <h3>Freelancer location</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<Place />}
            text="U.S. only"
            text2="Only freelancers in the United States can submit proposals"
            callback={this.props.cb1}
            status={this.props.projectLocation === "USonly" ? true : false}
          />
          <Button
            icon={<Public />}
            text="Worldwide"
            text2="Freelancers in any location can submit proposals"
            callback={this.props.cb2}
            status={this.props.projectLocation === "worldwide" ? true : false}
          />
        </div>
        <h3>Freelancer location (optional)</h3>
        <TextField
          label="Enter states or time zones"
          helperText="These location preferences will be displayed to freelancers, but anyone can submit proposals"
          fullWidth="true"
          value={this.props.freelancerLocation}
          onChange={this.props.cb3}
        />
        <br />
      </div>
    );
  }
}
