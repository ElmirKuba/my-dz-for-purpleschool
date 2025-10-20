// __________________________________________________ 3.3
/** Наш доход */
let revenue: number = 1_000;

/** Наш к доходу дополнительный бонус */
let bonus: number = 500;

/** Результат сложения дохода и бонуса */
let res: number = revenue + bonus;

console.log(res);

// Прочие переменные
let c: string = 'c';
let d: boolean = true;
// __________________________________________________ 3.3

// __________________________________________________ 3.4
/**
 * Функция вернет имя и фамилию вместе
 * @param {string} firstName - Имя
 * @param {string} surName - Фамилия
 * @returns {string} - Имя и фамилия вместе
 */
function getFullName34(firstName: string, surName: string): string {
  if (typeof firstName !== 'string') {
    throw new Error(
      '[Ошибка]: Метод хочет видеть в качестве имени данные типа строка!'
    );
  }
  if (typeof surName !== 'string') {
    throw new Error(
      '[Ошибка]: Метод хочет видеть в качестве фамилии данные типа строка!'
    );
  }
  return `${firstName} ${surName}`;
}

/**
 * Функция вернет имя и фамилию вместе (стрелочная функция для практики)
 * @param {string} firstName - Имя
 * @param {string} surName - Фамилия
 * @returns {string} - Имя и фамилия вместе
 */
const getFullNameArrow34 = (firstName: string, surName: string): string => {
  if (typeof firstName !== 'string') {
    throw new Error(
      '[Ошибка]: Метод хочет видеть в качестве имени данные типа строка!'
    );
  }
  if (typeof surName !== 'string') {
    throw new Error(
      '[Ошибка]: Метод хочет видеть в качестве фамилии данные типа строка!'
    );
  }
  return `${firstName} ${surName}`;
};
// __________________________________________________ 3.4

// __________________________________________________ 3.5
/** Описываем пользователя */
interface IUser {
  /** Имя пользователя */
  firstName: string;
  /** Фамилия пользователя */
  surName: string;
  /** Город пользователя */
  city: string;
  /** Возвраст пользователя */
  age: number;
}

/**
 * Функция вернет имя и фамилию вместе
 * @param {IUser} userEntity - Объект данных о пользователе
 * @returns {string} - Имя и фамилия вместе
 */
function getFullName35(userEntity: IUser): string {
  return `${userEntity.firstName} ${userEntity.surName}`;
}

/** Данные пользователя */
const userData: IUser = {
  firstName: 'Elmir',
  surName: 'Kuba',
  city: 'Кувандык',
  age: 27,
};

/** Имя и фамилия пользователя для вывода */
const fullNameUser: string = getFullName35(userData);

console.log('Данные пользователя выведены:', fullNameUser);
// __________________________________________________ 3.5

// __________________________________________________ 3.6
/** Описываем адрес контакта */
interface IContactAddress {
  /** Город контакта */
  city: string;
}
/** Описываем контакт офиса */
interface IOfficeContact {
  /** Телефон контакта */
  phone: string;
  /** E-Mail контакта */
  email: string;
  /** Адрес контакта */
  address: IContactAddress;
}
/** Описываем данные офиса */
interface IOffice {
  /** Идентификатор офиса */
  officeId: number;
  /** Статус работы офиса */
  isOpened: boolean;
  /** Контакт офиса */
  contacts: IOfficeContact;
}

