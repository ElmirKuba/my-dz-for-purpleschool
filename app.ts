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
 * @param {any} userEntity - Объект данных о пользователе
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
