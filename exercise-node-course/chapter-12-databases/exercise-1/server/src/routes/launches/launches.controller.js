const { getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = {
        mission: req.body.mission,
        rocket: req.body.rocket,
        launchDate: new Date(req.body.launchDate),
        target: req.body.target
    };

    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: "Missing required launch property."
        });
    }

    if(isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: "Invalid launch date."
        });
    }
    
    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchId = +req.params.id;
    if(!existsLaunchWithId(launchId)) {
        return res.status(404).json({
            error: 'Launch not found'
        });
    }

    return res.json(200).json(abortLaunchById(launchId));
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch
};
