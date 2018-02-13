import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {grey400} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import {ValidatorForm} from 'react-form-validator-core';
import {TextValidator} from 'react-material-ui-form-validator';

export default class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      formData: {
        email: '',
        name: '',
        telephone: '',
        message: ''
      },
      submitted: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.styles = {
      toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5
      },
      toggleLabel: {
        color: grey400,
        fontWeight: 100
      },
      buttons: {
        marginTop: 30,
        float: 'right'
      },
      saveButton: {
        marginLeft: 5
      }
    };
  }

  onChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  onSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });

    const domain = '@llnnll.com';
    const subject = encodeURIComponent('Website contact from ' + this.state.formData.name);
    const body = encodeURIComponent('You got a message from your website!\n' +
      'Name: ' + this.state.formData.name + '\n' +
      'E-mail: ' + this.state.formData.email + '\n' +
      'Telephone: ' + (this.state.formData.telephone || 'None provided') + '\n' +
      '\nMessage:\n' + this.state.formData.message + '\n');
    const location = 'mailto:charlie' + domain + '?subject=' + subject + '&body=' + body;

    window.open(location);
  }

  render() {
    const { formData, submitted } = this.state;
    return (<PageBase
        title="Contact"
        navigation="Booking / Purchases">
        <div>
          <ValidatorForm
            ref="form"
            onSubmit={this.onSubmit}>
            <div>
              <TextValidator
                hintText="Name"
                ref="name"
                value={formData.name}
                name="name"
                floatingLabelText="Name"
                onChange={this.onChange}
                validators={['required']}
                errorMessages={['This field is required']}
              />
            </div>
            <div>
              <TextValidator
                hintText="E-mail"
                ref="email"
                value={formData.email}
                name="email"
                floatingLabelText="E-mail"
                onChange={this.onChange}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'E-mail is not valid']}
              />
            </div>
            <div>
              <TextValidator
                hintText="Telephone"
                ref="telephone"
                value={formData.telephone}
                onChange={this.onChange}
                name="telephone"
                floatingLabelText="Telephone"
              />
            </div>

            <TextValidator
              hintText="Message"
              ref="message"
              value={formData.message}
              name="message"
              onChange={this.onChange}
              floatingLabelText="Message"
              multiLine
              validators={['required']}
              errorMessages={['This field is required']}
              fullWidth
            />

            <div style={this.styles.buttons}>
              <Link to="/">
                <RaisedButton label="Cancel"/>
              </Link>

              <RaisedButton
                label={
                  (submitted && 'Your message was sent!')
                  || (!submitted && 'Send')
                }
                disabled={submitted}
                style={this.styles.saveButton}
                type="submit"
                primary={true}/>
            </div>
          </ValidatorForm>
        </div>
      </PageBase>);
  }
}
