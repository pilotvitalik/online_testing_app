let questTitle = [
	{
		id_quest: 1,
		name_quest: 'Дата основания сервера Apache?',
		answers: [
			{
				id: 1,
				answer: 1995,
			},
			{
				id: 2,
				answer: 2000,
			},
			{
				id: 3,
				answer: 1990,
			},
			{
				id: 4,
				answer: 1998,
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 2,
		name_quest: 'Основная особенность сервера Apache',
		answers: [
			{
				id: 1,
				answer: '1 поток на 1000 соединение приходящее на сервер',
			},
			{
				id: 2,
				answer: '1 поток на 1 соединение приходящее на сервер',
			},
			{
				id: 3,
				answer: '1000 потоков на 500 соединение приходящее на сервер',
			},
			{
				id: 4,
				answer: 'количество потоков не имеет значения',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 3,
		name_quest: 'Дата основания сервера Nginx?',
		answers: [
			{
				id: 1,
				answer: 2004,
			},
			{
				id: 2,
				answer: 2000,
			},
			{
				id: 3,
				answer: 2005,
			},
			{
				id: 4,
				answer: 1999,
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 4,
		name_quest: 'Основная особенность сервера Nginx',
		answers: [
			{
				id: 1,
				answer: '1 соединение на 1 поток. Возможно с помощью схемы Event Loop. Все запросы асинхроны',
			},
			{
				id: 2,
				answer: '1000 соединений на 1 поток. Все запросы последовательны',
			},
			{
				id: 3,
				answer: '1 соединений на 1000 потоков Возможно с помощью схемы Event Loop Circle. Все запросы асинхроны',
			},
			{
				id: 4,
				answer: '1000 соединений на 1 поток. Возможно с помощью схемы Event Loop. Все запросы асинхроны',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 5,
		name_quest: 'Основной плюс Nginx по сравнению с Apache',
		answers: [
			{
				id: 1,
				answer: 'Большое использование памяти',
			},
			{
				id: 2,
				answer: 'Небольшое использование памяти',
			},
			{
				id: 3,
				answer: 'Год создания',
			},
			{
				id: 4,
				answer: 'Отличий нет',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 6,
		name_quest: 'Дата основания сервера NodeJS?',
		answers: [
			{
				id: 1,
				answer: 2000,
			},
			{
				id: 2,
				answer: 1995,
			},
			{
				id: 3,
				answer: 2004,
			},
			{
				id: 4,
				answer: 2009,
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 7,
		name_quest: 'Для чего был создан NodeJS',
		answers: [
			{
				id: 1,
				answer: '- возможность писать на JS на сервере',
			},
			{
				id: 2,
				answer: '- необлокирующий ввод/вывод; \n - использование V8 для запуска JS; \n - кросплатформенность',
			},
			{
				id: 3,
				answer: '- необлокирующий ввод/вывод; \n - кросплатформенность',
			},
			{
				id: 4,
				answer: '- блокирующий ввод/вывод; \n - использование V12 для запуска JS; \n - кроссбраузерность',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 8,
		name_quest: 'Особенности NodeJS',
		answers: [
			{
				id: 1,
				answer: 'простота',
			},
			{
				id: 2,
				answer: 'JS, скорость, простота, C++ binding, V8',
			},
			{
				id: 3,
				answer: 'JS, скорость, простота, C++ binding, V12',
			},
			{
				id: 4,
				answer: 'нет правильных ответов',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 9,
		name_quest: 'Что такое C++ binding?',
		answers: [
			{
				id: 1,
				answer: 'вызов функции JS, написанной на C++',
			},
			{
				id: 2,
				answer: 'возможность использовать JS на C++',
			},
			{
				id: 3,
				answer: 'вызов функции JS, написанной на C#',
			},
			{
				id: 4,
				answer: 'вызов функции JS, написанной на C++ и С#',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 10,
		name_quest: 'Что необходимо указывать при написании кода на NodeJS и для чего',
		answers: [
			{
				id: 1,
				answer: 'дату релиза, чтобы понимать когда принялся за работу',
			},
			{
				id: 2,
				answer: 'версию релиза, чтобы не забыть',
			},
			{
				id: 3,
				answer: 'список задач, чтобы не забыть о них',
			},
			{
				id: 4,
				answer: 'версию NodeJS, чтобы понимать какие фичи использовались',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 11,
		name_quest: 'Особенности движка V8',
		answers: [
			{
				id: 1,
				answer: ' закрытый исходный код;  разработан Google;  запускается на Linux-подобных ОС;  стандарты ECMAScript и WebAssembly;  написан на C++',
			},
			{
				id: 2,
				answer: ' открытый исходный код;  разработан Google;  запускается на разных ОС;  стандарты ECMAScript и WebAssembly;  написан на C++',
			},
			{
				id: 3,
				answer: ' открытый исходный код;  разработан Facebook;  запускается на разных ОС;  стандарты ECMAScript и WebAssembly;  написан на C++ и C#',
			},
			{
				id: 4,
				answer: ' открытый исходный код;',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 12,
		name_quest: 'Что находится в данном репозитории: github.com/nvm-sh/nvm',
		answers: [
			{
				id: 1,
				answer: 'менеджер версий npm, который позволяется менять версии в зависимости от запрошенной версии',
			},
			{
				id: 2,
				answer: 'менеджер версий Linux для NodeJs',
			},
			{
				id: 3,
				answer: 'менеджер версий NodeJS, который позволяется менять версии в зависимости от запрошенной версии',
			},
			{
				id: 4,
				answer: 'один из дополнительных модулей NodeJS',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 13,
		name_quest: 'Порядок правильной установки NodeJS',
		answers: [
			{
				id: 1,
				answer: 'установить nvm; nvm i node или nvm i node_version; nvm use node_version;',
			},
			{
				id: 2,
				answer: 'установить npm; npm i node или npm i node_version; npm use node_version;',
			},
			{
				id: 3,
				answer: 'установить npm; установить nvm; nvm use node_version;',
			},
			{
				id: 4,
				answer: 'нет правильных ответов',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 14,
		name_quest: 'Что такое REPL?',
		answers: [
			{
				id: 1,
				answer: 'Read End Print Looser; возможность писать на JS словами',
			},
			{
				id: 2,
				answer: 'Read Eval Print Loop; возможность писать на JS и PHP словами',
			},
			{
				id: 3,
				answer: 'Round Eval Print Loop;',
			},
			{
				id: 4,
				answer: 'Read Eval Print Loop; возможность писать на JS словами',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 15,
		name_quest: 'Цель написания JS в консоли',
		answers: [
			{
				id: 1,
				answer: 'проверка кода написанного на NodeJS',
			},
			{
				id: 2,
				answer: 'проверка кода написанного на JS',
			},
			{
				id: 3,
				answer: 'когда нечем себя занять',
			},
			{
				id: 4,
				answer: 'тестирование новых фич JS',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 16,
		name_quest: 'Что означает данный знак в NodeJS: _ (и сделать пример (стр. 2))',
		answers: [
			{
				id: 1,
				answer: 'пробел',
			},
			{
				id: 2,
				answer: 'нижнее подчеркивание',
			},
			{
				id: 3,
				answer: 'исп. крайнее значение',
			},
			{
				id: 4,
				answer: 'исп. самое первое значение',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 17,
		name_quest: 'Получить API опр. функции NodeJS в консоли',
		answers: [
			{
				id: 1,
				answer: 'Sync. + TAB',
			},
			{
				id: 2,
				answer: 'Math. + TAB',
			},
			{
				id: 3,
				answer: 'func() + TAB',
			},
			{
				id: 4,
				answer: 'array + TAB',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 18,
		name_quest: 'Основные команды REPL',
		answers: [
			{
				id: 1,
				answer: '.help',
			},
			{
				id: 2,
				answer: '.exit',
			},
			{
				id: 3,
				answer: 'command()',
			},
			{
				id: 4,
				answer: '.help и .exit',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 19,
		name_quest: 'создание и запуск простого скрипта (с примером)',
		answers: [
			{
				id: 1,
				answer: 'создать файл.js; добавить в него код; запустить скрипт из консоли: node filename.js',
			},
			{
				id: 2,
				answer: 'создать файл.js; добавить в него код; запустить скрипт из консоли: filename.js',
			},
			{
				id: 3,
				answer: 'запустить скрипт из консоли: node filename.js',
			},
			{
				id: 4,
				answer: 'создать файл.nodejs; запустить скрипт из консоли: node filename.js',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 20,
		name_quest: 'Способы создания файла',
		answers: [
			{
				id: 1,
				answer: 'nano filename.js - (редактирование в редакторе nano)',
			},
			{
				id: 2,
				answer: 'nano filename.js - (редактирование в редакторе nano); cat > filename.js - (редактирование в консоли); > filename.js - (создание без редактирования)',
			},
			{
				id: 3,
				answer: 'cat > filename.js - (редактирование в консоли)',
			},
			{
				id: 4,
				answer: 'nano filename.js - (редактирование в редакторе nano); sudo > filename.js - (редактирование в консоли); < filename.js - (создание без редактирования)',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 21,
		name_quest: 'Способ выход из скрипта, т.е. завершение программы',
		answers: [
			{
				id: 1,
				answer: 'process.env.VAR  -> VAR - специальный код завершения процессов',
			},
			{
				id: 2,
				answer: 'process.stop(code)  -> code - специальный код завершения процессов',
			},
			{
				id: 3,
				answer: 'process.exit(code)  -> code - специальный код завершения процессов',
			},
			{
				id: 4,
				answer: 'process.cross(code)  -> code - специальный код завершения процессов',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 22,
		name_quest: 'Какой модуль используется для хранения секретных данных для передачи по сети?',
		answers: [
			{
				id: 1,
				answer: 'cross-env',
			},
			{
				id: 2,
				answer: 'env',
			},
			{
				id: 3,
				answer: 'crossEnv',
			},
			{
				id: 4,
				answer: 'secretEnv',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 23,
		name_quest: 'Действия для передачи секретных данных при использовании модуля cross-env',
		answers: [
			{
				id: 1,
				answer: 'в package.json добавить код в раздел скриптов: "scripts": "cross-env GREET=Hello node ./index.js"; в index.js добавить код: console.log(process.env.GREET); вызвать файл в терминале;',
			},
			{
				id: 2,
				answer: 'уст. модуль cross-env; в package.json добавить код в раздел скриптов: "scripts": "cross-env GREET=Hello ./index.js"; в index.js добавить код: console.log(process.env.GREET); вызвать файл в терминале;',
			},
			{
				id: 3,
				answer: 'уст. модуль env; в package.json добавить код в раздел скриптов: "scripts": "env GREET=Hello"; в index.js добавить код: console.log(process.env.GREET); вызвать файл в терминале;',
			},
			{
				id: 4,
				answer: 'уст. модуль cross-env; в package.json добавить код в раздел скриптов: "scripts": "cross-env GREET=Hello node ./index.js"; в index.js добавить код: console.log(process.env.GREET); вызвать файл в терминале;',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 24,
		name_quest: 'Добавление секретных данных в переменную окружения без исп. модуля cross-env на Linux',
		answers: [
			{
				id: 1,
				answer: 'в package.json добавить скрипт без исп. cross-env: "scripts": "GREET=Hello ./index.js"',
			},
			{
				id: 2,
				answer: 'в package.json добавить скрипт без исп. cross-env: "scripts": "GREET=Hello"',
			},
			{
				id: 3,
				answer: 'в package-lock.json добавить скрипт без исп. cross-env: "scripts": "GREET=Hello node ./index.js"',
			},
			{
				id: 4,
				answer: 'в package.json добавить скрипт без исп. cross-env: "scripts": "GREET=Hello node ./index.js"',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 25,
		name_quest: 'Способ добавления секретных данных в переменную окружения на Linux  с помощью терминала',
		answers: [
			{
				id: 1,
				answer: 'уст. модуль cross-env; в index.js добавить код: console.log(process.env.GREET); в терминале запустить код: GREET=Hello node index.js;',
			},
			{
				id: 2,
				answer: 'в index.js добавить код: console.log(process.env.GREET); в терминале запустить код: GREET=Hello node index.js;',
			},
			{
				id: 3,
				answer: 'в index.js добавить код: console.log(process.env.GREET); в терминале запустить код: node index.js GREET=Hello;',
			},
			{
				id: 4,
				answer: 'в терминале добавить код: console.log(process.env.GREET); в терминале запустить код: GREET=Hello node index.js;',
			},
			],
		rightAnswer: 2,
	},
	{
		id_quest: 26,
		name_quest: 'Команда вызова аргументов командной строки на NodeJS (с примерами: терминал, файл js)',
		answers: [
			{
				id: 1,
				answer: 'process.arg',
			},
			{
				id: 2,
				answer: 'process.env',
			},
			{
				id: 3,
				answer: 'process.argv',
			},
			{
				id: 4,
				answer: 'process.func',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 27,
		name_quest: 'Какой путь выводится, если в качестве аргументов командной строки указывается файл',
		answers: [
			{
				id: 1,
				answer: 'относительный',
			},
			{
				id: 2,
				answer: 'абсолютный и относительный',
			},
			{
				id: 3,
				answer: 'абсолютный',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 28,
		name_quest: 'Встроенный модуль NodeJS для работы с путями',
		answers: [
			{
				id: 1,
				answer: 'pyti',
			},
			{
				id: 2,
				answer: 'route',
			},
			{
				id: 3,
				answer: 'path',
			},
			{
				id: 4,
				answer: 'wind',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 29,
		name_quest: 'Пример встроенного модуля для работы с путями',
		answers: [
			{
				id: 1,
				answer: 'path.resolve("./index.js")',
			},
			{
				id: 2,
				answer: 'path.get("./index.js")',
			},
			{
				id: 3,
				answer: 'path.resolve(./index.js)',
			},
			{
				id: 4,
				answer: 'path("./index.js")',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 30,
		name_quest: 'Встроенный модуль для работы с файловой системой',
		answers: [
			{
				id: 1,
				answer: 'file',
			},
			{
				id: 2,
				answer: 'file.get()',
			},
			{
				id: 3,
				answer: 'path',
			},
			{
				id: 4,
				answer: 'fs',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 31,
		name_quest: 'Метод для непрервыного отслеживания изменений в файле',
		answers: [
			{
				id: 1,
				answer: 'fs.watchFile()',
			},
			{
				id: 2,
				answer: 'fs.watch()',
			},
			{
				id: 3,
				answer: 'fs.file()',
			},
			{
				id: 4,
				answer: 'fs()',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 32,
		name_quest: 'Какие параметры можно задать в fs.watchFile()',
		answers: [
			{
				id: 1,
				answer: 'интервал отслеживания',
			},
			{
				id: 2,
				answer: 'интервал отслеживания; текущее состояние; предыдущее состояние;',
			},
			{
				id: 3,
				answer: 'интервал отслеживания; текущее и предыдущее состояние; кто работает с файлом;',
			},
			{
				id: 4,
				answer: 'дата создания; текущее состояние; предыдущее состояние;',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 33,
		name_quest: 'Встроенный модуль с потенциально полезными функциями для разработчика',
		answers: [
			{
				id: 1,
				answer: 'until',
			},
			{
				id: 2,
				answer: 'till',
			},
			{
				id: 3,
				answer: 'func',
			},
			{
				id: 4,
				answer: 'util',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 34,
		name_quest: 'Как используется модуль util на NodeJS',
		answers: [
			{
				id: 1,
				answer: 'совместно со встроенным методом в него',
			},
			{
				id: 2,
				answer: 'самостоятельно',
			},
			{
				id: 3,
				answer: 'внутри используются дополнительные функции',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 35,
		name_quest: 'Встроенный модуль для получения сведений об ОС',
		answers: [
			{
				id: 1,
				answer: 'os',
			},
			{
				id: 2,
				answer: 'fs',
			},
			{
				id: 3,
				answer: 'info',
			},
			{
				id: 4,
				answer: 'system',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 36,
		name_quest: 'Формат получения данных с помощью встроенных модулей NodeJS',
		answers: [
			{
				id: 1,
				answer: 'os.command_os',
			},
			{
				id: 2,
				answer: 'console.log(command(os.command_os))',
			},
			{
				id: 3,
				answer: 'console.log(os.command_os)',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 37,
		name_quest: 'Получить список системных констант с помощью модуля NodeJS',
		answers: [
			{
				id: 1,
				answer: 'os.systemConstants',
			},
			{
				id: 2,
				answer: 'os.constants',
			},
			{
				id: 3,
				answer: 'os.variables',
			},
			{
				id: 4,
				answer: 'os.systemInfo',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 38,
		name_quest: 'Получить инфорацию о каждом ядре с помощью модуля NodeJS',
		answers: [
			{
				id: 1,
				answer: 'os.cpus()',
			},
			{
				id: 2,
				answer: 'os.cpu()',
			},
			{
				id: 3,
				answer: 'os.cpus',
			},
			{
				id: 4,
				answer: 'os.systemCpus()',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 39,
		name_quest: 'Получить hostname ОС с помощью модуля NodeJS',
		answers: [
			{
				id: 1,
				answer: 'os.hostname()',
			},
			{
				id: 2,
				answer: 'os.host()',
			},
			{
				id: 3,
				answer: 'os.hostname',
			},
			{
				id: 4,
				answer: 'os.userHost()',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 40,
		name_quest: 'Получить тип ОС с помощью модуля NodeJS',
		answers: [
			{
				id: 1,
				answer: 'os.type()',
			},
			{
				id: 2,
				answer: 'os.typeOs()',
			},
			{
				id: 3,
				answer: 'os()',
			},
			{
				id: 4,
				answer: 'os.infoOs()',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 41,
		name_quest: 'Названия типов ОС, полученных с помощью модуля os.type()',
		answers: [
			{
				id: 1,
				answer: 'Linux на Linux; Apple на macOs; Windows на Windows',
			},
			{
				id: 2,
				answer: 'Linux на Linux; Macintosh на macOs; WindowsNT на Windows',
			},
			{
				id: 3,
				answer: 'Linux на Linux; Darwin на macOs; WindowsNT на Windows',
			},
			{
				id: 4,
				answer: 'Linux на Linux; Leonardo на macOs; WindowsNT на Windows',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 42,
		name_quest: 'Получить информацию о пользователе с помощью модуля NodeJS',
		answers: [
			{
				id: 1,
				answer: 'os.user()',
			},
			{
				id: 2,
				answer: 'os.infoUser()',
			},
			{
				id: 3,
				answer: 'os.userInfo()',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 43,
		name_quest: 'Создать простейший сервер с помощью модуля NodeJS',
		answers: [
			{
				id: 1,
				answer: 'https',
			},
			{
				id: 2,
				answer: 'http',
			},
			{
				id: 3,
				answer: 'server',
			},
			{
				id: 4,
				answer: 'nodeServer',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 44,
		name_quest: 'Что такое простейший сервер',
		answers: [
			{
				id: 1,
				answer: '1 сообщение на все запросы',
			},
			{
				id: 2,
				answer: 'различные сообщения на все запросы',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 45,
		name_quest: 'Пример создания простейшего сервера',
		answers: [
			{
				id: 1,
				answer: 'require("httpы").createServer((req, res) => res.end("Hello world")).listen(3000)',
			},
			{
				id: 2,
				answer: 'require("http").server((req, res) => res.end("Hello world"))',
			},
			{
				id: 3,
				answer: 'require("http").createServer((req, res) => res.end("Hello world")).listen(3000)',
			},
			{
				id: 4,
				answer: 'require("http").createServer((req, res) => res("Hello world")).listen(3000)',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 46,
		name_quest: 'Способы вполнения GET запроса',
		answers: [
			{
				id: 1,
				answer: 'модуль http; - модуль axios',
			},
			{
				id: 2,
				answer: 'модуль https; - модуль fetch',
			},
			{
				id: 3,
				answer: 'модуль http; - модуль catch',
			},
			{
				id: 4,
				answer: 'модуль http; - модуль Http',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 47,
		name_quest: 'Пример GET запроса с помощью модуля http',
		answers: [
			{
				id: 1,
				answer: 'http.get("url", (response) => {response.on("action", (...) => {...});})\n.on("error", (error) => {...})',
			},
			{
				id: 2,
				answer: 'const https = require("http");\nhttp.get("url", (response) => {response.on("action", (...) => {...});})\n.on("error", (error) => {...})',
			},
			{
				id: 3,
				answer: 'const http = require("http");\nhttp.get("url", (response) => {response.on("action", (...) => {...});})\n.on("error", (error) => {...})',
			},
			{
				id: 4,
				answer: 'const http = require("http");\nhttp.get("url", (response) => {response.on(...) => {...};})\n.on("error", (error) => {...})',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 48,
		name_quest: 'Пример запроса с помощью модуля axios',
		answers: [
			{
				id: 1,
				answer: 'const axios = require("axios")\naxios.get("url").then(res=>...)',
			},
			{
				id: 2,
				answer: 'const axios = require("axios")\naxios.get("url").then((res)=>...)',
			},
			{
				id: 3,
				answer: 'const axios = require("axios-npm")\naxios.get("url").then(res=>...)',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 49,
		name_quest: 'Парсинг параметров GET запроса с помощью модуля NodeJS',
		answers: [
			{
				id: 1,
				answer: 'queryString',
			},
			{
				id: 2,
				answer: 'querystring',
			},
			{
				id: 3,
				answer: 'query',
			},
			{
				id: 4,
				answer: 'queryparam',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 50,
		name_quest: 'Нужно ли передавать "?" внутри модуля querystring на NodeJS',
		answers: [
			{
				id: 1,
				answer: 'Нет',
			},
			{
				id: 2,
				answer: 'Да',
			},
			{
				id: 3,
				answer: 'в некоторых случаях',
			},
		],
		rightAnswer: 1,
	},
];

export { questTitle };