let array = ['one', 'two', 'three', 'four'];

import Raiders from './users.js';
import RaidersObj from './users.js';

$(document).ready(() => {
  // FormRaid();
  NewRaid();
});

function FormRaid() {
  return Raiders['Raiders'].forEach((item) => {
    $('#item-container').append(`<p> ${item} </p>`);
  });
}

function NewRaid() {
  console.log(Object.keys(RaidersObj['RaidersObj']));
}
