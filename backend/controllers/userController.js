const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')


// @desc Register new user
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async(req, res) => {
    res.json({message: 'Register User'})
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public

const loginUser = asyncHandler(async(req, res) => {
    res.json({message: 'Login User'})
})

// @desc Get user data
// @route Get /api/users/me
// @access Public

const getMe = asyncHandler(async(req, res) => {
    res.json({message: 'Display user data'})
})


module.exports = {
    registerUser,
    loginUser,
    getMe
}

