import React from 'react';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import { PersonAddOutlined, Description } from '@material-ui/icons/';
import Button from './Button';

export default class GettingStarted extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p style={{fontSize: 25}}>Getting Started</p>
        <hr />
        <div style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-evenly"
        }}>
          <Button
            icon={<PersonAddOutlined />}
            text="Create a new job post"
            callback={this.props.cb2}
            status={this.props.type === "new" ? true : false}
          />
          <Button
            icon={<Description />}
            text="Edit an existing job post"
            callback={this.props.cb3}
            status={this.props.type === "existing" ? true : false}
          />
          <Button
            icon={<Description />}
            text="Reuse a previous job post"
            callback={this.props.cb4}
            status={this.props.type === "previous" ? true : false}
          />
        </div>
        <h3>What would you like to do?</h3>
        <NativeSelect
          value={this.props.action}
          onChange={this.props.cb1}
          input={<Input name="action" />}
        >
          <option value="" />
          <option value="action1">Action 1</option>
          <option value="action2">Action 2</option>
          <option value="action3">Action 3</option>
        </NativeSelect>
      </div>
    );
  }
};
