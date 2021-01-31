let oopQuest = [
	{
		id_quest: 'oop_1',
		name_test: 'OOP JS',
		name_quest: 'Причины создания ООП',
		answers: [
			{
				id: 1,
				answer: 'программы стали сложнее, необходимость разделения кода на более мелкие части(модули)',
			},
			{
				id: 2,
				answer: 'необходимость разделения кода на более мелкие части(модули)',
			},
			{
				id: 3,
				answer: 'программы стали сложнее',
			},
			{
				id: 4,
				answer: 'необходимо сделать то, что есть в других языках',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_2',
		name_test: 'OOP JS',
		name_quest: 'Что необходимо сделать в первую очередь при исп. ООП на новом проекте',
		answers: [
			{
				id: 1,
				answer: 'определиться с сущностями',
			},
			{
				id: 2,
				answer: 'определиться с личностями (пользователи, системы и т.д.)',
			},
			{
				id: 3,
				answer: 'определиться с сущностями (пользователи, системы и т.д.)',
			},
			{
				id: 4,
				answer: 'определиться со структурой проекта',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_3',
		name_test: 'OOP JS',
		name_quest: 'Что необходимо сделать после создания сущности',
		answers: [
			{
				id: 1,
				answer: 'добавить ее в объект',
			},
			{
				id: 2,
				answer: 'сущности необходимо добавить основные св-ва (тлф, адрес и т.п.)',
			},
			{
				id: 3,
				answer: 'сущности необходимо добавить все св-ва (тлф, адрес и т.п.)',
			},
			{
				id: 4,
				answer: 'описать структуру проекта',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_4',
		name_test: 'OOP JS',
		name_quest: 'Основные принципы структурирования ООП',
		answers: [
			{
				id: 1,
				answer: 'абстракция, наследование, инкапсуляция',
			},
			{
				id: 2,
				answer: 'абстракция, наследование, капсуляция, полиморфизм',
			},
			{
				id: 3,
				answer: 'абстракция, наследование, инкапсуляция, полиморфизм',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_5',
		name_test: 'OOP JS',
		name_quest: 'Что такое абстракции?',
		answers: [
			{
				id: 1,
				answer: 'построение модели с всеми параметрами, которые потом станут св-вами и действиями с этими свойствами (методами)',
			},
			{
				id: 2,
				answer: 'построение модели с важными параметрами, которые потом станут св-вами и действиями с этими свойствами (методами)',
			},
			{
				id: 3,
				answer: 'построение модели с важными параметрами и действиями',
			},
			{
				id: 4,
				answer: 'построение модели с важными параметрами, которые потом будут использоваться в любых методах',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_6',
		name_test: 'OOP JS',
		name_quest: 'Примеры абстракции ООП',
		answers: [
			{
				id: 1,
				answer: 'строится корпус ВС для аэродинамической трубы. Корпус, крылья - являются основными свойствами. Либо - модель: user, св-ва: логин, пароль, методы: login, logout',
			},
			{
				id: 2,
				answer: 'строится корпус ВС для аэродинамической трубы. Корпус, крылья, двигатели, электрооборудование, кресла и т.д.  - являются основными свойствами. Либо - модель: user, св-ва: логин, пароль, методы: login, logout',
			},
			{
				id: 3,
				answer: 'строится корпус ВС для аэродинамической трубы. Корпус, крылья - являются основными свойствами.',
			},
			{
				id: 4,
				answer: 'строится корпус ВС для аэродинамической трубы. Корпус, крылья - являются основными свойствами. Либо - модель: user, св-ва: логин, пароль, цвет глаз, цвет волос и т.д. методы: login, logout',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_7',
		name_test: 'OOP JS',
		name_quest: 'Что должно находится в основной модели, если есть несколько ролей пользователей?',
		answers: [
			{
				id: 1,
				answer: 'свойства, которые будут использоваться всеми пользователями',
			},
			{
				id: 2,
				answer: 'методы, которые будут использоваться всеми пользователями',
			},
			{
				id: 3,
				answer: 'свойства и методы, всех пользователей',
			},
			{
				id: 4,
				answer: 'свойства и методы, которые будут использоваться всеми пользователями',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'oop_8',
		name_test: 'OOP JS',
		name_quest: 'Что такое наследование ООП?',
		answers: [
			{
				id: 1,
				answer: 'расширение',
			},
			{
				id: 2,
				answer: 'расширение, т.е. создается новая модель на основе основной модели, у которой будут св-ва и методы основной модели',
			},
			{
				id: 3,
				answer: 'расширение, т.е. создается новая модель на основе основной модели, у которой кроме своих свойств, будут св-ва и методы основной модели',
			},
			{
				id: 4,
				answer: 'расширение, т.е. создается новая модель на основе основной модели, у которой будут свои свойства',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_9',
		name_test: 'OOP JS',
		name_quest: 'Что такое инкапсуляция',
		answers: [
			{
				id: 1,
				answer: 'скрытие определенных данных',
			},
			{
				id: 2,
				answer: 'помещение опр. данных в метод внутри модели',
			},
			{
				id: 3,
				answer: 'скрытие всех данных',
			},
			{
				id: 4,
				answer: 'нет правильного ответа',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_10',
		name_test: 'OOP JS',
		name_quest: 'Что такое полиморфизм?',
		answers: [
			{
				id: 1,
				answer: 'способность функции обрабатывать данные разных типов, т.е. один и тот же метод будет по разному выполняться в зависимости от условия',
			},
			{
				id: 2,
				answer: 'способность функции обрабатывать данные некоторых типов',
			},
			{
				id: 3,
				answer: 'способность функции обрабатывать данные разных типов',
			},
			{
				id: 4,
				answer: 'способность функции обрабатывать данные объявленных типов, т.е. один и тот же метод будет по разному выполняться в зависимости от условия',
			},
		],
		rightAnswer: 1,
	},


	{
		id_quest: 'oop_11',
		name_test: 'OOP JS',
		name_quest: 'Где находится указатель на объект прототипа',
		answers: [
			{
				id: 1,
				answer: 'внутри описания объекта',
			},
			{
				id: 2,
				answer: 'в консоли браузера',
			},
			{
				id: 3,
				answer: 'в консоли браузера, под писанием объекта',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_12',
		name_test: 'OOP JS',
		name_quest: 'Как обозначается объект прототипа?',
		answers: [
			{
				id: 1,
				answer: '_proto_',
			},
			{
				id: 2,
				answer: '__parent__',
			},
			{
				id: 3,
				answer: '__objProto__',
			},
			{
				id: 4,
				answer: '__proto__',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'oop_13',
		name_test: 'OOP JS',
		name_quest: 'Какой тип програмирования является основой ООП в JS',
		answers: [
			{
				id: 1,
				answer: 'классовое',
			},
			{
				id: 2,
				answer: 'прототипное',
			},
			{
				id: 3,
				answer: 'передовое',
			},
			{
				id: 4,
				answer: 'межрассовое',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_14',
		name_test: 'OOP JS',
		name_quest: 'Способы наследования в прототипном ООП',
		answers: [
			{
				id: 1,
				answer: 'указать __proto__: a (объект a является прототипом при наследовании)',
			},
			{
				id: 2,
				answer: 'копирование всех свойств;',
			},
			{
				id: 3,
				answer: 'указать __parent__: a (объект a является прототипом при наследовании)',
			},
			{
				id: 4,
				answer: 'копирование всех свойств; указать __proto__: a (объект a является прототипом при наследовании)',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'oop_15',
		name_test: 'OOP JS',
		name_quest: 'Что указывается в качестве прототипа, при выводе в консоли наследуемого объекта?',
		answers: [
			{
				id: 1,
				answer: 'объект, от которого наследуются свойства и методы',
			},
			{
				id: 2,
				answer: 'объект прототип',
			},
			{
				id: 3,
				answer: 'undefined',
			},
			{
				id: 4,
				answer: 'самый первый объект в программе',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_16',
		name_test: 'OOP JS',
		name_quest: 'Синтаксис добавления метода в объект',
		answers: [
			{
				id: 1,
				answer: 'show: (){...}',
			},
			{
				id: 2,
				answer: 'function(){...}',
			},
			{
				id: 3,
				answer: 'show: function(){...}',
			},
			{
				id: 4,
				answer: 'сshow: func_name(){...}',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_17',
		name_test: 'OOP JS',
		name_quest: 'Синтаксис вызова метода объекта',
		answers: [
			{
				id: 1,
				answer: 'obj.func;',
			},
			{
				id: 2,
				answer: 'func.obj();',
			},
			{
				id: 3,
				answer: 'obj.func();',
			},
			{
				id: 4,
				answer: 'obj[func()];',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_18',
		name_test: 'OOP JS',
		name_quest: 'Что такое прототип?',
		answers: [
			{
				id: 1,
				answer: 'основной объект-родитель (пример: чертеж)',
			},
			{
				id: 2,
				answer: 'основной объект (пример: чертеж)',
			},
			{
				id: 3,
				answer: 'объект из кода JS (пример: чертеж)',
			},
			{
				id: 4,
				answer: 'основной класс (пример: чертеж)',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_19',
		name_test: 'OOP JS',
		name_quest: 'Что будет выводится, если после создания объекта, содержимое переменной поменять на строку/число?',
		answers: [
			{
				id: 1,
				answer: 'null',
			},
			{
				id: 2,
				answer: 'undefined',
			},
			{
				id: 3,
				answer: 'пустая строка',
			},
			{
				id: 4,
				answer: 'object undefined',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_20',
		name_test: 'OOP JS',
		name_quest: 'Что такое __proto__?',
		answers: [
			{
				id: 1,
				answer: 'setter для объекта',
			},
			{
				id: 2,
				answer: 'getter, для объекта',
			},
			{
				id: 3,
				answer: 'getter, setter для объекта',
			},
			{
				id: 4,
				answer: 'кодовое слово для объекта',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_21',
		name_test: 'OOP JS',
		name_quest: 'Что такое класс простым языком?',
		answers: [
			{
				id: 1,
				answer: 'функция или синтаксический сахар',
			},
			{
				id: 2,
				answer: 'объект и переменные',
			},
			{
				id: 3,
				answer: 'класс и набор объектов',
			},
			{
				id: 4,
				answer: 'переменная',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_22',
		name_test: 'OOP JS',
		name_quest: 'Процесс создания объекта в большинстве языках программирования',
		answers: [
			{
				id: 1,
				answer: 'класс -> объект',
			},
			{
				id: 2,
				answer: 'абстрактный класс -> класс -> объект',
			},
			{
				id: 3,
				answer: 'абстрактный класс -> класс',
			},
			{
				id: 4,
				answer: 'абстрактный класс -> класс -> переменная',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_23',
		name_test: 'OOP JS',
		name_quest: 'синтаксис создания класс',
		answers: [
			{
				id: 1,
				answer: 'var user = ...',
			},
			{
				id: 2,
				answer: 'obj User = {...}',
			},
			{
				id: 3,
				answer: 'class user = {...}',
			},
			{
				id: 4,
				answer: 'class User = {...}',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'oop_24',
		name_test: 'OOP JS',
		name_quest: 'синтаксис добавления свойства в класс, у которого пока нет значения',
		answers: [
			{
				id: 1,
				answer: 'constructor(){\nthis.login = login;\n}',
			},
			{
				id: 2,
				answer: 'constructor(login){\nthis.login = login;\n}',
			},
			{
				id: 3,
				answer: 'constructor(login){\nsuper();\nthis.login = login;\n}',
			},
			{
				id: 4,
				answer: 'constructor(login){\nthis.login = "";\n}',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_25',
		name_test: 'OOP JS',
		name_quest: 'синтаксис создания нового объекта на основе класса',
		answers: [
			{
				id: 1,
				answer: 'const person = new User("user");',
			},
			{
				id: 2,
				answer: 'let person = new User("user");',
			},
			{
				id: 3,
				answer: 'const person = User("user");',
			},
			{
				id: 4,
				answer: 'const person = new User();',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_26',
		name_test: 'OOP JS',
		name_quest: 'Синтаксис добавления метода в класс',
		answers: [
			{
				id: 1,
				answer: 'function validate(){\nconsole.log("Hello world!");\n}',
			},
			{
				id: 2,
				answer: 'const validate = () => {\nconsole.log("Hello world!");\n}',
			},
			{
				id: 3,
				answer: 'validate(){\nconsole.log("Hello world!");\n}',
			},
			{
				id: 4,
				answer: 'let validate = () => {\nconsole.log("Hello world!");\n}',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_27',
		name_test: 'OOP JS',
		name_quest: 'В каком месте класс добавляется метод',
		answers: [
			{
				id: 1,
				answer: 'перед constructor',
			},
			{
				id: 2,
				answer: 'в любом месте',
			},
			{
				id: 3,
				answer: 'в середине',
			},
			{
				id: 4,
				answer: 'после constructor',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'oop_28',
		name_test: 'OOP JS',
		name_quest: 'Синтаксис названия файлов только с классами',
		answers: [
			{
				id: 1,
				answer: 'с большой буквы',
			},
			{
				id: 2,
				answer: 'как обычно',
			},
			{
				id: 3,
				answer: 'через тире',
			},
			{
				id: 4,
				answer: 'с нижним подчеркиванием',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_29',
		name_test: 'OOP JS',
		name_quest: 'Синтаксис наследования с помощью классов',
		answers: [
			{
				id: 1,
				answer: 'class Student from User{\nconstructor(login){\nthis.nickname = nickname;\n}\n}',
			},
			{
				id: 2,
				answer: 'class Student extends User{\nconstructor(login){\nthis.nickname = nickname;\n}\n}',
			},
			{
				id: 3,
				answer: 'class Student proto User{\nconstructor(){\nthis.nickname = nickname;\n}\n}',
			},
			{
				id: 4,
				answer: 'class Student extends User{\nconstructor(){\nthis.nickname = nickname;\n}\n}',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_30',
		name_test: 'OOP JS',
		name_quest: 'Основные особенности constructor',
		answers: [
			{
				id: 1,
				answer: 'используется для установки свойств объекта на основе класса; запускается в момент создания; при создании экземпляра присваиваются некоторые значения',
			},
			{
				id: 2,
				answer: 'используется для установки свойств объекта на основе класса',
			},
			{
				id: 3,
				answer: 'используется для установки свойств объекта; запускается всегда при вызове; при создании экземпляра присваиваются значения по умолчанию',
			},
			{
				id: 4,
				answer: 'нет правильных ответов',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_31',
		name_test: 'OOP JS',
		name_quest: 'Основные особенности метода',
		answers: [
			{
				id: 1,
				answer: 'функции, расположенные внутри объекта; в момент создания объекта, доступны внутри созданного класса',
			},
			{
				id: 2,
				answer: 'функции, расположенные внутри класса',
			},
			{
				id: 3,
				answer: 'переменные, расположенные внутри класса; в момент создания объекта, доступны внутри созданного объекта',
			},
			{
				id: 4,
				answer: 'функции, расположенные внутри класса; в момент создания объекта, доступны внутри созданного объекта',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'oop_32',
		name_test: 'OOP JS',
		name_quest: 'Дополнительный способ обратиться к методу родительского класса из наследуемого',
		answers: [
			{
				id: 1,
				answer: 'super(validate)',
			},
			{
				id: 2,
				answer: 'super[validate()]',
			},
			{
				id: 3,
				answer: 'super.validate()',
			},
			{
				id: 4,
				answer: 'validate()',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_33',
		name_test: 'OOP JS',
		name_quest: 'Что такое защищенные свойства',
		answers: [
			{
				id: 1,
				answer: 'свойства, которые нельзя изменить напрямую',
			},
			{
				id: 2,
				answer: 'свойства, которые нельзя изменить напрямую по соглашению',
			},
			{
				id: 3,
				answer: 'свойства, которые нельзя изменить',
			},
			{
				id: 4,
				answer: 'свойства, которые нельзя изменить после создания экземпляра класса',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_34',
		name_test: 'OOP JS',
		name_quest: 'синтаксис защищенного свойства',
		answers: [
			{
				id: 1,
				answer: 'this._name = name;',
			},
			{
				id: 2,
				answer: 'this.#name = name;',
			},
			{
				id: 3,
				answer: 'this.name = name;',
			},
			{
				id: 4,
				answer: '_name = name;',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_35',
		name_test: 'OOP JS',
		name_quest: 'где лучше добавлять защищенные свойства',
		answers: [
			{
				id: 1,
				answer: 'методе',
			},
			{
				id: 2,
				answer: 'конструкторе',
			},
			{
				id: 3,
				answer: 'super',
			},
			{
				id: 4,
				answer: 'в любом месте при создании экземпляра объекта',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_36',
		name_test: 'OOP JS',
		name_quest: 'Синтаксис добавления защищенного свойства в класс',
		answers: [
			{
				id: 1,
				answer: 'set username(username){\nthis._name = name',
			},
			{
				id: 2,
				answer: 'get name(username){\nthis._name = name',
			},
			{
				id: 3,
				answer: 'set name(username){\nthis._name = name',
			},
			{
				id: 4,
				answer: 'set name(username){\nthis.name = name',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_37',
		name_test: 'OOP JS',
		name_quest: 'Что означает первое слово после "set" при установке защищенного свойства',
		answers: [
			{
				id: 1,
				answer: 'название метода',
			},
			{
				id: 2,
				answer: 'название свойства, через которое можно получить доступ к защищенному свойству',
			},
			{
				id: 3,
				answer: 'название свойства, на которое ссылатся защищеное свойство',
			},
			{
				id: 4,
				answer: 'название защищенного свойства',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'oop_38',
		name_test: 'OOP JS',
		name_quest: 'Синтаксис получения защищенного свойства в классе',
		answers: [
			{
				id: 1,
				answer: 'receive name(){\nreturn name;\n}',
			},
			{
				id: 2,
				answer: 'get name(){\nreturn name;\n}',
			},
			{
				id: 3,
				answer: 'get name(){\nname;\n}',
			},
			{
				id: 4,
				answer: 'get func_name(){\nreturn name;\n}',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_39',
		name_test: 'OOP JS',
		name_quest: 'В каких случаях свойство должно быть защищенным',
		answers: [
			{
				id: 1,
				answer: 'если при изменении данного свойства может порушиться программа',
			},
			{
				id: 2,
				answer: 'всегда',
			},
			{
				id: 3,
				answer: 'по желанию',
			},
			{
				id: 4,
				answer: 'когда указано в ТЗ',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_40',
		name_test: 'OOP JS',
		name_quest: 'Что такое приватные методы и свойства?',
		answers: [
			{
				id: 1,
				answer: 'методы и свойства, доступные при вводе пароля',
			},
			{
				id: 2,
				answer: 'методы и свойства, доступные при исп. слова "private"',
			},
			{
				id: 3,
				answer: 'методы и свойства, доступные только внутри родительского класса',
			},
			{
				id: 4,
				answer: 'методы и свойства, доступные внури класса',
			},
		],
		rightAnswer: 4,
	},
	{
		id_quest: 'oop_41',
		name_test: 'OOP JS',
		name_quest: 'Для чего используются приватные методы и свойства?',
		answers: [
			{
				id: 1,
				answer: 'для служебных операций внутри наследуемого класса',
			},
			{
				id: 2,
				answer: 'для служебных операций внутри определенного метода внутри класса',
			},
			{
				id: 3,
				answer: 'для служебных операций внутри класса',
			},
			{
				id: 4,
				answer: 'для операций внутри наследуемого класса',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_42',
		name_test: 'OOP JS',
		name_quest: 'синтаксис приватного свойства',
		answers: [
			{
				id: 1,
				answer: '#name = "Vitaliy"',
			},
			{
				id: 2,
				answer: '?name = "Vitaliy"',
			},
			{
				id: 3,
				answer: '_name = "Vitaliy"',
			},
			{
				id: 4,
				answer: 'name = "Vitaliy"',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_43',
		name_test: 'OOP JS',
		name_quest: 'Что такое статические методы и свойства',
		answers: [
			{
				id: 1,
				answer: 'методы и свойства, прописанные в классе, которые можно вызвать без создания экземпляра класса',
			},
			{
				id: 2,
				answer: 'методы и свойства, прописанные в классе, которые нельзя изменять',
			},
			{
				id: 3,
				answer: 'методы и свойства, прописанные в классе, которые можно вызвать с помощью создания экземпляра класса',
			},
			{
				id: 4,
				answer: 'методы и свойства, прописанные в классе, которые можно вызвать через специальный метод',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_44',
		name_test: 'OOP JS',
		name_quest: 'Синтаксис статического метода',
		answers: [
			{
				id: 1,
				answer: 'getRole(){...}',
			},
			{
				id: 2,
				answer: '#getRole(){...}',
			},
			{
				id: 3,
				answer: 'static getRole(){...}',
			},
			{
				id: 4,
				answer: '_getRole(){...}',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_45',
		name_test: 'OOP JS',
		name_quest: 'что такое метод call()',
		answers: [
			{
				id: 1,
				answer: 'вызов функции с указанием определенного контекста для this внутри функции',
			},
			{
				id: 2,
				answer: 'вызов функции с указанием определенного контекста',
			},
			{
				id: 3,
				answer: 'подписка на события',
			},
			{
				id: 4,
				answer: 'вызов функции внутри другой функции',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_46',
		name_test: 'OOP JS',
		name_quest: 'синтаксис метода call()',
		answers: [
			{
				id: 1,
				answer: 'fucntion_name.call(context, arg1, arg2, arg3);',
			},
			{
				id: 2,
				answer: 'fucntion_name.call(context);',
			},
			{
				id: 3,
				answer: 'fucntion.call(context, arg1, arg2, arg3);',
			},
			{
				id: 4,
				answer: 'fucntion_name.call(this = context);',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_47',
		name_test: 'OOP JS',
		name_quest: 'что означается context в методе call()',
		answers: [
			{
				id: 1,
				answer: 'элемент страницы, на котором вызывается функция',
			},
			{
				id: 2,
				answer: 'глобальный контекст',
			},
			{
				id: 3,
				answer: 'класс',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_48',
		name_test: 'OOP JS',
		name_quest: 'что означается arg1, arg2, arg3... в методе call()',
		answers: [
			{
				id: 1,
				answer: 'аргументы, передаваемые в метод call при вызове функции; обяхательный парметр',
			},
			{
				id: 2,
				answer: 'аргументы, передаваемые в метод call при вызове функции; необязательный парметр',
			},
			{
				id: 3,
				answer: 'аргументы, передаваемые в метод call при вызове функции;',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_49',
		name_test: 'OOP JS',
		name_quest: 'Порядок вызова метода call()',
		answers: [
			{
				id: 1,
				answer: 'в JS определить элемент на странице, на котором будет вызвана функция',
			},
			{
				id: 2,
				answer: 'создать функцию',
			},
			{
				id: 3,
				answer: 'вызвать созданную функцию с исп. метода call()',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_50',
		name_test: 'OOP JS',
		name_quest: 'Что такое метод apply()',
		answers: [
			{
				id: 1,
				answer: 'метода, аналогичный call(), позволяющий передавать аргументы не списком, а массивом',
			},
			{
				id: 2,
				answer: 'метода, позволяющий передавать аргументы не списком, а массивом',
			},
			{
				id: 3,
				answer: 'метода, аналогичный call(); синтаксический сахар',
			},
		],
		rightAnswer: 1,
	},
	{
		id_quest: 'oop_51',
		name_test: 'OOP JS',
		name_quest: 'Синтаксис метода apply()',
		answers: [
			{
				id: 1,
				answer: 'function_name.apply([arg1, arg2, arg3, ...]);',
			},
			{
				id: 2,
				answer: 'function_name.apply(context, [arg1, arg2, arg3, ...]);',
			},
			{
				id: 3,
				answer: 'apply(function_name, [arg1, arg2, arg3, ...]);',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_52',
		name_test: 'OOP JS',
		name_quest: 'Что такое метод bind()',
		answers: [
			{
				id: 1,
				answer: 'привязывает контекст функции',
			},
			{
				id: 2,
				answer: 'привязывает контекст функции и получает новый экземпляр',
			},
			{
				id: 3,
				answer: 'нет правильного ответа',
			},
		],
		rightAnswer: 2,
	},
	{
		id_quest: 'oop_53',
		name_test: 'OOP JS',
		name_quest: 'Синтаксис метода bind()',
		answers: [
			{
				id: 1,
				answer: 'let a = bind(b1, arg1, ...);\nb1.onclick = a;',
			},
			{
				id: 2,
				answer: 'let a.onclick = function_name.bind(b1, arg1, ...);',
			},
			{
				id: 3,
				answer: 'let a = function_name.bind(b1, arg1, ...);\nb1.onclick = a;',
			},
		],
		rightAnswer: 3,
	},
	{
		id_quest: 'oop_54',
		name_test: 'OOP JS',
		name_quest: 'Отличие метода bind() от call() и apply()',
		answers: [
			{
				id: 1,
				answer: 'можно использовать сколько угодно раз',
			},
			{
				id: 2,
				answer: 'используется только 1 раз',
			},
			{
				id: 3,
				answer: 'отличий нет',
			},
		],
		rightAnswer: 1,
	},
];

export { oopQuest };