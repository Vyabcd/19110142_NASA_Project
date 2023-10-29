const launches = new Map();
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: 'Kepler Exporation X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);
function existsLaunchWithId(launchId) {
  return  launchesDatabase.has(launchId,);
}
function getAllLaunches(){
  return Array.from(launches.values());
}

function addNewLaunches(){
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customer: ['Zero to Mastery', 'NASA'],
      flightNumber: latestFlightNumber,

    }), 
    launch);
}
function abortLaunchById(launchId){
  const aborted = launch.delete(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}
module.exports = {
    getAllLaunches,
    addNewLaunches,
    existsLaunchWithId,
    abortLaunchById,

  };
