let array = ['one', 'two', 'three', 'four'];
import Raiders from './users.js';

import RaidersObj from './users.js';

$(document).ready(() => {
  GenRaid();
});

function GenRaid() {
  // Access object, remove individual items, pass to constructor
  // I want user/rank/image from each, just the string

  const raiders = Object.entries(RaidersObj['RaidersObj']);

  raiders.forEach(([key, value]) => {
    console.log(key);
    console.log(value);

    $('#raiders').append(`
      <div id="raider-card" class="raider-card-wrapper">
        <div class="raider-block">
          <p class="raider-title"> ${value.user} </p>
        </div>
        <img src=${value.classimg} class="raid-img" alt="uwu" />
      </div>
    `);
  });
}

// Unused Click Event
// $('#raiders').on('click', '.raider-card-wrapper', (event) => {
//   $('.raider-card-wrapper').removeClass('lemgth');

//   let target = $(event.target);
//   if (event.target.id === 'raider-card') {
//     target.addClass('lemgth');
//   }
// });

// Afk Code

// let Serrow = new RaiderCard('Serrow', './assets/png/druid.png', 'Officer');

// function RaiderCard(name, img, rank) {
//   this.name = name;
//   this.img = img;
//   this.rank = rank;
// }

// function NewRoster(raider) {
//   $('#raiders').append(`
//     <div class="raider">
//       <h1> ${raider.name} </h1>
//       <h1> ${raider.rank} </h1>
//       <img src=${raider.img} />
//     </div>
//   `);
// }

// function FormRaid() {
//   return Raiders['Raiders'].forEach((item) => {
//     $('#item-container').append(`<p> ${item} </p>`);
//   });
// }

// function NewRaid() {
//   let raids = Object.keys(RaidersObj['RaidersObj']);

//   return raids.forEach((raider) => {
//     $('#item-container').append(`<p> ${raider} </p>`);
//   });
// }

// function Roster() {
//   let raids = Object.keys(RaidersObj['RaidersObj']);

//   return raids.forEach((raider) => {
//     $('#raiders').append(`<p class="raider-card"> ${raider} </p>`);
//   });
// }
