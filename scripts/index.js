const convert = str => {
  return parseInt(str);
}

const reverse = phrase => {
  if (typeof phrase !== 'string') {
    return false;
  }
  return phrase.split('').reverse().join('');
}

const returnInfo = person => person;

class dci_relatives {
  constructor(role){
    this.role= role;
  }
}

class trainer extends dci_relatives {
  constructor(firstName, lastName){
    super('trainer');
    this.firstName= firstName;
    this.lastName= lastName;
  }
}

class student extends dci_relatives {
  constructor(firstName, lastName){
    super('student');
    this.firstName= firstName;
    this.lastName= lastName;
  }
}

const ali = new student('Ali', 'Pudina');
const kostas = new trainer('Kostas', 'Diakogiannis');



class Player {
  constructor(team) {
    this.team = team;
  }

  getGoalsRatio() {
    return this.goals / this.caps;
  }
}

class HsvPlayer extends Player {
  constructor(position) {
    super('HSV');
    this.position = position;
  }
}

class HSVDefender extends HsvPlayer {
  constructor(firstName, lastName, caps, goals) {
    super('Defender');
    this.firstName = firstName;
    this.lastName = lastName;
    this.caps = caps;
    this.goals = goals;
  }
}

const Kyriakos = new HSVDefender('Kyriakos', 'Papadogus', 90, 9);


module.exports = {
  convert: convert,
  reverse: reverse,
  returnInfo: returnInfo,
  ali: ali,
  kostas: kostas,
  kyriakos: Kyriakos
};
