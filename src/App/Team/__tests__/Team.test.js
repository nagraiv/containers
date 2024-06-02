import Team from "../Team";
import {
    Bowman,
    Daemon,
    Magician,
    Swordsman,
    Undead,
    Zombie
} from '../../Characters'

describe('Тестируем класс Team и его методы', () => {
    it('конструктор должен создавать новый экземпляр класса со свойством members', () => {
        const myTeam = new Team();
        expect(myTeam).toBeDefined();
        expect(myTeam.members).toBeDefined();
    });

    it('метод add добавляет персонажа в команду', () => {
        const myTeam = new Team();
        const bowman = new Bowman('Лучник');
        myTeam.add(bowman);
        expect(myTeam.members.has(bowman)).toBeTruthy();
    });

    it('метод add выбрасывает ошибку при попытке добавить персонажа дважды', () => {
        const myTeam = new Team();
        const bowman = new Bowman('Лучник');
        myTeam.add(bowman);
        expect(() => myTeam.add(bowman)).toThrow('Нельзя повторно добавить персонаж в команду!');
    });

    it('метод addAll добавляет в команду несколько персонажей за раз', () => {
        const myTeam = new Team();
        myTeam.addAll(new Zombie('Зомби'), new Undead('Нечисть'), new Swordsman('Мечник'));
        expect(myTeam.members.size).toBe(3);
    });

    it('метод addAll не выбрасывает ошибку, если добавлять персонажа повторно', () => {
        const myTeam = new Team();
        const magician = new Magician('Маг');
        const daemon = new Daemon('Демон');
        myTeam.addAll(magician, daemon);
        expect(myTeam.members.size).toBe(2);

        const bowman = new Bowman('Лучник');
        const swordsman = new Swordsman('Мечник');
        myTeam.addAll(bowman, magician, swordsman);
        expect(myTeam.members.size).toBe(4);
    });

    it('метод toArray возвращает массив персонажей', () => {
        const myTeam = new Team(new Zombie('Зомби'), new Undead('Нечисть'), new Swordsman('Мечник'));
        expect(myTeam.toArray()).toEqual([
            new Zombie('Зомби'),
            new Undead('Нечисть'),
            new Swordsman('Мечник')
        ]);
    });
});