import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey900} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: 'black'
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: 'black',
  }
});


export default themeDefault;
