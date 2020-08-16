let array = ['one', 'two', 'three', 'four'];
import Raiders from './users.js';

import RaidersObj from '../users.js';

$(document).ready(() => {
  GenPage();
  GenRaid();
});

function GenRaid() {
  // Access object, remove individual items, pass to constructor
  // I want user/rank/image from each, just the string

  const raiders = Object.entries(RaidersObj['RaidersObj']);

  // foreach raider in the second portion, first portion we want the first item
  // then the remaining 3 as a second call
  // initial card needs to be styled differently from the rest?

  // gm pannel
  $('#gm').append(`
    <div class="raider-card-wrapper main-wrapper">
      <div class="raider-block">
        <div class="raider-links">
          <p> icon </p>
          <p> icon </p>
          <p> icon </p>
        </div>
        <p class="raider-title"> ${raiders[0][1].user} </p>
        <div class="raider-social">
          <p> icon </p>
          <p> icon </p>
          <p> icon </p>
        </div>
      </div>
      <img src=${raiders[0][1].classimg} class="raid-img" alt="uwu" />
    </div>
  `);

  // get next 3 items from array, starting from position 1
  for (let i = 1; i < 4; i++) {
    $('#council').append(`
    <div class="raider-card-wrapper sub-wrapper">
      <div class="raider-block">
        <div class="raider-links">
          <p> icon </p>
          <p> icon </p>
          <p> icon </p>
        </div>
        <p class="raider-title"> ${raiders[i][1].user} </p>
        <div class="raider-social">
          <p> icon </p>
          <p> icon </p>
          <p> icon </p>
        </div>
      </div>
      <img src=${raiders[i][1].classimg} class="raid-img" alt="uwu" />
    </div>
  `);
  }

  //   raiders.forEach(([key, value]) => {
  //     console.log(key);
  //     console.log(value);

  //     // first 4 - block 1

  //     // remainder block 2

  //     $('#raiders').append(`
  //       <div class="raider-card-wrapper">
  //         <div class="raider-block">
  //           <p class="raider-title"> ${value.user} </p>
  //         </div>
  //         <img src=${value.classimg} class="raid-img" alt="uwu" />
  //       </div>
  //     `);
  //   });
}

$('#raiders').on('click', '.raider-card-wrapper', (event) => {
  $('.raider-card-wrapper').removeClass('lemgth');

  let target = $(event.target);
  if (event.target.id === 'raider-card') {
    target.addClass('lemgth');
  }
});

// Can I import html directly via javascript for the routing?
// I can! :D
// This has to work when routes change, so it'll load different HTML on click events or route ends?

function GenPage() {
  $('#nav').load('../components/nav.html', () => {
    console.log('Navigation Loaded');
  });

  $('#foot').load('../components/footer.html', () => {
    console.log('Footer Loaded');
  });
}

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
