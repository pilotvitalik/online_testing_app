let nodeQuest = [
	{
		id_quest: 'node_1',
		name_test: 'NodeJS',
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
		id_quest: 'node_2',
		name_test: 'NodeJS',
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
		id_quest: 'node_3',
		name_test: 'NodeJS',
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
		id_quest: 'node_4',
		name_test: 'NodeJS',
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
		id_quest: 'node_5',
		name_test: 'NodeJS',
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
		id_quest: 'node_6',
		name_test: 'NodeJS',
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
		id_quest: 'node_7',
		name_test: 'NodeJS',
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
		id_quest: 'node_8',
		name_test: 'NodeJS',
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
		rightAnswer: 2,
	},
	{
		id_quest: 'node_9',
		name_test: 'NodeJS',
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
		id_quest: 'node_10',
		name_test: 'NodeJS',
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
		id_quest: 'node_11',
		name_test: 'NodeJS',
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
		id_quest: 'node_12',
		name_test: 'NodeJS',
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
		id_quest: 'node_13',
		name_test: 'NodeJS',
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
		id_quest: 'node_14',
		name_test: 'NodeJS',
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
		id_quest: 'node_15',
		name_test: 'NodeJS',
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
		id_quest: 'node_16',
		name_test: 'NodeJS',
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
		id_quest: 'node_17',
		name_test: 'NodeJS',
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
		id_quest: 'node_18',
		name_test: 'NodeJS',
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
		id_quest: 'node_19',
		name_test: 'NodeJS',
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
		id_quest: 'node_20',
		name_test: 'NodeJS',
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
		id_quest: 'node_21',
		name_test: 'NodeJS',
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
		id_quest: 'node_22',
		name_test: 'NodeJS',
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
		id_quest: 'node_23',
		name_test: 'NodeJS',
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
		id_quest: 'node_24',
		name_test: 'NodeJS',
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
		rightAnswer: 4,
	},
	{
		id_quest: 'node_25',
		name_test: 'NodeJS',
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
		id_quest: 'node_26',
		name_test: 'NodeJS',
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
		id_quest: 'node_27',
		name_test: 'NodeJS',
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
		id_quest: 'node_28',
		name_test: 'NodeJS',
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
		id_quest: 'node_29',
		name_test: 'NodeJS',
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
		id_quest: 'node_30',
		name_test: 'NodeJS',
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
		id_quest: 'node_31',
		name_test: 'NodeJS',
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
		id_quest: 'node_32',
		name_test: 'NodeJS',
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
		id_quest: 'node_33',
		name_test: 'NodeJS',
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
		id_quest: 'node_34',
		name_test: 'NodeJS',
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
		id_quest: 'node_35',
		name_test: 'NodeJS',
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
		rightAnswer: 1,
	},
	{
		id_quest: 'node_36',
		name_test: 'NodeJS',
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
		id_quest: 'node_37',
		name_test: 'NodeJS',
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
		id_quest: 'node_38',
		name_test: 'NodeJS',
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
		id_quest: 'node_39',
		name_test: 'NodeJS',
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
		id_quest: 'node_40',
		name_test: 'NodeJS',
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
		id_quest: 'node_41',
		name_test: 'NodeJS',
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
		id_quest: 'node_42',
		name_test: 'NodeJS',
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
		id_quest: 'node_43',
		name_test: 'NodeJS',
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
		id_quest: 'node_44',
		name_test: 'NodeJS',
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
		id_quest: 'node_45',
		name_test: 'NodeJS',
		name_quest: 'Пример создания простейшего сервера',
		answers: [
			{
				id: 1,
				answer: 'require("https").createServer((req, res) => res.end("Hello world")).listen(3000)',
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
		id_quest: 'node_46',
		name_test: 'NodeJS',
		name_quest: 'Способы выполнения GET запроса',
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
		id_quest: 'node_47',
		name_test: 'NodeJS',
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
		id_quest: 'node_48',
		name_test: 'NodeJS',
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
		id_quest: 'node_49',
		name_test: 'NodeJS',
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
		id_quest: 'node_50',
		name_test: 'NodeJS',
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
	{
		id_quest: 'node_51',
		name_test: 'NodeJS',
		name_quest: 'Что такое Deno',
		answers: [
			{
				id: 1,
				answer: 'динозаврик',
			},
			{
				id: 2,
				answer: 'аналог NodeJS',
			},
			{
				id: 3,
				answer: 'другое название NodeJS',
			},
			{
				id: 3,
				answer: 'нет правильных ответов',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'node_52',
		name_test: 'NodeJS',
		name_quest: 'определение Deno',
		answers: [
			{
				id: 1,
				answer: 'аналог NodeJS, более безопасный, позволяет более удобно работать с асинхронными запросами',
			},
			{
				id: 2,
				answer: 'сервер, позволяющий более удобно работать с асинхронными запросами',
			},
			{
				id: 3,
				answer: 'аналог NodeJS, позволяет более удобно работать с асинхронными запросами, уровень безопасности аналогичен NodeJS',
			},
			{
				id: 4,
				answer: 'аналог NodeJS, позволяет более удобно работать с синхронными запросами',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'node_53',
		name_test: 'NodeJS',
		name_quest: 'Дата создания Deno',
		answers: [
			{
				id: 1,
				answer: '2015',
			},
			{
				id: 2,
				answer: '2010',
			},
			{
				id: 3,
				answer: '2018',
			},
			{
				id: 4,
				answer: '2020',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'node_54',
		name_test: 'NodeJS',
		name_quest: 'Что такое CommonJS?',
		answers: [
			{
				id: 1,
				answer: 'JS для всех ПК',
			},
			{
				id: 2,
				answer: 'модульная система для NodeJS',
			},
			{
				id: 3,
				answer: 'аналог TypeScript',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'node_55',
		name_test: 'NodeJS',
		name_quest: 'В чем особенность CommonJS?',
		answers: [
			{
				id: 1,
				answer: 'позволяет использовать одни и теже скрипты в браузере и на сервере',
			},
			{
				id: 2,
				answer: 'позволяет использовать скрипты в браузере',
			},
			{
				id: 3,
				answer: 'позволяет использовать скрипты на сервере',
			},
			{
				id: 3,
				answer: 'позволяет использовать одни и теже скрипты в JS и PHP',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'node_56',
		name_test: 'NodeJS',
		name_quest: 'Чем является каждый скрипт (файл) для NodeJS?',
		answers: [
			{
				id: 1,
				answer: 'файлом',
			},
			{
				id: 2,
				answer: 'кодом',
			},
			{
				id: 3,
				answer: 'модулем',
			},
			{
				id: 3,
				answer: 'функцией',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'node_57',
		name_test: 'NodeJS',
		name_quest: 'Способы экспорта на NodeJS',
		answers: [
			{
				id: 1,
				answer: 'export',
			},
			{
				id: 2,
				answer: 'export.function_name = (prop) => func_code; module.exports = class function_name{func_code};',
			},
			{
				id: 3,
				answer: 'export.function_name => {func_code}; module.exports = function_name{func_code};',
			},
			{
				id: 4,
				answer: 'export function(prop) {func_code}; module.exports = class function_name{func_code};',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'node_58',
		name_test: 'NodeJS',
		name_quest: 'Импорт на NodeJS',
		answers: [
			{
				id: 1,
				answer: 'import',
			},
			{
				id: 2,
				answer: 'const test = require(name_module_export)',
			},
			{
				id: 3,
				answer: 'const func_name = require("./file.js")',
			},
			{
				id: 4,
				answer: 'import func_name ("./file.js")',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'node_59',
		name_test: 'NodeJS',
		name_quest: 'Краткий порядок работы функции require',
		answers: [
			{
				id: 1,
				answer: 'принимает строку (путь до модуля); код модуля выполняется только 1 раз, а затем переиспользуется',
			},
			{
				id: 2,
				answer: 'принимает строку; возвращает экспортируемое значение функции; код модуля выполняется только 1 раз',
			},
			{
				id: 3,
				answer: 'принимает строку (путь до модуля); возвращает экспортируемое значение модуля; код модуля выполняется каждый раз, когда вызывается функция',
			},
			{
				id: 4,
				answer: 'принимает строку (путь до модуля); возвращает экспортируемое значение модуля; код модуля выполняется только 1 раз, а затем переиспользуется',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'node_60',
		name_test: 'NodeJS',
		name_quest: 'Подробный порядок работы функции require',
		answers: [
			{
				id: 1,
				answer: 'Resolving -> Loading -> Wrapping -> Evaluation -> Caching',
			},
			{
				id: 2,
				answer: 'Loading -> Wrapping -> Evaluation -> Caching',
			},
			{
				id: 3,
				answer: 'Resolving -> Loading -> Evaluation -> Caching',
			},
			{
				id: 4,
				answer: 'Resolving -> Loading -> Wrapping -> Evaluation -> Setting',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'node_61',
		name_test: 'NodeJS',
		name_quest: 'Что означает Resolving',
		answers: [
			{
				id: 1,
				answer: 'поиск модуля указанного при передаче',
			},
			{
				id: 2,
				answer: 'получение модуля по указанному адресу',
			},
			{
				id: 3,
				answer: 'поиск необходимого модуля',
			},
			{
				id: 4,
				answer: 'поиск модуля NodeJS',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'node_62',
		name_test: 'NodeJS',
		name_quest: 'Что означает Loading',
		answers: [
			{
				id: 1,
				answer: 'загрузка модуля',
			},
			{
				id: 2,
				answer: 'загрузка и чтение модуля',
			},
			{
				id: 3,
				answer: 'чтение модуля',
			},
			{
				id: 4,
				answer: 'получение модуля',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'node_63',
		name_test: 'NodeJS',
		name_quest: 'Что означает Wrapping',
		answers: [
			{
				id: 1,
				answer: 'обертывание в функцию для последующей передачи обратно',
			},
			{
				id: 2,
				answer: 'обертывание в функцию',
			},
			{
				id: 3,
				answer: 'передачи функции обратно',
			},
			{
				id: 4,
				answer: 'нет правильного варианта',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'node_64',
		name_test: 'NodeJS',
		name_quest: 'Что означает Evaluation?',
		answers: [
			{
				id: 1,
				answer: 'выполнение',
			},
			{
				id: 2,
				answer: 'получение значения',
			},
			{
				id: 3,
				answer: 'вычисление',
			},
			{
				id: 4,
				answer: 'подъем состояния',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'node_65',
		name_test: 'NodeJS',
		name_quest: 'Что означает caching?',
		answers: [
			{
				id: 1,
				answer: 'получение текущего кэша',
			},
			{
				id: 2,
				answer: 'очистка кэша',
			},
			{
				id: 3,
				answer: 'сохранение в кэше',
			},
			{
				id: 4,
				answer: 'очистка кэш браузера',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'node_66',
		name_test: 'NodeJS',
		name_quest: 'Какими переменными являются __dirname и __filename и откуда они берутся?',
		answers: [
			{
				id: 1,
				answer: 'локальными, с сервера',
			},
			{
				id: 2,
				answer: 'глобальными, с сервера',
			},
			{
				id: 3,
				answer: 'глобальными, берутся из кэша',
			},
			{
				id: 4,
				answer: 'локальными, берутся из функции на шаге Wrapping',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'node_67',
		name_test: 'NodeJS',
		name_quest: 'Основные св-ва exports',
		answers: [
			{
				id: 1,
				answer: 'ниоткуда не возвращается, ссылка на module.exports',
			},
			{
				id: 2,
				answer: 'возвращается c сервера',
			},
			{
				id: 3,
				answer: 'ниоткуда не возвращается, ссылка на глобальный объект exports',
			},
			{
				id: 4,
				answer: 'возвращается из module.exports, ссылка на module.exports',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'node_68',
		name_test: 'NodeJS',
		name_quest: 'Основные св-ва module.exports',
		answers: [
			{
				id: 1,
				answer: 'глобальный объект, является тем, что возвращается из require',
			},
			{
				id: 2,
				answer: 'пустой объект',
			},
			{
				id: 3,
				answer: 'значения для exports',
			},
			{
				id: 4,
				answer: 'по умолчанию пустой объект, является тем, что возвращается из require',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'node_69',
		name_test: 'NodeJS',
		name_quest: 'Основные этапы Resolving',
		answers: [
			{
				id: 1,
				answer: 'local module, node module',
			},
			{
				id: 2,
				answer: 'node module, local module, core module',
			},
			{
				id: 3,
				answer: 'core module, local module, node module',
			},
			{
				id: 4,
				answer: 'node module, core module, local module',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'node_70',
		name_test: 'NodeJS',
		name_quest: 'Что такое streams?',
		answers: [
			{
				id: 1,
				answer: 'данные, которые можно обрабатывать частями',
			},
			{
				id: 2,
				answer: 'потоки; данные, которые можно обрабатывать частями',
			},
			{
				id: 3,
				answer: 'потоки',
			},
			{
				id: 4,
				answer: 'потоки; данные, которые можно обрабатывать полностью',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'node_71',
		name_test: 'NodeJS',
		name_quest: 'Основной плюс streams?',
		answers: [
			{
				id: 1,
				answer: 'т.к. большой файл можно разбить на части для обработки, занятая оперативная память не особо увеличивается',
			},
			{
				id: 2,
				answer: 'занятая оперативная память не особо увеличивается',
			},
			{
				id: 3,
				answer: 'большой файл можно разбить на части для обработки',
			},
			{
				id: 4,
				answer: 'т.к. большой файл можно разбить на части для обработки, занятая оперативная память увеличивается в разы',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'node_72',
		name_test: 'NodeJS',
		name_quest: 'Виды стримов',
		answers: [
			{
				id: 1,
				answer: 'Writable, Duplex, Transform',
			},
			{
				id: 2,
				answer: 'Readable, Writable, Duplex, Transform',
			},
			{
				id: 3,
				answer: 'Readable, Writable, Duplex, Triplex',
			},
			{
				id: 4,
				answer: 'Readable, ReWritable, Duplex, Transform',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'node_73',
		name_test: 'NodeJS',
		name_quest: 'Что означает стрим Readable?',
		answers: [
			{
				id: 1,
				answer: 'Стрим, у которого данные читаются и записываются',
			},
			{
				id: 2,
				answer: 'Стрим, у которого данные читаются (текстовый файл, ввод с клавиатуры, аудио, видео)',
			},
			{
				id: 3,
				answer: 'Стрим, у которого данные читаются несколько раз',
			},
			{
				id: 4,
				answer: 'Стрим, у которого данные читаются (текстовый файл, ввод с клавиатуры)',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'node_74',
		name_test: 'NodeJS',
		name_quest: 'Что означает стрим Writable?',
		answers: [
			{
				id: 1,
				answer: 'Стрим, в который можно записать данные, а затем прочитать',
			},
			{
				id: 2,
				answer: 'Стрим, в который можно записать данные на жесткий диск',
			},
			{
				id: 3,
				answer: 'Стрим, в который можно записать данные',
			},
			{
				id: 4,
				answer: 'Стрим, в который можно записать данные с шифрованием',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'node_75',
		name_test: 'NodeJS',
		name_quest: 'Что означает стрим Duplex?',
		answers: [
			{
				id: 1,
				answer: 'Стрим, в который могут быть записаны данные',
			},
			{
				id: 2,
				answer: 'Стрим, в который могут быть записаны данные только 2 раза и прочитаны',
			},
			{
				id: 3,
				answer: 'Стрим, в который могут быть записаны данные и прочитаны',
			},
			{
				id: 4,
				answer: 'Стрим, в который могут быть записаны данные и прочитаны только 2 раза',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'node_76',
		name_test: 'NodeJS',
		name_quest: 'Что означает стрим Transform?',
		answers: [
			{
				id: 1,
				answer: 'Стрим, который транформирует данные при чтении / записи',
			},
			{
				id: 2,
				answer: 'Стрим, который транформирует данные при чтении  и затем перевод их на другой язык',
			},
			{
				id: 3,
				answer: 'Стрим, который транформирует данные при чтении в другой формат',
			},
			{
				id: 4,
				answer: 'Стрим, который транформирует данные при записи в другой формат',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'node_77',
		name_test: 'NodeJS',
		name_quest: 'Благодаря чему созданы стримы?',
		answers: [
			{
				id: 1,
				answer: 'EventLoop',
			},
			{
				id: 2,
				answer: 'EventEizenhaur',
			},
			{
				id: 3,
				answer: 'EventEmmitter',
			},
			{
				id: 4,
				answer: 'Emmitter',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'node_78',
		name_test: 'NodeJS',
		name_quest: 'Что означает EventEmitter?',
		answers: [
			{
				id: 1,
				answer: 'паттерн прогнозирования',
			},
			{
				id: 2,
				answer: 'паттерн проектирования',
			},
			{
				id: 3,
				answer: 'цикл',
			},
			{
				id: 4,
				answer: 'паттерн разрешения',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'node_79',
		name_test: 'NodeJS',
		name_quest: 'С помощью какого модуля и метода можно получить метаданые файла?',
		answers: [
			{
				id: 1,
				answer: 'fs.stat',
			},
			{
				id: 2,
				answer: 'fs.meta',
			},
			{
				id: 3,
				answer: 'fs.fileStat',
			},
			{
				id: 4,
				answer: 'fs.statData',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'node_80',
		name_test: 'NodeJS',
		name_quest: 'Какой модуль работает с сжатием?',
		answers: [
			{
				id: 1,
				answer: 'elib',
			},
			{
				id: 2,
				answer: 'zlib',
			},
			{
				id: 3,
				answer: 'linRar',
			},
			{
				id: 4,
				answer: 'zip',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'node_81',
		name_test: 'NodeJS',
		name_quest: 'Синтаксис разбиения файла',
		answers: [
			{
				id: 1,
				answer: 'const src = fs.createReadStream(file_name);',
			},
			{
				id: 2,
				answer: 'fs.readStream(file_name);',
			},
			{
				id: 3,
				answer: 'const src = fs.createStream(file_name);',
			},
			{
				id: 4,
				answer: 'нет правильного ответа',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'node_82',
		name_test: 'NodeJS',
		name_quest: 'Метод для передачи данных между стримами',
		answers: [
			{
				id: 1,
				answer: 'file.ext(res);',
			},
			{
				id: 2,
				answer: 'file.move(res);',
			},
			{
				id: 3,
				answer: 'file.pipe(res);',
			},
			{
				id: 4,
				answer: 'fs.pipe(res);',
			},
		],
		rightAnswer: 3,
	},
];

export { nodeQuest };