import React from 'react';
import Button from './Button';
import {
  MonetizationOn,
  MonetizationOnOutlined,
  Timelapse,
  AttachMoney,
  LocalAtm,
  DateRange,
  QueryBuilder
} from '@material-ui/icons';

export default class Budget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Budget</p>
        <p style={{fontSize: 12, position: 'relative', bottom: '20px'}}>Step 7 of 8</p>
        <hr />
        <h3>How would you like to pay your freelancer?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<Timelapse />}
            text="Pay by the hour"
            text2="Popular for ongoing projects"
            callback={this.props.cb1}
            status={this.props.paymentType === "hourly" ? true : false}
          />
          <Button
            icon={<LocalAtm />}
            text="Pay a fixed price"
            text2="Popular for one-time projects"
            callback={this.props.cb2}
            status={this.props.paymentType === "fixed" ? true : false}
          />
        </div>
        <h3>What level of experience should your freelancer have?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<AttachMoney />}
            text="Entry"
            text2="Less than $22.00/hr"
            callback={this.props.cb3}
            status={this.props.experienceWanted === "entry" ? true : false}
          />
          <Button
            icon={<MonetizationOnOutlined />}
            text="Intermediate"
            text2="$22.00 - $40.00/hr"
            callback={this.props.cb4}
            status={this.props.experienceWanted === "intermediate" ? true : false}
          />
          <Button
            icon={<MonetizationOn />}
            text="Expert"
            text2="More than $40.00/hr"
            callback={this.props.cb5}
            status={this.props.experienceWanted === "expert" ? true : false}
          />
        </div>
        <h3>How long do you expect this project to last?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<DateRange />}
            text="Less than 1 month"
            callback={this.props.cb6}
            status={this.props.timeToComplete === "short" ? true : false}
          />
          <Button
            icon={<DateRange />}
            text="1 to 3 months"
            callback={this.props.cb7}
            status={this.props.timeToComplete === "medium" ? true : false}
          />
          <Button
            icon={<DateRange />}
            text="More than 3 months"
            callback={this.props.cb8}
            status={this.props.timeToComplete === "long" ? true : false}
          />
        </div>
        <h3>Do you have a time requirement for this project?</h3>
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<QueryBuilder />}
            text="More than 30 hrs/week"
            callback={this.props.cb9}
            status={this.props.moreThan30hrs === "yes" ? true : false}
          />
          <Button
            icon={<QueryBuilder />}
            text="Less than 30 hrs/week"
            callback={this.props.cb10}
            status={this.props.moreThan30hrs === "no" ? true : false}
          />
          <Button
            icon={<QueryBuilder />}
            text={"I don't know yet"}
            callback={this.props.cb11}
            status={this.props.moreThan30hrs === "unsure" ? true : false}
          />
        </div>
      </div>
    );
  }
};
