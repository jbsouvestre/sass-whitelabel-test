import { decamelize } from './utils';

const { keys } = Object;

const sassVariable = (name, value) => `$${decamelize(name)}: ${value};`;

const sassVariables = (varObject) =>  keys(varObject).map(name => sassVariable(name, varObject[name])).join('\n');

export default {
    sassVariable, sassVariables
};