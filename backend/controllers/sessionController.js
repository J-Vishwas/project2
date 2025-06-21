const Session = require("../models/session");
const Question = require("../models/Question");

// @desc Create a new session and linked questions
// @route POST /api/sessions/create
// @access Private
exports.createSession = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc Get all sessions for the logged-in user
// @route GET /api/sessions/my-sessions
// @access Private
exports.getMySessions = async (req, res) => {
     try {
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc Get a session by ID with populated questions
// @route GET /api/sessions/:id
// @access Private
exports.getSessionById = async (req, res) => {
     try {
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc Delete a session and its questions
// @route DELETE /api/sessions/:id
// @access Private
exports.deleteSession = async (req, res) => { 
    try {
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }};