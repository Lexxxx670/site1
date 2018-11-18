var users=
{
	users:[
	{login:'admin',password:'admin'},
	{login:'user1',password:'user1'},
	{login:'director',password:'director'},
	{login:'user2',password:'user2'}
	,{login:'user3',password:'user3'}
	]
};// вход

var vip=
{
	users:
	[
		{name:'Толокнов	Влад Алексеевич',login:'soroko2',predmet:'Программирования',status:1},
		{name:'Ситник Вадим Александрович',login:'sitnik2',predmet:'Программирования',status:2},
		{name:'Шикарова Анна Петровна',login:'annakar',predmet:'Программирования',status:3}
	]
};//пользователи которые выиграли

var street={ //города
body:[
{name:'Бобруйск'},
{name:'Борисов'},
{name:'Витебск'},
{name:'Гомель'},
{name:'Минск'},
{name:'Могилёв'},
{name:'Мозырь'},
{name:'Орша'},
{name:'Полоцк'},
{name:'Речица'},
{name:'Слуцк'},
{name:'Быхов'},
{name:'Ветка'},
{name:'Горки'},
{name:'Городок'},
{name:'Дзержинск'},
{name:'Добруш'},
{name:'Дрисса'}
]
};



var soevnovanoya_type={// тип соревнования
	body:[
		{name:'Программирования',value:1},
		{name:'Робота техника',value:2},
		{name:'Машинное обучения',value:3},
		{name:'Информатика',value:4}
	]
};



var themes={// Темы которые будут расмотрены 
	body:[
		{name:'Работа с жадными алгоритмами',count_task:10,link:'https://habrahabr.ru/post/120343/',soevnovanoya_type_id:3},
		{name:'Методы оптимизация кода',count_task:3,link:'http://cppstudio.com/',soevnovanoya_type:0},
		{name:'Методы сортировки',count_task:2,link:'http://cppstudio.com/post/457/',soevnovanoya_type:0},
		{name:'STL на практике',count_task:1,link:'http://cppstudio.com//',soevnovanoya_type:0},
		{name:'аппаратное обеспечение средств вычислительной техники;',count_task:1,link:'http://www.studfiles.ru/preview/1458054/',soevnovanoya_type:3},
		{name:'	программное обеспечение средств вычислительной техники;',count_task:1,link:'http://www.studfiles.ru/preview/1458054/',soevnovanoya_type:3}
	]
};


var ul_index_html={// панель навигации
links:[
	{name:'Главное',link:'./index.html'},
	{name:'Регистрация',link:'./signup.html'},
	{name:'Вход',link:'./signin.html'},
	{name:'Темы',link:'./tems.html'},
	{name:'Победители',link:'./pobeda.html'},
	{name:'О нас',link:'./onas.html'}	
]};


var ul_im_html=// панель навигации
{
	links:[
		{name:'Главное',link:'./im.html'},
		{name:'Тренировка',link:'./signup.html'},
		{name:'Пройти тест по олимпиаде',link:'./tren.html'},
		{name:'Выход',link:'./index.html'}	
	]
};

var ul_tren_test_html=
{
	links:[// панель навигации
		{name:'Главное',link:'./im.html'},
		{name:'Выход',link:'./index.html'}	
	]
};