const officeData: IOffice = {
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
const skills: string[] = ['Front', 'Back', 'DevOps'];

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
const skill38: [number, string] = [42, 'Front'];
console.log(skill38);

/** Tuple skill with booleans */
const skill38WithBoolean: [number, string, ...boolean[]] = [
  12,
  'FullStack',
  false,
  false,
  true,
];
console.log(skill38WithBoolean);
// __________________________________________________ 3.8

// __________________________________________________ 3.9
const skill39: readonly [number, string] = [42, 'Front'];

// skill39.push() //error
// __________________________________________________ 3.9

// __________________________________________________ 3.10
/** Коды статусов */
enum STATUS_CODE {
  /** Успешный платеж */
  SUCCESS = 1,
  /** Платеж в процессе проверки или проведения */
  IN_PROGRESS = 2,
  /** Платеж отклонен */
  FAILED = 3,
}
/** Предтавим, что описываем структуру ответа от внешней системы платежей */
interface StatusStruct {
  /** Сообщения описывающее статус платежа */
  message: string;
  /** Код статуса платежа */
  statusCode: STATUS_CODE;
}

/** Представим что это ответ от платежной системы */
const resPayment: StatusStruct = {
  message: 'Платеж прошел успешно',
  statusCode: STATUS_CODE.SUCCESS,
};

/** Функция по видео обучению, просто логично завершить ее */
function wrapTestStatus(status: STATUS_CODE): string {
  return `Статус вашего платежа: ${status}`;
}

wrapTestStatus(STATUS_CODE.FAILED);
// __________________________________________________ 3.10

// __________________________________________________ 3.11
/** Стаутсы вопроса */
enum STATUS_FAQ {
  /** Вопрос опубликован */
  PUBLISHED = 'published',
  /** Вопрос в черновике */
  DRAFT = 'draft',
  /** Вопрос удален */
  DELETED = 'deleted',
}
/**
 * Я умею исп интерфейсы, но так как по лору курса мы еще их не изучали то будет объектными типами:
 * @returns - Показал два варианта описывания возврата
 */
async function getFaqs(req: {
  /** Идентификатор топика */
  topicId: number;
  /** Код статуса запрашиваемого топика */
  status?: STATUS_FAQ;
}): Promise<
  {
    /** Текст вопроса топика */
    question: string;
    /** Ответ топика */
    answer: string;
    /** Массив тегов топика */
    tags: string[];
    /** Кол-во лайков топика */
    likes: number;
    /** Статус топика */
    status: STATUS_FAQ;
  }[]
> {
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

// __________________________________________________ 4.2
/**
 * Логируем идентификатор
 * @param {string | number} id - Аргумент с идентификатором
 * @returns {void} - Нечего возвращать
 */
function logId(id: string | number): void {
  if (typeof id === 'string') {
    console.log(id.toLowerCase());
  } else if (typeof id === 'number') {
    console.log(id.toString());
  } else {
    console.log(id);
  }
}

logId(1);
logId('1');

/**
 * Вывести в лог одну строку или массив строк
 * @param {string | string[]} text - Строка или массив строк
 * @returns {void} - Нечего возвращать
 */
function logArrayOrOneStringText(text: string | string[]): void {
  if (Array.isArray(text)) {
    for (const textItem of text) {
      console.log(textItem);
    }
  } else {
    console.log(text);
  }
}

logArrayOrOneStringText('Текст одной строкой');
logArrayOrOneStringText(['Первая строка', 'Вторая строка']);

/**
 * Логировать объект
 * @param {{a: number} | {b: number}} obj - Объект
 * @returns {void} - Нечего возвращать
 */
function logObject(obj: { a: number } | { b: number }): void {
  if ('a' in obj) {
    console.log(obj.a);
  } else if ('b' in obj) {
    console.log(obj.b);
  }
}

logObject({ a: 1 });
logObject({ b: 2 });
// __________________________________________________ 4.2

// __________________________________________________ 4.3
/**
 * Функция для изучения union
 * @param {'MAMA' | true} unionVariable - тип данных для изучения union
 * @returns {void} - Нечего возвращать
 */
function testFnWithUnionType(unionVariable: 'MAMA' | true): void {
  console.log(unionVariable);
}

testFnWithUnionType('MAMA');
testFnWithUnionType(true);
// __________________________________________________ 4.3

// __________________________________________________ 4.7
/**
 * Функция умножит первое число на второе или первое на само себя если второе не передано
 * @param {number} first - Первое число
 * @param {number=} second - Второе число
 * @returns {number} - Результат умножения первого числа на второе или первого на само себя
 */
function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }

  return first * second;
}

console.log(multiply(5, 4));
console.log(multiply(5));
// __________________________________________________ 4.7

// __________________________________________________ 4.8
/** Данные платежа */
interface PaymentDetails {
  /** Сумма платежа */
  sum: number;
  /** От кого (скорее всего идентификатор аккаунта number) */
  from: number;
  /** Кому (скорее всего идентификатор аккаунта number) */
  to: number;
}

/** Статусы платежа */
enum StatusesPayment {
  /** Платеж прошел успешно */
  Success = 'success',
  /** Платеж завершился с ошибкой */
  Failed = 'failed',
}

/** Данные успешного платежа */
interface SuccessPaymentData extends PaymentDetails {
  /** Идентификатор платежа в базе данных */
  databaseId: number;
}

/** Данные платежа, который завершился с ошибкой */
interface FailedPaymentData {
  /** Текст ошибки */
  errorMessage: string;
  /** Код ошибки */
  errorCode: number;
}

/** Результат выполнения платежа завершился успехом */
interface ResultExecutablePaymentSuccess {
  /** Статус выполнения платежа */
  status: StatusesPayment.Success;
  /** Данные выполнения платежа */
  data: SuccessPaymentData;
}

/** Результат выполнения платежа завершился ошибкой */
interface ResultExecutablePaymentFailed {
  /** Статус выполнения платежа */
  status: StatusesPayment.Failed;
  /** Данные выполнения платежа */
  data: FailedPaymentData;
}

const successPaymentResult: ResultExecutablePaymentSuccess = {
  status: StatusesPayment.Success,
  data: {
    sum: 1000,
    from: 1,
    to: 2,
    databaseId: 1,
  },
};

console.log(successPaymentResult);

const failedPaymentResult: ResultExecutablePaymentFailed = {
  status: StatusesPayment.Failed,
  data: {
    errorMessage: 'Ошибка на стороне сервера',
    errorCode: 1,
  },
};

console.log(failedPaymentResult);
// __________________________________________________ 4.8
