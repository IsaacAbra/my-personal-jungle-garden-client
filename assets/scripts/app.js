'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.get-sign-up').on('click', authEvents.onGetSignUp)
  $('.get-sign-in').on('click', authEvents.onGetSignIn)
  $('.get-add-plant-collection').on('click', authEvents.onGetAddPlantCollection)
  $('.get-change-password').on('click', authEvents.onGetChangePassword)
  $('.get-edit-collection-name').on('click', authEvents.onGetEditCollectionName)
  $('#add-plant-collection').on('submit', authEvents.onAddPlantCollection)
  $('#show-plant-collections').on('click', authEvents.onShowPlantCollections)
  $('#edit-collection-name').on('submit', authEvents.onEditCollectionName)
})
