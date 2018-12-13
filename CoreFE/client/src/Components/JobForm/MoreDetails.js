import React from 'react';
import Button from './Button';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import {
  AssignmentTurnedIn,
  ImportantDevices,
  YoutubeSearchedFor
} from '@material-ui/icons/';

export default class MoreDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Details</p>
        <p style={{fontSize: 12, position: 'relative', bottom: '20px'}}>Step 3 of 8</p>
        <hr />
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<ImportantDevices />}
            text="One-time project"
            callback={this.props.cb2}
            status={this.props.projectStatus === "oneTime" ? true : false}
          />
          <Button
            icon={<AssignmentTurnedIn />}
            text="Ongoing project"
            callback={this.props.cb3}
            status={this.props.projectStatus === "ongoing" ? true : false}
          />
          <Button
            icon={<YoutubeSearchedFor />}
            text={"I'm not sure"}
            callback={this.props.cb4}
            status={this.props.projectStatus === "unsure" ? true : false}
          />
        </div>
        <p style={{fontSize: 25}}>Additional Options (optional)</p>
        <NativeSelect
          value={this.props.option}
          onChange={this.props.cb1}
          input={<Input name="option" />}
        >
          <option value="" />
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </NativeSelect>
        <p style={{fontSize: 25}}>Cover Letter</p>
        <p>{"If you don't add any screening question,"}</p>
        <p style={{position: "relative", bottom: "15px"}}>{"we'll require a cover letter to allow freelancers to introduce themselves."}</p>
      </div>
    );
  }
};
