let questTitle = [
	{
		id_quest: 1,
		name_quest: 'Дата основания сервера Apache?',
		answer: 1995,
	},
	{
		id_quest: 2,
		name_quest: 'Основная особенность сервера Apache',
		answer: '1 поток на 1 соединение приходящее на сервер',
	},
	{
		id_quest: 3,
		name_quest: 'Дата основания сервера Nginx?',
		answer: 2004
	},
	{
		id_quest: 4,
		name_quest: 'Основная особенность сервера Nginx',
		answer: '1000 соединений на 1 поток. Возможно с помощью схемы Event Loop. Все запросы асинхроны',
	},
	{
		id_quest: 5,
		name_quest: 'Основной плюс Nginx по сравнению с Apache',
		answer: 'Небольшое использование памяти',
	},
	{
		id_quest: 6,
		name_quest: 'Дата основания сервера NodeJS?',
		answer: 2009
	},
	{
		id_quest: 7,
		name_quest: 'Для чего был создан NodeJS',
		answer: '- необлокирующий ввод/вывод; \n - использование V8 для запуска JS; \n - кросплатформенность'
	},
	{
		id_quest: 8,
		name_quest: 'Особенности NodeJS',
		answer: 'JS, скорость, простота, C++ binding, V8', 
	},
	{
		id_quest: 9,
		name_quest: 'Что такое C++ binding?',
		answer: 'вызов функции JS, написанной на C++',
	},
	{
		id_quest: 10,
		name_quest: 'Что необходимо указывать при написании кода на NodeJS и для чего',
		answer: 'версию NodeJS, чтобы понимать какие фичи использовались'
	},
	{
		id_quest: 11,
		name_quest: 'Особенности движка V8',
		answer: '- открытый исходный код; \n - разработан Google; \n - запускается на разных ОС; \n - стандарты ECMAScript и WebAssembly; \n - написан на C++'
	},
	{
		id_quest: 12,
		name_quest: 'Что находится в данном репозитории: github.com/nvm-sh/nvm',
		answer: 'менеджер версий NodeJS, который позволяется менять версии в зависимости от запрошенной версии',
	},
	{
		id_quest: 13,
		name_quest: 'ОПорядок правильной установки NodeJS',
		answer: '- установить nvm; \n - nvm i node или nvm i node_version; \n - nvm use node_version;',
	},
	{
		id_quest: 14,
		name_quest: 'Что такое REPL?',
		answer: '- Read Eval Print Loop; \n - возможность писать на JS словами',
	},
	{
		id_quest: 15,
		name_quest: 'Цель написания JS в консоли',
		answer: 'проверка кода написанного на JS',
	},
	{
		id_quest: 16,
		name_quest: 'Что означает данный знак: _ (и сделать пример (стр. 2))',
		answer: 'исп. крайнее значение',
	},
	{
		id_quest: 17,
		name_quest: 'Получить API опр. функции NodeJS в консоли',
		answer: 'Math. + TAB',
	},
	{
		id_quest: 18,
		name_quest: 'Основные команды REPL',
		answer: '.help и .exit',
	},
	{
		id_quest: 19,
		name_quest: 'создание и запуск простого скрипта (с примером)',
		answer: '- создать файл.js; \n - добавить в него код; \n - запустить скрипт из консоли: \n node filename.js',
	},
	{
		id_quest: 20,
		name_quest: 'Способы создания файла',
		answer: '- nano filename.js - (редактирование в редакторе nano); \n - cat > filename.js - (редактирование в консоли); \n - > filename.js - (создание без редактирования)',
	},
	{
		id_quest: 21,
		name_quest: 'Способ выход из скрипта, т.е. завершение программы',
		answer: 'process.exit(code)  -> code - специальный код завершения процессов',
	},
	{
		id_quest: 22,
		name_quest: 'Какой модуль используется для хранения секретных данных для передачи по сети?',
		answer: 'cross-env',
	},
	{
		id_quest: 23,
		name_quest: 'Действия для передачи секретных данных при использовании модуля cross-env',
		answer: '- уст. модуль cross-env; \n - в package.json добавить код в раздел скриптов: "scripts": "cross-env GREET=Hello node ./index.js"; \n - в index.js добавить код: console.log(process.env.GREET); \n - вызвать файл в терминале;',
	},
	{
		id_quest: 24,
		name_quest: 'Добавление секретных данных в переменную окружения без исп. модуля cross-env на Linux',
		answer: 'в package.json добавить скрипт без исп. cross-env: "scripts": "cross-env GREET=Hello node ./index.js"',
	},
	{
		id_quest: 25,
		name_quest: 'Способ добавления секретных данных в переменную окружения на Linux  с помощью терминала',
		answer:'- уст. модуль cross-env; \n - в index.js добавить код: console.log(process.env.GREET); \n - в терминале запустить код: GREET=Hello node index.js;',
	},
	{
		id_quest: 26,
		name_quest: 'Команда вызова аргументов командной строки на NodeJS (с примерами: терминал, файл js)',
		answer: 'process.argv',
	},
	{
		id_quest: 27,
		name_quest: 'Какой путь выводится, если в качестве аргументов командной строки указывается файл',
		answer: 'абсолютный',
	},
	{
		id_quest: 28,
		name_quest: 'Встроенный модуль NodeJS для работы с путями',
		answer: 'path',
	},
	{
		id_quest: 29,
		name_quest: 'Пример встроенного модуля для работы с путями',
		answer: 'path.resolve("./index.js")',
	},
	{
		id_quest: 30,
		name_quest: 'Встроенный модуль для работы с файловой системой',
		answer: 'fs',
	},
	{
		id_quest: 31,
		name_quest: 'Метод для непрервыного отслеживания изменений в файле',
		answer: 'fs.watchFile()',
	},
	{
		id_quest: 32,
		name_quest: 'Какие параметры можно задать в fs.watchFile()',
		answer: '- интервал отслеживания; \n - текущее состояние; \n - предыдущее состояние;',
	},
	{
		id_quest: 33,
		name_quest: 'Встроенный модуль с потенциально полезными функциями для разработчика',
		answer: 'util',
	},
	{
		id_quest: 34,
		name_quest: 'Как используется модуль util на NodeJS',
		answer: 'совместно со встроенным методом в него',
	},
	{
		id_quest: 35,
		name_quest: 'Встроенный модуль для получения сведений об ОС',
		answer: 'os',
	},
	{
		id_quest: 36,
		name_quest: 'Формат получения данных с помощью встроенных модулей NodeJS',
		answer: 'console.log(os.command_os)',
	},
	{
		id_quest: 37,
		name_quest: 'Получить список системных констант с помощью модуля NodeJS',
		answer: 'os.constants',
	},
	{
		id_quest: 38,
		name_quest: 'Получить инфорацию о каждом ядре с помощью модуля NodeJS',
		answer: 'os.cpus()',
	},
	{
		id_quest: 39,
		name_quest: 'Получить hostname ОС с помощью модуля NodeJS',
		answer: 'os.hostname()',
	},
	{
		id_quest: 40,
		name_quest: 'Получить тип ОС с помощью модуля NodeJS',
		answer: 'os.type()',
	},
	{
		id_quest: 41,
		name_quest: 'Названия типов ОС, полученных с помощью модуля os.type()',
		answer: '- Linux на Linux; \n - Darwin на macOs; \n - WindowsNT на windows',
	},
	{
		id_quest: 42,
		name_quest: 'Получить информацию о пользователе с помощью модуля NodeJS',
		answer: 'os.userInfo()',
	},
	{
		id_quest: 43,
		name_quest: 'Создать простейший сервер с помощью модуля NodeJS',
		answer: 'http',
	},
	{
		id_quest: 44,
		name_quest: 'Что такое простейший сервер',
		answer: '1 сообщение на все запросы',
	},
	{
		id_quest: 45,
		name_quest: 'Пример создания простейшего сервера',
		answer: 'require("http").createServer((req, res) => res.end("Hello world")).listen(3000)',
	},
	{
		id_quest: 46,
		name_quest: 'Способы вполнения GET запроса',
		answer: '- модуль http; \n - модуль axios',
	},
	{
		id_quest: 47,
		name_quest: 'Пример GET запроса с помощью модуля http',
		answer: 'const http = require("http");\nhttp.get("url", (response) => {response.on("action", (...) => {...});})\n.on("error", (error) => {...})',
	},
	{
		id_quest: 48,
		name_quest: 'Пример запроса с помощью модуля axios',
		answer: 'const axios = require("axios")\naxios.get("url").then(res=>...)',
	},
	{
		id_quest: 49,
		name_quest: 'Парсинг параметров GET запроса с помощью модуля NodeJS',
		answer: 'querystring',
	},
	{
		id_quest: 50,
		name_quest: 'Нужно ли передавать "?" внутри модуля querystring на NodeJS',
		answer: 'Нет',
	},
];

export { questTitle };