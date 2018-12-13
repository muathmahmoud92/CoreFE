import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Sidebar from './Sidebar';
import GettingStarted from './GettingStarted';
import Details from './Details';
import Title from './Title';
import Description from './Description';
import MoreDetails from './MoreDetails';
import Expertise from './Expertise';
import Location from './Location';
import Visibility from './Visibility';
import Budget from './Budget';
import Review from './Review';

export default class JobForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      action: "",
      jobType: "",
      usesWindows: false,
      usesMac: false,
      usesLinux: false,
      paymentAPI: false,
      cloudAPI: false,
      socialMediaAPI: false,
      otherAPI: false,
      appStage: "",
      name: "",
      category: "",
      desc: "",
      files: null,
      projectStatus: "",
      option: "",
      skills: [],
      projectLocation: "",
      freelancerLocation: "",
      visibility: "",
      freelancers: "",
      invitedFreelancers: [],
      paymentType: "",
      experienceWanted: "",
      timeToComplete: "",
      moreThan30hrs: "",
      // This is related to the sidebar, everything above is related to the job form
      reviewStep: false
    };

    // this.handleFileChange = this.handleFileChange.bind(this);
    this.handleActionChange = this.handleActionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleOption = this.handleOption.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.handleFreelancerLocation = this.handleFreelancerLocation.bind(this);
    this.multipleFreelancers = this.multipleFreelancers.bind(this);
    this.singleFreelancer = this.singleFreelancer.bind(this);
    this.addInvite = this.addInvite.bind(this);
    this.removeInvite = this.removeInvite.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleExisting = this.handleExisting.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleRemote = this.handleRemote.bind(this);
    this.handleOnsite = this.handleOnsite.bind(this);
    this.handleWindows = this.handleWindows.bind(this);
    this.handleMac = this.handleMac.bind(this);
    this.handleLinux = this.handleLinux.bind(this);
    this.paymentAPI = this.paymentAPI.bind(this);
    this.cloudAPI = this.cloudAPI.bind(this);
    this.socialMediaAPI = this.socialMediaAPI.bind(this);
    this.otherAPI = this.otherAPI.bind(this);
    this.handleSpecs = this.handleSpecs.bind(this);
    this.handleDesigns = this.handleDesigns.bind(this);
    this.handleConcept = this.handleConcept.bind(this);
    this.handleOneTime = this.handleOneTime.bind(this);
    this.handleOngoing = this.handleOngoing.bind(this);
    this.unsureStatus = this.unsureStatus.bind(this);
    this.handleUSonly = this.handleUSonly.bind(this);
    this.handleWorldwide = this.handleWorldwide.bind(this);
    this.handleImmix = this.handleImmix.bind(this);
    this.handlePublic = this.handlePublic.bind(this);
    this.handleInvOnly = this.handleInvOnly.bind(this);
    this.handleHourly = this.handleHourly.bind(this);
    this.handleFixed = this.handleFixed.bind(this);
    this.handleEntry = this.handleEntry.bind(this);
    this.handleIntermediate = this.handleIntermediate.bind(this);
    this.handleExpert = this.handleExpert.bind(this);
    this.handleShort = this.handleShort.bind(this);
    this.handleMedium = this.handleMedium.bind(this);
    this.handleLong = this.handleLong.bind(this);
    this.lessThan30 = this.lessThan30.bind(this);
    this.moreThan30 = this.moreThan30.bind(this);
    this.unsureOf30 = this.unsureOf30.bind(this);
  }

  handleHourly() {
    this.setState({ paymentType: "hourly" });
  }

  handleFixed() {
    this.setState({ paymentType: "fixed" });
  }

  handleEntry() {
    this.setState({ experienceWanted: "entry" });
  }

  handleIntermediate() {
    this.setState({ experienceWanted: "intermediate" });
  }

  handleExpert() {
    this.setState({ experienceWanted: "expert" });
  }

  handleShort() {
    this.setState({ timeToComplete: "short" });
  }

  handleMedium() {
    this.setState({ timeToComplete: "medium" });
  }

  handleLong() {
    this.setState({ timeToComplete: "long" });
  }

  moreThan30() {
    this.setState({ moreThan30hrs: "yes" });
  }

  lessThan30() {
    this.setState({ moreThan30hrs: "no" });
  }

  unsureOf30() {
    this.setState({ moreThan30hrs: "unsure" });
  }

  handleImmix() {
    this.setState({ visibility: "immix" });
  }

  handlePublic() {
    this.setState({ visibility: "public" });
  }

  handleInvOnly() {
    this.setState({ visibility: "inviteOnly" });
  }

  handleUSonly() {
    this.setState({ projectLocation: "USonly" });
  }

  handleWorldwide() {
    this.setState({ projectLocation: "worldwide" });
  }

  handleOneTime() {
    this.setState({ projectStatus: "oneTime" });
  }

  handleOngoing() {
    this.setState({ projectStatus: "ongoing" });
  }

  unsureStatus() {
    this.setState({ projectStatus: "unsure" });
  }

  handleWindows() {
    this.setState({ usesWindows: !this.state.usesWindows });
  }

  handleMac() {
    this.setState({ usesMac: !this.state.usesMac });
  }

  handleLinux() {
    this.setState({ usesLinux: !this.state.usesLinux });
  }

  handleSpecs() {
    this.setState({ appStage: "specifications" });
  }

  handleDesigns() {
    this.setState({ appStage: "designs" });
  }

  handleConcept() {
    this.setState({ appStage: "concept" });
  }

  paymentAPI() {
    this.setState({ paymentAPI: !this.state.paymentAPI });
  }

  socialMediaAPI() {
    this.setState({ socialMediaAPI: !this.state.socialMediaAPI });
  }

  otherAPI() {
    this.setState({ otherAPI: !this.state.otherAPI });
  }

  cloudAPI() {
    this.setState({ cloudAPI: !this.state.cloudAPI });
  }

  handleRemote() {
    this.setState({ jobType: "remote" });
  }

  handleOnsite() {
    this.setState({ jobType: "onsite" });
  }

  handleNew() {
    this.setState({ type: "new" });
  }

  handleExisting() {
    this.setState({ type: "existing" });
  }

  handlePrevious() {
    this.setState({ type: "previous" });
  }

  handleActionChange(e) {
    this.setState({ action: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleCategoryChange(e) {
    this.setState({ category: e.target.value });
  }

  handleDescChange(e) {
    this.setState({ desc: e.target.value });
  }

  // handleFileChange(e) {
  //
  // }

  handleStatus(e) {
    this.setState({ projectStatus: e.target.value });
  }

  handleOption(e) {
    this.setState({ option: e.target.value });
  }

  addSkill(skill) {
    let temp = this.state.skills;
    temp.push(skill);
    this.setState({ skills: temp });
  }

  removeSkill(skill) {
    let temp = this.state.filter(s => s !== skill);
    this.setState({ skills: temp });
  }

  handleFreelancerLocation(e) {
    this.setState({ freelancerLocation: e.target.value });
  }

  singleFreelancer() {
    this.setState({ freelancers: "one" });
  }

  multipleFreelancers() {
    this.setState({ freelancers: "many" });
  }

  addInvite(e) {
    let temp = this.state.invitedFreelancers;
    temp.push(e.target.value);
    this.setState({ invitedFreelancers: temp });
  }

  removeInvite(e) {
    let temp = this.state.invitedFreelancers.filter(freelancer => freelancer !== e.target.value);
    this.setState({ invitedFreelancers: temp });
  }

  handleReview() {
    this.setState({ reviewStep: true });
  }

  render() {
    return (
      <div style={styles.main}>
        <Sidebar
          step1={this.state.name || this.state.category ? true : false}
          step2={this.state.desc || this.state.files ? true : false}
          step3={this.state.projectStatus || this.state.option ? true : false}
          step4={this.state.skills.length > 0 ? true : false}
          step5={this.state.projectLocation || this.state.freelancerLocation ? true : false}
          step6={this.state.visibility || this.state.invitedFreelancers.length > 0 ? true : false}
          step7={this.state.paymentType ||
            this.state.experienceWanted ||
            this.state.timeToComplete ||
            this.state.moreThan30hrs ? true : false}
          step8={this.state.reviewStep ? true : false}
        />
        <div style={styles.form}>
          <Switch>
            <Route exact path="/newjob" render={() => (
              <div>
                <GettingStarted
                  cb1={this.handleActionChange}
                  cb2={this.handleNew}
                  cb3={this.handleExisting}
                  cb4={this.handlePrevious}
                  type={this.state.type}
                  action={this.state.action}
                />
                <Nav back="/newjob/8" next="/newjob/0" />
              </div>
            )}/>
            <Route exact path="/newjob/0" render={() => (
              <div>
                <Details
                  jobType={this.state.jobType}
                  usesWindows={this.state.usesWindows}
                  usesMac={this.state.usesMac}
                  usesLinux={this.state.usesLinux}
                  paymentAPI={this.state.paymentAPI}
                  cloudAPI={this.state.cloudAPI}
                  socialMediaAPI={this.state.socialMediaAPI}
                  otherAPI={this.state.otherAPI}
                  appStage={this.state.appStage}
                  cb1={this.handleRemote}
                  cb2={this.handleOnsite}
                  cb3={this.handleWindows}
                  cb4={this.handleMac}
                  cb5={this.handleLinux}
                  cb6={this.paymentAPI}
                  cb7={this.cloudAPI}
                  cb8={this.socialMediaAPI}
                  cb9={this.otherAPI}
                  cb10={this.handleSpecs}
                  cb11={this.handleDesigns}
                  cb12={this.handleConcept}
                />
                <Nav back="/newjob" next="/newjob/1" />
              </div>
            )}/>
            <Route exact path="/newjob/1" render={() => (
              <div>
                <Title
                  cb1={this.handleNameChange}
                  cb2={this.handleCategoryChange}
                  name={this.state.name}
                  category={this.state.category}
                />
                <Nav back="/newjob/0" next="/newjob/2" />
              </div>
            )}/>
            <Route exact path="/newjob/2" render={() => (
              <div>
                <Description
                  desc={this.state.desc}
                  files={this.state.files}
                  cb1={this.handleDescChange}
                  cb2={this.handleFileChange}
                />
                <Nav back="/newjob/1" next="/newjob/3" />
              </div>
            )}/>
            <Route exact path="/newjob/3" render={() => (
              <div>
                <MoreDetails
                  projectStatus={this.state.projectStatus}
                  option={this.state.option}
                  cb1={this.handleOption}
                  cb2={this.handleOneTime}
                  cb3={this.handleOngoing}
                  cb4={this.unsureStatus}
                />
                <Nav back="/newjob/2" next="/newjob/4" />
              </div>
            )}/>
            <Route exact path="/newjob/4" render={() => (
              <div>
                <Expertise
                  skills={this.state.skills}
                />
                <Nav back="/newjob/3" next="/newjob/5" />
              </div>
            )}/>
            <Route exact path="/newjob/5" render={() => (
              <div>
                <Location
                  projectLocation={this.state.projectLocation}
                  freelancerLocation={this.state.freelancerLocation}
                  cb1={this.handleUSonly}
                  cb2={this.handleWorldwide}
                  cb3={this.handleFreelancerLocation}
                />
                <Nav back="/newjob/4" next="/newjob/6" />
              </div>
            )}/>
            <Route exact path="/newjob/6" render={() => (
              <div>
                <Visibility
                  visibility={this.state.visibility}
                  freelancers={this.state.freelancers}
                  cb1={this.handleImmix}
                  cb2={this.handlePublic}
                  cb3={this.handleInvOnly}
                  cb4={this.singleFreelancer}
                  cb5={this.multipleFreelancers}
                  cb6={this.addInvite}
                />
                <Nav back="/newjob/5" next="/newjob/7" />
              </div>
            )}/>
            <Route exact path="/newjob/7" render={() => (
              <div>
                <Budget
                  paymentType={this.state.paymentType}
                  experienceWanted={this.state.experienceWanted}
                  timeToComplete={this.state.timeToComplete}
                  moreThan30hrs={this.state.moreThan30hrs}
                  cb1={this.handleHourly}
                  cb2={this.handleFixed}
                  cb3={this.handleEntry}
                  cb4={this.handleIntermediate}
                  cb5={this.handleExpert}
                  cb6={this.handleShort}
                  cb7={this.handleMedium}
                  cb8={this.handleLong}
                  cb9={this.moreThan30}
                  cb10={this.lessThan30}
                  cb11={this.unsureOf30}
                />
                <Nav back="/newjob/6" next="/newjob/8" />
              </div>
            )}/>
            <Route exact path="/newjob/8" render={() => (
              <div>
                <Review
                  callback={this.handleReview}
                />
                <br />
                <Title
                  cb1={this.handleNameChange}
                  cb2={this.handleCategoryChange}
                  name={this.state.name}
                  category={this.state.category}
                />
                <br /><br /><br /><br />
                <Description
                  desc={this.state.desc}
                  files={this.state.files}
                  cb1={this.handleDescChange}
                  cb2={this.handleFileChange}
                />
                <br /><br /><br /><br />
                <MoreDetails
                  projectStatus={this.state.projectStatus}
                  option={this.state.option}
                  cb1={this.handleOption}
                  cb2={this.handleOneTime}
                  cb3={this.handleOngoing}
                  cb4={this.unsureStatus}
                />
                <br /><br /><br /><br />
                <Expertise
                  skills={this.state.skills}
                />
                <br /><br /><br /><br />
                <Location
                  projectLocation={this.state.projectLocation}
                  freelancerLocation={this.state.freelancerLocation}
                  cb1={this.handleUSonly}
                  cb2={this.handleWorldwide}
                  cb3={this.handleFreelancerLocation}
                />
                <br /><br /><br /><br />
                <Visibility
                  visibility={this.state.visibility}
                  freelancers={this.state.freelancers}
                  cb1={this.handleImmix}
                  cb2={this.handlePublic}
                  cb3={this.handleInvOnly}
                  cb4={this.singleFreelancer}
                  cb5={this.multipleFreelancers}
                  cb6={this.addInvite}
                />
                <br /><br /><br /><br />
                <Budget
                  paymentType={this.state.paymentType}
                  experienceWanted={this.state.experienceWanted}
                  timeToComplete={this.state.timeToComplete}
                  moreThan30hrs={this.state.moreThan30hrs}
                  cb1={this.handleHourly}
                  cb2={this.handleFixed}
                  cb3={this.handleEntry}
                  cb4={this.handleIntermediate}
                  cb5={this.handleExpert}
                  cb6={this.handleShort}
                  cb7={this.handleMedium}
                  cb8={this.handleLong}
                  cb9={this.moreThan30}
                  cb10={this.lessThan30}
                  cb11={this.unsureOf30}
                />
                <br /><br /><br /><br /><hr />
                <Nav back="/newjob/7" next="/newjob" />
              </div>
            )}/>
          </Switch>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    display: "flex",
    width: "100%",
    margin: 16,
    backgroundColor: "white",
    padding: 18,
    border: "solid",
    borderWidth: 1,
    borderColor: "rgb(90, 90, 90)"
  },
  form: {
    backgroundColor: "rgb(240, 240, 240)",
    marginTop: 25,
    marginRight: 25,
    marginBottom: 25,
    width: 600,
    padding: 30,
    border: "solid",
    borderRadius: 20,
    flexGrow: 1
  }
}
