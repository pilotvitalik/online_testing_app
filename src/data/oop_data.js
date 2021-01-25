let oopQuest = [
	{
		id_quest: 1,
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
		id_quest: 2,
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
		id_quest: 3,
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
		id_quest: 4,
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
		id_quest: 5,
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
		id_quest: 6,
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
		id_quest: 7,
		name_quest: 'ЧТо должно находится в основной модели, если есть несколько ролей пользователей?',
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
		id_quest: 8,
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
		id_quest: 9,
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
		id_quest: 10,
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
		id_quest: 11,
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
		id_quest: 12,
		name_quest: 'Как обозначается объект прототипа?',
		answers: [
			{
				id: 1,
				answer: '__proto__',
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
		id_quest: 13,
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
		id_quest: 14,
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
		id_quest: 15,
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
		id_quest: 16,
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
		id_quest: 17,
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
		id_quest: 18,
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
		id_quest: 19,
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
		id_quest: 20,
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
];

export { oopQuest };