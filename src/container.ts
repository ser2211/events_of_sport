import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppComponent } from './component';
import { listOfEvents, IEventsOfSports } from './reducers';
import { showEvent } from './action';

function mapStateToProps(state: IEventsOfSports) {
    console.log(state);
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showEvent,
    },  dispatch);
}

export var App = connect(
    mapStateToProps, //ф-ция, добавляет новую информация в props
    mapDispatchToProps,
)(AppComponent);