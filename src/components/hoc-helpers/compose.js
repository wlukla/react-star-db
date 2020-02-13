const compose = (...funcs) => (component) => (
  funcs.reduceRight((prevRes, fn) => fn(prevRes), component)
);

export default compose;
