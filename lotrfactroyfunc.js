'use strict';

function createCharacter(charaName, charaNickname, charaRace, charaOrigin, charaAttack, charaDefense){
  return {
    name : charaName,
    nickname: charaNickname,
    race: charaRace,
    origin: charaOrigin,
    attack: charaAttack,
    defense: charaDefense,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
    evaluateFight: function(character){
      let damageCaused = this.attack - character.defense;
      if (damageCaused < 0) damageCaused = 0;
      let damageReceived = character.attack - this.defense;
      if (damageReceived < 0) damageReceived = 0;
      console.log(`Your opponent takes ${damageCaused} and you receive ${damageReceived}`);
    }
  };
}

let gandolf = createCharacter('Gandalf the White','gandalf', 'Wizard', 'Middle Earth',10,6);
let bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'the Shire', 2, 1);


gandolf.describe();
gandolf.evaluateFight(bilbo);
