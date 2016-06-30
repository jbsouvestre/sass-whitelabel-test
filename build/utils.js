function decamelize(str) {
    return str.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
}

export { decamelize };

export default { decamelize };