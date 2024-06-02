export default class ErrorRepository {
    constructor() {
        this.errorRepository = new Map([
            [1, 'Invalid type of character!'],
            [2, 'Invalid name length!'],
            [3, 'Impossible to raise the health level of the deceased character!'],
            [4, 'Damage points must be a positive number!'],
            [5, 'Нельзя повторно добавить персонаж в команду!'],
        ]);
    }

    addError(errorMessage) {
        this.errorRepository.set(this.errorRepository.size + 1, errorMessage);
        return this.errorRepository.size;
    }

    translate(code) {
        return this.errorRepository.get(code) || 'Unknown error';
    }
}