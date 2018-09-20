
const isObjectEmpty = (value) => {
  if (value === undefined || (typeof value === 'object' && Object.keys(value).length === 0)
  ) return true;
};
export default isObjectEmpty;
