import React from 'react';
import Button from './Button';
import TextField from '@material-ui/core/TextField';
import {
  SupervisedUserCircle,
  Public,
  MailOutline,
  Lock,
  AccountCircle
} from '@material-ui/icons';

export default class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: "",
      multipleFreelancers: false,
      invitedFreelancers: []
    };
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Visibility</p>
        <p style={{fontSize: 12, position: 'relative', bottom: '20px'}}>Step 6 of 8</p>
        <hr />
        <h3>Project visibility</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<Lock />}
            text="Only IMMIX freelancers"
            text2="Only IMMIX users can find this job"
            callback={this.props.cb1}
            status={this.props.visibility === "immix" ? true : false}
          />
          <Button
            icon={<Public />}
            text="Open to public"
            text2="Anyone can find this job"
            callback={this.props.cb2}
            status={this.props.visibility === "public" ? true : false}
          />
          <Button
            icon={<MailOutline />}
            text="Invite-Only"
            text2="Only freelancers you have invited can find this job"
            callback={this.props.cb3}
            status={this.props.visibility === "inviteOnly" ? true : false}
          />
        </div>
        <h3>How many freelancers do you need for this job?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<AccountCircle />}
            text="One freelancer"
            callback={this.props.cb4}
            status={this.props.freelancers === "one" ? true : false}
          />
          <Button
            icon={<SupervisedUserCircle />}
            text="More than one freelancer"
            callback={this.props.cb5}
            status={this.props.freelancers === "many" ? true : false}
          />
        </div>
        <h3>Do you have freelancers that you want to invite?</h3>
        <TextField
          label="Select freelancers"
          fullWidth="true"
          onChange={this.props.cb6}
        />
      </div>
    );
  }
}
