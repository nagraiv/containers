import {bowman, daemon, magician, swordsman, undead, zombie} from "./App/app";
import Team from "./App/Team/Team";
import ErrorRepository from "./App/ErrorRepository/ErrorRepository";

console.log('Creating a dream team with a magician and a bowman');
const dreamTeam = new Team(magician, bowman);
console.log(dreamTeam.toArray());

console.log('A swordsman join the team: ');
dreamTeam.add(swordsman);
console.log(dreamTeam.toArray());

console.log('Trying to add a swordsman again: ');
try {
    dreamTeam.add(swordsman);
} catch (e) {
    console.error(e.message);
}

console.log('Adding every one to the team: ');
dreamTeam.addAll(bowman, daemon, magician, swordsman, undead, zombie);
console.log(dreamTeam);

console.log('Converting the team to array: ');
console.log(dreamTeam.toArray());

const appErrors = new ErrorRepository();
console.log(appErrors.errorRepository);

appErrors.addError('Something went wrong...');
console.log(appErrors.errorRepository);

console.log(appErrors.translate(7));