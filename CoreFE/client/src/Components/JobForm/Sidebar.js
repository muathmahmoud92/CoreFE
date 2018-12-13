import React from 'react';
import { Link } from 'react-router-dom';
import {
  Edit,
  Domain,
  FileCopyOutlined,
  Place,
  Check,
  Search,
  Assignment,
  Contacts,
  CheckCircle,
  CheckCircleOutline
} from '@material-ui/icons/';
import './Sidebar.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.renderStep = this.renderStep.bind(this);
  }

  renderStep(step) {
    if (step) {
      return (
        <CheckCircle style={{color: "rgb(0, 214, 71)", marginLeft: 15}} />
      );
    } else {
      return (
        <CheckCircleOutline style={{color: "rgb(224, 224, 224)", marginLeft: 15}} />
      );
    }
  }

  render() {
    return (
      <div style={styles.main}>
        <div style={styles.container}>
          <Edit style={styles.icon} /><Link className="nav" to="/newjob/1">Title</Link>
          {this.renderStep(this.props.step1)}
        </div>
        <div style={styles.container}>
          <Domain style={styles.icon} /><Link className="nav" to="/newjob/2">Description</Link>
          {this.renderStep(this.props.step2)}
        </div>
        <div style={styles.container}>
          <FileCopyOutlined style={styles.icon} /><Link className="nav" to="/newjob/3">Details</Link>
          {this.renderStep(this.props.step3)}
        </div>
        <div style={styles.container}>
          <Assignment style={styles.icon} /><Link className="nav" to="/newjob/4">Expertise</Link>
          {this.renderStep(this.props.step4)}
        </div>
        <div style={styles.container}>
          <Place style={styles.icon} /><Link className="nav" to="/newjob/5">Location</Link>
          {this.renderStep(this.props.step5)}
        </div>
        <div style={styles.container}>
          <Search style={styles.icon} /><Link className="nav" to="/newjob/6">Visibility</Link>
          {this.renderStep(this.props.step6)}
        </div>
        <div style={styles.container}>
          <Contacts style={styles.icon} /><Link className="nav" to="/newjob/7">Budget</Link>
          {this.renderStep(this.props.step7)}
        </div>
        <div style={styles.container}>
          <Check style={styles.icon} /><Link className="nav" to="/newjob/8">Review</Link>
          {this.renderStep(this.props.step8)}
        </div>
      </div>
    );
  }
};

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15
  },
  container: {
    marginBottom: 10
  },
  icon: {
    marginRight: 12,
    position: "relative",
    top: 2
  }
};
