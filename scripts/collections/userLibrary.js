define(function (require) {
  var Backbone = require('backbone'),
    ls = require('localstorage'),
    BookModel = require('app/models/BookModel'),
    userLibrary;

  userLibrary = Backbone.Collection.extend({
    model: BookModel,
    localStorage: new Backbone.LocalStorage("userBooks")
  });

  return userLibrary;
});