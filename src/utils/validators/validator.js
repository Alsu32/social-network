export const required = (value) => {
    return value ? '' : 'Field is requierd';
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength ) return `Max length is ${maxLength} symbols`;
    return undefined;
}