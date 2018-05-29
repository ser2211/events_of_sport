import { IEventOfSport,TypesOfSports, ActionTypes } from './classes';

export function showEvent(item: IEventOfSport) {
    alert(`Событие ${item.event}`);
    return {
        type: ActionTypes.SHOW_EVENT,
        item,
    };
}