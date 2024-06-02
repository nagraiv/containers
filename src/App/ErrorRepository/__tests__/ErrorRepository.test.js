import ErrorRepository from "../ErrorRepository";

test.each([
    [1, 'Invalid type of character!'],
    [2, 'Invalid name length!'],
    [3, 'Impossible to raise the health level of the deceased character!'],
    [4, 'Damage points must be a positive number!'],
    [5, 'Нельзя повторно добавить персонаж в команду!'],
    [6, 'Unknown error'],
])(('Тестируем метод translate для репозитория ошибок. Коду %d соответствует ошибка %s'), (code, message) => {
    const testErrorRepository = new ErrorRepository();
    expect(testErrorRepository.translate(code)).toBe(message);
});

test('Тестируем метод addError для репозитория ошибок. Ошибка успешно добавлена', () => {
    const testErrorRepository = new ErrorRepository();
    const code = testErrorRepository.addError('Something went wrong...');
    expect(testErrorRepository.errorRepository.has(code)).toBeTruthy();
});