const _ = require('lodash');

function sortByLanguage(list) {
  return _.sortBy(list, ['language', 'firstName']);
}

function sortByLanguage(list) {
  return list.sort((a,b)=>a.language==b.language?a.firstName.localeCompare(b.firstName):a.language.localeCompare(b.language))// thank you for checking out the Coding Meetup kata :)
}