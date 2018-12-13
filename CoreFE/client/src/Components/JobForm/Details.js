import React from 'react';
import Button from './Button';
import {
  Place,
  Cloud,
  Public,
  Payment,
  DesktopMac,
  DesktopWindows,
  LaptopChromebook,
  People,
  MoreHoriz,
  WbIncandescentOutlined,
  Build,
  Assignment
} from '@material-ui/icons/';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Details</p>
        <hr />
        <h3>What types of projects do you have?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<Public />}
            text="Remote"
            callback={this.props.cb1}
            status={this.props.jobType === "remote" ? true : false}
          />
          <Button
            icon={<Place />}
            text="Onsite"
            callback={this.props.cb2}
            status={this.props.jobType === "onsite" ? true : false}
          />
        </div>
        <h3>Which operating system(s) does this application work on?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<DesktopWindows />}
            text="Windows"
            callback={this.props.cb3}
            status={this.props.usesWindows === true ? true : false}
          />
          <Button
            icon={<DesktopMac />}
            text="Mac"
            callback={this.props.cb4}
            status={this.props.usesMac === true ? true : false}
          />
          <Button
            icon={<LaptopChromebook />}
            text="Linux/Unix"
            callback={this.props.cb5}
            status={this.props.usesLinux === true ? true : false}
          />
        </div>
        <h3>Do you need to integrate with any APIs?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<Payment />}
            text="Payment Processor"
            text2="PayPal, Stripe, etc."
            callback={this.props.cb6}
            status={this.props.paymentAPI === true ? true : false}
          />
          <Button
            icon={<Cloud />}
            text="Cloud Storage"
            text2="Dropbox, Box, etc."
            callback={this.props.cb7}
            status={this.props.cloudAPI === true ? true : false}
          />
            <Button
              icon={<People />}
              text="Social Media"
              text2="Facebook, Twitter, etc."
              callback={this.props.cb8}
              status={this.props.socialMediaAPI === true ? true : false}
            />
        </div>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<MoreHoriz />}
            text="Other APIs"
            callback={this.props.cb9}
            status={this.props.otherAPI === true ? true : false}
          />
        </div>
        <h3>What stage is the project in?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<Assignment />}
            text="I have specifications"
            callback={this.props.cb10}
            status={this.props.appStage === "specifications" ? true : false}
          />
          <Button
            icon={<Build />}
            text="I have designs"
            callback={this.props.cb11}
            status={this.props.appStage === "designs" ? true : false}
          />
          <Button
            icon={<WbIncandescentOutlined />}
            text="I just have a concept"
            callback={this.props.cb12}
            status={this.props.appStage === "concept" ? true : false}
          />
        </div>
      </div>
    );
  }
};
