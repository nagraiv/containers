import Settings from "../Settings";

describe('Тестируем класс Settings и его методы', () => {
    it('Объект настроек Settings создаётся корректно', () => {
        const appSettings = new Settings();
        expect(appSettings.defaultSettings).toBeDefined();
        expect(appSettings.userSettings).toBeDefined();
        expect(appSettings.possibleSettings).toBeDefined();
    });

    it('Метод setCustomSetting выбрасывает ошибку при попытке установить настройку не из перечня', () => {
        const gameSettings = new Settings();
        expect(() => gameSettings.setCustomSetting('mode', 'some value')).toThrow('Неизвестная настройка mode');
    });

    it('Метод setCustomSetting выбрасывает ошибку при попытке установить неизвестное значение настройки', () => {
        const gameSettings = new Settings();
        expect(() => gameSettings.setCustomSetting('music', 'jazz')).toThrow('Неизвестное значение настройки music - jazz');
    });

    it('тестируем, что метод setCustomSetting корректно устанавливает свойства', () => {
        const gameSettings = new Settings();
        gameSettings.setCustomSetting('theme', 'gray');
        gameSettings.setCustomSetting('music', 'chillout');
        gameSettings.setCustomSetting('difficulty', 'hard');
        expect(gameSettings.userSettings.get('theme')).toBe('gray');
        expect(gameSettings.userSettings.get('music')).toBe('chillout');
        expect(gameSettings.userSettings.get('difficulty')).toBe('hard');
    });

    it('тестируем, что метод setCustomSetting удаляет пользовательские свойства, совпадающие с дефолтными', () => {
        const gameSettings = new Settings();
        gameSettings.setCustomSetting('theme', 'gray');
        gameSettings.setCustomSetting('music', 'chillout');
        gameSettings.setCustomSetting('difficulty', 'hard');
        expect(gameSettings.userSettings.size).toBe(3);
        gameSettings.setCustomSetting('theme', gameSettings.defaultSettings.get('theme'));
        gameSettings.setCustomSetting('music', gameSettings.defaultSettings.get('music'));
        gameSettings.setCustomSetting('difficulty', gameSettings.defaultSettings.get('difficulty'));
        expect(gameSettings.userSettings.size).toBe(0);
    });

    it('тестируем геттер settings', () => {
        const gameSettings = new Settings();
        gameSettings.setCustomSetting('theme', 'light');
        expect(gameSettings.settings.get('theme')).toBe('light');
        gameSettings.setCustomSetting('music', gameSettings.defaultSettings.get('music'));
        gameSettings.setCustomSetting('difficulty', gameSettings.defaultSettings.get('difficulty'));

        gameSettings.setCustomSetting('music', 'rock');
        gameSettings.setCustomSetting('difficulty', 'nightmare');
        expect(gameSettings.settings.get('theme')).toBe('light');
        expect(gameSettings.settings.get('music')).toBe('rock');
        expect(gameSettings.settings.get('difficulty')).toBe('nightmare');
    });
});
