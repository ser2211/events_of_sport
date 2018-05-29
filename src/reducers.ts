import { TypesOfSports, IEventOfSport } from './classes';

export interface IEventsOfSports{
    [id: string]: IEventOfSport
}

export var listOfEvents = function(state: IEventsOfSports, action) {
    console.log('state', state, 'action', action);
    return state;
}