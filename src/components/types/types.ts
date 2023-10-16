export interface Param {
    id: number;
    name: string;
    type?: ParamType;
}

export enum ParamType {
    string = 'text',
    color = 'color',
    number= 'number'
}

export interface ParamValue {
    paramId: number;
    value: string;
}

export interface Color {
    colorName: string;
}

export interface Model {
    paramValues: ParamValue[];
    colors?: Color[];
}