export default class Team {
    constructor(...characters) {
        this.members = new Set([...characters]);
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Нельзя повторно добавить персонаж в команду!');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        // characters.forEach(character => this.members.add(character));
        this.members = new Set([...this.members, ...characters]);
    }

    toArray() {
        return Array.from(this.members);
    }
}