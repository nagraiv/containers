import {bowman, daemon, magician, swordsman, undead, zombie} from "./App/app";
import Team from "./App/Team/Team";
import ErrorRepository from "./App/ErrorRepository/ErrorRepository";
import Settings from "./App/Settings/Settings";

console.log('=======TASK_1========');
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

console.log('=======TASK_2========');
const appErrors = new ErrorRepository();
console.log([...appErrors.errorRepository]);

appErrors.addError('Something went wrong...');
console.log(appErrors.errorRepository);

console.log(appErrors.translate(7));

console.log('=======TASK_3========');
const gameSettings = new Settings();
console.log('gameSettings object: ', gameSettings);

gameSettings.setCustomSetting('music', 'chillout');
gameSettings.setCustomSetting('difficulty', 'hard');
console.log('user settings: ', gameSettings.userSettings);

gameSettings.setCustomSetting('music', 'off');
console.log('custom settings: ', gameSettings.settings);

try {
    gameSettings.setCustomSetting('mode', 'some value');
} catch (e) {
    console.error(e.message);
}

try {
    gameSettings.setCustomSetting('music', 'jazz');
} catch (e) {
    console.error(e.message);
}
