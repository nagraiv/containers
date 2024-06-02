export default class Settings {
    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy'],
        ]);
        this.userSettings = new Map();
        this.possibleSettings = new Map([
            ['theme', new Set(['dark', 'light', 'gray'])],
            ['music', new Set(['trance', 'pop', 'rock', 'chillout', 'off'])],
            ['difficulty', new Set(['easy', 'normal', 'hard', 'nightmare'])],
        ]);
    }
    setCustomSetting(setting, value) {
        // проверяем, что настройку можно кастомизировать
        if (!this.possibleSettings.get(setting)) {
            throw new Error('Неизвестная настройка ' + setting);
        }
        // проверяем, что значение настройки допустимо
        if (!this.possibleSettings.get(setting).has(value)) {
            throw new Error(`Неизвестное значение настройки ${setting} - ${value}`);
        }
        // проверяем, что выбранная настройка отличается от дефолтной
        if (this.defaultSettings.get(setting) !== value) {
            this.userSettings.set(setting, value);
        } else {
            this.userSettings.delete(setting);
        }
    }

    get settings() {
        return new Map([...this.defaultSettings, ...this.userSettings]);
    }
}