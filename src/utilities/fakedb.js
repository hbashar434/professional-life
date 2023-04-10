// use local storage to manage job data
const addToDb = (id) => {
  let appliedJob = getAppliedJob();
  // add quantity
  const quantity = appliedJob[id];
  if (!quantity) {
    appliedJob[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    appliedJob[id] = newQuantity;
  }
  localStorage.setItem("appliedJob-list", JSON.stringify(appliedJob));
};

const removeFromDb = (id) => {
  const appliedJob = getAppliedJob();
  if (id in appliedJob) {
    delete appliedJob[id];
    localStorage.setItem("appliedJob-list", JSON.stringify(appliedJob));
  }
};

const getAppliedJob = () => {
  let appliedJob = {};

  //get the shopping cart from local storage
  const storedJob = localStorage.getItem("appliedJob-list");
  if (storedJob) {
    appliedJob = JSON.parse(storedJob);
  }
  return appliedJob;
};

const deleteAppliedJob = () => {
  localStorage.removeItem("appliedJob-list");
};

export { addToDb, removeFromDb, getAppliedJob, deleteAppliedJob };
