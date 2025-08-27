"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// __________________________________________________ 3.3
/** Наш доход */
let revenue = 1_000;
/** Наш к доходу дополнительный бонус */
let bonus = 500;
/** Результат сложения дохода и бонуса */
let res = revenue + bonus;
console.log(res);
// Прочие переменные
let c = 'c';
let d = true;
// __________________________________________________ 3.3
// __________________________________________________ 3.4
/**
 * Функция вернет имя и фамилию вместе
 * @param {string} firstName - Имя
 * @param {string} surName - Фамилия
 * @returns {string} - Имя и фамилия вместе
 */
function getFullName34(firstName, surName) {
    if (typeof firstName !== 'string') {
        throw new Error('[Ошибка]: Метод хочет видеть в качестве имени данные типа строка!');
    }
    if (typeof surName !== 'string') {
        throw new Error('[Ошибка]: Метод хочет видеть в качестве фамилии данные типа строка!');
    }
    return `${firstName} ${surName}`;
}
/**
 * Функция вернет имя и фамилию вместе (стрелочная функция для практики)
 * @param {string} firstName - Имя
 * @param {string} surName - Фамилия
 * @returns {string} - Имя и фамилия вместе
 */
const getFullNameArrow34 = (firstName, surName) => {
    if (typeof firstName !== 'string') {
        throw new Error('[Ошибка]: Метод хочет видеть в качестве имени данные типа строка!');
    }
    if (typeof surName !== 'string') {
        throw new Error('[Ошибка]: Метод хочет видеть в качестве фамилии данные типа строка!');
    }
    return `${firstName} ${surName}`;
};
/**
 * Функция вернет имя и фамилию вместе
 * @param {any} userEntity - Объект данных о пользователе
 * @returns {string} - Имя и фамилия вместе
 */
function getFullName35(userEntity) {
    return `${userEntity.firstName} ${userEntity.surName}`;
}
/** Данные пользователя */
const userData = {
    firstName: 'Elmir',
    surName: 'Kuba',
    city: 'Кувандык',
    age: 27,
};
/** Имя и фамилия пользователя для вывода */
const fullNameUser = getFullName35(userData);
console.log('Данные пользователя выведены:', fullNameUser);
const officeData = {
    officeId: 45,
    isOpened: false,
    contacts: {
        phone: '+79100000000',
        email: 'my@email.ru',
        address: {
            city: 'Москва',
        },
    },
};
console.log('Выводим инфу о офисе:', officeData);
// __________________________________________________ 3.6
// __________________________________________________ 3.7
/** Массив навыков */
const skills = ['Front', 'Back', 'DevOps'];
for (const skill of skills) {
    console.log(skill);
}
const res37 = skills
    .filter((skill) => {
    return skill != 'DevOps';
})
    .map((skill) => {
    return skill.length;
})
    .reduce((a, b) => {
    return a + b;
});
console.log(res37);
// __________________________________________________ 3.7
// __________________________________________________ 3.8
/** Tuple skill */
const skill38 = [42, 'Front'];
console.log(skill38);
/** Tuple skill with booleans */
const skill38WithBoolean = [
    12,
    'FullStack',
    false,
    false,
    true,
];
console.log(skill38WithBoolean);
// __________________________________________________ 3.8
// __________________________________________________ 3.9
const skill39 = [42, 'Front'];
// skill39.push() //error
// __________________________________________________ 3.9
// __________________________________________________ 3.10
/** Коды статусов */
var STATUS_CODE;
(function (STATUS_CODE) {
    /** Успешный платеж */
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 1] = "SUCCESS";
    /** Платеж в процессе проверки или проведения */
    STATUS_CODE[STATUS_CODE["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    /** Платеж отклонен */
    STATUS_CODE[STATUS_CODE["FAILED"] = 3] = "FAILED";
})(STATUS_CODE || (STATUS_CODE = {}));
/** Представим что это ответ от платежной системы */
const resPayment = {
    message: 'Платеж прошел успешно',
    statusCode: STATUS_CODE.SUCCESS,
};
/** Функция по видео обучению, просто логично завершить ее */
function wrapTestStatus(status) {
    return `Статус вашего платежа: ${status}`;
}
wrapTestStatus(STATUS_CODE.FAILED);
// __________________________________________________ 3.10
// __________________________________________________ 3.11
/** Стаутсы вопроса */
var STATUS_FAQ;
(function (STATUS_FAQ) {
    /** Вопрос опубликован */
    STATUS_FAQ["PUBLISHED"] = "published";
    /** Вопрос в черновике */
    STATUS_FAQ["DRAFT"] = "draft";
    /** Вопрос удален */
    STATUS_FAQ["DELETED"] = "deleted";
})(STATUS_FAQ || (STATUS_FAQ = {}));
/**
 * Я умею исп интерфейсы, но так как по лору курса мы еще их не изучали то будет объектными типами:
 * @returns - Показал два варианта описывания возврата
 */
async function getFaqs(req) {
    /** Ответ от REST API */
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req),
    });
    /** Данные от REST API в JSON object */
    const data = await res.json();
    return data;
}
// __________________________________________________ 3.11
//# sourceMappingURL=app.js.map