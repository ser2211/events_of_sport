export enum ActionTypes {
    NEW_EVENT  = 'NEW_EVENT',
    DELETE_EVENT   = 'DELETE_EVENT',
    SHOW_EVENT = 'SHOW_EVENT'
}

export enum TypesOfSports {
    Tennis = 'tennis',
    Soccer = 'soccer',
    Running = 'running',
    Swimming = 'swimming',
}

export interface IEventOfSport {
    id: string;
    factor: string;
    key: string;
    type: TypesOfSports;
    event: string;
}