let questTitle = [
	{
		id_quest: 1,
		name_quest: 'Дата основания сервера Apache?',
	},
	{
		id_quest: 2,
		name_quest: 'Основная особенность сервера Apache',
	},
	{
		id_quest: 3,
		name_quest: 'Дата основания сервера Nginx?',
	},
	{
		id_quest: 4,
		name_quest: 'Основная особенность сервера Nginx',
	},
	{
		id_quest: 5,
		name_quest: 'Основной плюс Nginx по сравнению с Apache',
	},
	{
		id_quest: 6,
		name_quest: 'Дата основания сервера NodeJS?',
	},
	{
		id_quest: 7,
		name_quest: 'Для чего был создан NodeJS',
	},
	{
		id_quest: 8,
		name_quest: 'Особенности NodeJS',
	},
	{
		id_quest: 9,
		name_quest: 'Что такое C++ binding?',
	},
	{
		id_quest: 10,
		name_quest: 'Что необходимо указывать при написании кода на NodeJS и для чего',
	},
	{
		id_quest: 11,
		name_quest: 'Особенности движка V8',
	},
	{
		id_quest: 12,
		name_quest: 'Что находится в данном репозитории: github.com/nvm-sh/nvm',
	},
	{
		id_quest: 13,
		name_quest: 'ОПорядок правильной установки NodeJS',
	},
	{
		id_quest: 14,
		name_quest: 'Что такое REPL?',
	},
	{
		id_quest: 15,
		name_quest: 'Цель написания JS в консоли',
	},
	{
		id_quest: 16,
		name_quest: 'Что означает данный знак: _ (и сделать пример (стр. 2))',
	},
	{
		id_quest: 17,
		name_quest: 'Получить API опр. функции NodeJS в консоли',
	},
	{
		id_quest: 18,
		name_quest: 'Основные команды REPL',
	},
	{
		id_quest: 19,
		name_quest: 'создание и запуск простого скрипта (с примером)',
	},
	{
		id_quest: 20,
		name_quest: 'Способы создания файла',
	},
	{
		id_quest: 21,
		name_quest: 'Способ выход из скрипта, т.е. завершение программы',
	},
	{
		id_quest: 22,
		name_quest: 'Какой модуль используется для хранения секретных данных для передачи по сети?',
	},
	{
		id_quest: 23,
		name_quest: 'Действия для передачи секретных данных при использовании модуля cross-env',
	},
	{
		id_quest: 24,
		name_quest: 'Добавление секретных данных в переменную окружения без исп. модуля cross-env на Linux',
	},
	{
		id_quest: 25,
		name_quest: 'Способ добавления секретных данных в переменную окружения на Linux  с помощью терминала',
	},
	{
		id_quest: 26,
		name_quest: 'Команда вызова аргументов командной строки на NodeJS (с примерами: терминал, файл js)',
	},
	{
		id_quest: 27,
		name_quest: 'Какой путь выводится, если в качестве аргументов командной строки указывается файл',
	},
	{
		id_quest: 28,
		name_quest: 'Встроенный модуль NodeJS для работы с путями',
	},
	{
		id_quest: 29,
		name_quest: 'Пример встроенного модуля для работы с путями',
	},
	{
		id_quest: 30,
		name_quest: 'Встроенный модуль для работы с файловой системой',
	},
	{
		id_quest: 31,
		name_quest: 'Метод для непрервыного отслеживания изменений в файле',
	},
	{
		id_quest: 32,
		name_quest: 'Какие параметры можно задать в fs.watchFile()',
	},
	{
		id_quest: 33,
		name_quest: 'Встроенный модуль с потенциально полезными функциями для разработчика',
	},
	{
		id_quest: 34,
		name_quest: 'Как используется модуль util на NodeJS',
	},
	{
		id_quest: 35,
		name_quest: 'Встроенный модуль для получения сведений об ОС',
	},
	{
		id_quest: 36,
		name_quest: 'Формат получения данных с помощью встроенных модулей NodeJS',
	},
	{
		id_quest: 37,
		name_quest: 'Получить список системных констант с помощью модуля NodeJS',
	},
	{
		id_quest: 38,
		name_quest: 'Получить инфорацию о каждом ядре с помощью модуля NodeJS',
	},
	{
		id_quest: 39,
		name_quest: 'Получить hostname ОС с помощью модуля NodeJS',
	},
	{
		id_quest: 40,
		name_quest: 'Получить тип ОС с помощью модуля NodeJS',
	},
	{
		id_quest: 41,
		name_quest: 'Названия типов ОС, полученных с помощью модуля os.type()',
	},
	{
		id_quest: 42,
		name_quest: 'Получить информацию о пользователе с помощью модуля NodeJS',
	},
	{
		id_quest: 43,
		name_quest: 'Создать простейший сервер с помощью модуля NodeJS',
	},
	{
		id_quest: 44,
		name_quest: 'Что такое простейший сервер',
	},
	{
		id_quest: 45,
		name_quest: 'Пример создания простейшего сервера',
	},
	{
		id_quest: 46,
		name_quest: 'Способы вполнения GET запроса',
	},
	{
		id_quest: 47,
		name_quest: 'Пример GET запроса с помощью модуля http',
	},
	{
		id_quest: 48,
		name_quest: 'Пример запроса с помощью модуля axios',

	},
	{
		id_quest: 49,
		name_quest: 'Парсинг параметров GET запроса с помощью модуля NodeJS',

	},
	{
		id_quest: 50,
		name_quest: 'Нужно ли передавать "?" внутри модуля querystring на NodeJS',

	},
];
let answers = [
	{
		id_answer: 1,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 1990,
			},
			{
				idAnswer: 2,
				answer: 1995,
			},
			{
				idAnswer: 3,
				answer: 2000,
			},
			{
				idAnswer: 4,
				answer: 1993,
			},
		],
		right_answer: 2,
	},
	{
		id_answer: 2,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '1 поток на 1 соединение приходящее на сервер',
			},
			{
				idAnswer: 2,
				answer: '1000 потоков на 1 соединение приходящее на сервер',
			},
			{
				idAnswer: 3,
				answer: '1 поток на 500 соединений приходящих на сервер',
			},
			{
				idAnswer: 4,
				answer: '1000 потоков на 10000 соединений, приходящиъх на сервер',
			},
		],
		right_answer: 1,
	},
	{
		id_answer: 3,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 1990,
			},
			{
				idAnswer: 2,
				answer: 2010,
			},
			{
				idAnswer: 3,
				answer: 2004,
			},
			{
				idAnswer: 4,
				answer: 1998,
			},
		],
		right_answer: 3,
	},
	{
		id_answer: 4,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'Без разницы сколько потоков. Все запросы асинхроны',
			},
			{
				idAnswer: 2,
				answer: '1000 соединений на 1 поток. Возможно с помощью схемы Event Loop. Все запросы асинхроны',
			},
			{
				idAnswer: 3,
				answer: '1 соединений на 1 поток. Возможно с помощью схемы Round Loop. Все запросы асинхроны',
			},
			{
				idAnswer: 4,
				answer: 'Нет правильного ответа',
			},
		],
		right_answer: 2,
	},
	{
		id_answer: 5,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'Используется слишком много памяти',
			},
			{
				idAnswer: 2,
				answer: 'Больше обрабатывается соединений',
			},
			{
				idAnswer: 3,
				answer: 'Небольшое использование памяти',
			},
			{
				idAnswer: 4,
				answer: 'Сервер более новый',
			},
		],
		right_answer: 3,
	},
	{
		id_answer: 6,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 2000,
			},
			{
				idAnswer: 2,
				answer: 2015,
			},
			{
				idAnswer: 3,
				answer: 2009,
			},
			{
				idAnswer: 4,
				answer: 1990,
			},
		],
		right_answer: 3,
	},
	{
		id_answer: 7,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'необлокирующий ввод/вывод',
			},
			{
				idAnswer: 2,
				answer: 'использование М8 для запуска JS',
			},
			{
				idAnswer: 3,
				answer: 'кросплатформенность',
			},
			{
				idAnswer: 4,
				answer: 'все вышеуказанные варианты',
			},
		],
		right_answer: 4,
	},
	{
		id_answer: 8,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'JS, скорость, простота, C++ binding, V8',
			},
			{
				idAnswer: 2,
				answer: 'JS, простота, V8',
			},
			{
				idAnswer: 3,
				answer: 'работа в режиме многозадачности',
			},
			{
				idAnswer: 4,
				answer: 'нет правильного варианта',
			},
		],
		right_answer: 1,
	},
	{
		id_answer: 9,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'связи C++',
			},
			{
				idAnswer: 2,
				answer: 'вызов функции JS, написанной на C++',
			},
			{
				idAnswer: 3,
				answer: 'использование JS внутри C++',
			},
			{
				idAnswer: 4,
				answer: 'совместное использование C++ и C#',
			},
		],
		right_answer: 2,
	},
	{
		id_answer: 10,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'версию NodeJS, чтобы понимать какие фичи использовались',
			},
			{
				idAnswer: 2,
				answer: 'версию npm, чтобы не забыть её',
			},
			{
				idAnswer: 3,
				answer: 'дату основного релиза, чтобы не про...ть дедлайн',
			},
			{
				idAnswer: 4,
				answer: 'адрес папки, в которой находится исполняемый файл NodeJS',
			},
		],
		right_answer: 1,
	},
	{
		id_answer: 11,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'открытый исходный код',
			},
			{
				idAnswer: 2,
				answer: 'разработан Google',
			},
			{
				idAnswer: 3,
				answer: 'запускается на разных ОС',
			},
			{
				idAnswer: 4,
				answer: 'стандарты ECMAScript и WebAssembly',
			},
			{
				idAnswer: 5,
				answer: 'написан на C++',
			},
			{
				idAnswer: 6,
				answer: 'все варианты ответов',
			},
		],
		right_answer: 6,
	},
	{
		id_answer: 12,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'менеджер версий NodeJS, который позволяется менять версии в зависимости от запрошенной версии',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 13,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '- установить nvm; \n - nvm i node или nvm i node_version; \n - nvm use node_version;',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 14,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '- Read Eval Print Loop; \n - возможность писать на JS словами',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 15,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'проверка кода написанного на JS',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 16,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'исп. крайнее значение',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 17,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'Math. + TAB',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 18,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '.help и .exit',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 19,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '- создать файл.js; \n - добавить в него код; \n - запустить скрипт из консоли: \n node filename.js',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 20,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '- nano filename.js - (редактирование в редакторе nano); \n - cat > filename.js - (редактирование в консоли); \n - > filename.js - (создание без редактирования)',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 21,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'process.exit(code)  -> code - специальный код завершения процессов',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 22,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'cross-env',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 23,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '- уст. модуль cross-env; \n - в package.json добавить код в раздел скриптов: "scripts": "cross-env GREET=Hello node ./index.js"; \n - в index.js добавить код: console.log(process.env.GREET); \n - вызвать файл в терминале;',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 24,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'в package.json добавить скрипт без исп. cross-env: "scripts": "cross-env GREET=Hello node ./index.js"',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 25,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '- уст. модуль cross-env; \n - в index.js добавить код: console.log(process.env.GREET); \n - в терминале запустить код: GREET=Hello node index.js;',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 26,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'process.argv',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 27,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'абсолютный',
			}
		],
		right_answer: 1,
	},



	{
		id_answer: 28,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'path',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 29,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'path.resolve("./index.js")',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 30,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'fs',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 31,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'fs.watchFile()',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 32,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '- интервал отслеживания; \n - текущее состояние; \n - предыдущее состояние;',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 33,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'util',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 34,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'совместно со встроенным методом в него',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 35,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'os',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 36,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'console.log(os.command_os)',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 37,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'os.constants',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 38,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'os.cpus()',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 39,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'os.hostname()',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 40,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'os.type()',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 41,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '- Linux на Linux; \n - Darwin на macOs; \n - WindowsNT на windows',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 42,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'os.userInfo()',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 43,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'http',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 44,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '1 сообщение на все запросы',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 45,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'require("http").createServer((req, res) => res.end("Hello world")).listen(3000)',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 46,
		answer_arr: [
			{
				idAnswer: 1,
				answer: '- модуль http; \n - модуль axios',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 47,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'const http = require("http");\nhttp.get("url", (response) => {response.on("action", (...) => {...});})\n.on("error", (error) => {...})',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 48,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'const axios = require("axios")\naxios.get("url").then(res=>...)',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 49,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'querystring',
			}
		],
		right_answer: 1,
	},
	{
		id_answer: 50,
		answer_arr: [
			{
				idAnswer: 1,
				answer: 'Нет',
			}
		],
		right_answer: 1,
	},
];

export { questTitle };
export { answers };