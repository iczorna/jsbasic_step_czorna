"use strict";

const DATA = [
	{
		"first name": "Oleksii",
		"last name": "Petrov",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Swimming pool",
		category: "Master",
		experience: "8 years",
		description:
			"Oleksii has many years of experience working with swimmers. He is engaged in high-quality training of athletes at international competitions. His methodology is based on the latest training technologies",
	},
	{
		"first name": "Maryna",
		"last name": "Ivanova",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Gym",
		category: "specialist",
		experience: "2 years",
		description:
			"Maryna specializes in working with weight machines. She has developed a unique program for gaining muscles. Her clients are always satisfied with the results.",
	},
	{
		"first name": "Igor",
		"last name": "Sydorenko",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Kids club",
		category: "instructor",
		experience: "1 year",
		description:
			"Igor works with children of all ages. He created game methods for the development of coordination and dexterity. His lessons are always interesting and useful for children.",
	},
	{
		"first name": "Tetiana",
		"last name": "Moroz",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Fight club",
		category: "Master",
		experience: "10 years",
		description:
			"Tetiana is an expert in martial arts. She conducts training for professionals and beginners. Her approach to training helps athletes achieve high results.",
	},
	{
		"first name": "Sergii",
		"last name": "Kovalenko",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний Gym",
		category: "instructoр",
		experience: "1 year",
		description:
			"Sergii is focused on fitness and cardio work. He has perfected his techniques over the years. His students are always fit and energetic.",
	},
	{
		"first name": "Olena",
		"last name": "Lysenko",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Swimming Pool",
		category: "specialist",
		experience: "4 years",
		description:
			"Olena specializes in synchronized swimming. She trains teams of various levels. Her teams always take prize places at competitions",
	},
	{
		"first name": "Andrii",
		"last name": "Volkov",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Fight club",
		category: "instructor",
		experience: "1 year",
		description:
			"Andrii has experience in learning various martial arts. He teaches fighting techniques and tactics. His students win at international tournaments",
	},
	{
		"first name": "Nataliia",
		"last name": "Romanenko",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Kids club",
		category: "Kids club",
		experience: "3 years",
		description:
			"Natalia has developed a unique program for elementary school children. She helps children develop physical and mental skills. Her classes are always fun and dynamic.",
	},
	{
		"first name": "Vitalii",
		"last name": "Kozlov",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Gym",
		category: "Master",
		experience: "10 years",
		description:
			"Vitalii specializes in functional training. He has developed a number of effective training programs. His clients quickly achieve the desired results",
	},
	{
		"first name": "Yuliia",
		"last name": "Kravchenko",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Swimming pool",
		category: "Specialist",
		experience: "4 years",
		description:
			"Yuliia is an expert in water sports. She conducts training in aqua gymnastics and aerobics. Her students show impressive results in competitions",
	},
	{
		"first name": "Oleg",
		"last name": "Melnyk",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Fight club",
		category: "Master",
		experience: "12 years",
		description:
			"Oleg is a recognized master in martial arts. He trains champions of various weight categories. His methods are considered one of the most effective in the world of martial arts.",
	},
	{
		"first name": "Lidia",
		"last name": "Popova",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Kids club",
		category: "instructor",
		experience: "1 year",
		description:
			"Lidia has a lot of experience in working with children. She organizes various sports games and activities. Her classes always help children develop social skills and team spirit.",
	},
	{
		"first name": "Roman",
		"last name": "Semenov",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Gym",
		category: "Specialist",
		experience: "2 years",
		description:
			"Roman is an expert in crossfit and functional training. He has developed his own programs for different age groups. His students often receive awards at fitness tournaments.",
	},
	{
		"first name": "Anastasia",
		"last name": "Goncharova",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Swimming pool",
		category: "Instructor",
		experience: "1 year",
		description:
			"Anastasia focuses on aquatic programs for health and fitness. She provides training for individuals of various fitness levels. Her students report improved health and well-being after classes.",
	},
	{
		"first name": "Valentyn",
		"last name": "Tkachenko",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Fight club",
		category: "specialist",
		experience: "2 years",
		description:
			"Valentyn is an expert in taekwondo and kickboxing. He teaches fighting techniques, tactics and strategies. His students often become champions at national and international competitions.",
	},
	{
		"first name": "Larysa",
		"last name": "Petrenko",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Kids club",
		category: "Master",
		experience: "7 years",
		description:
			"Larysa has developed a comprehensive program for the development of children's physical and intellectual skills. She conducts classes in a playful way. Her method helps children become active and smart.",
	},
	{
		"first name": "Oleksii",
		"last name": "Petrov",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Swimming pool",
		category: "Master",
		experience: "11 years",
		description:
			"Oleksii has many years of experience working with swimmers. He is engaged in high-quality training of athletes at international competitions. His methodology is based on the latest training technologies",
	},
	{
		"first name": "Maryna",
		"last name": "Ivanova",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Gym",
		category: "Specialist",
		experience: "2 years",
		description:
			"Maryna specializes in working with weight machines. She has developed a unique program for gaining muscle mass. Her clients are always satisfied with the results.",
	},
	{
		"first name": "Igor",
		"last name": "Sydorenko",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Kids club",
		category: "Instructor",
		experience: "1 year",
		description:
			"Ihor works with children of all ages. He created game methods for the development of coordination and dexterity. His lessons are always interesting and useful for children.",
	},
	{
		"first name": "Nataliia",
		"last name": "Bondarenko",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Fight club",
		category: "master",
		experience: "8 years",
		description:
			"Natalia is a master in martial arts. She has studied various techniques and styles with which she works with her students. Her approach to teaching meets the highest standards.",
	},
	{
		"first name": "Andrii",
		"last name": "Semenov",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Gym",
		category: "Instructor",
		experience: "1 year",
		description:
			"Andrii specializes in functional training. He developed his own system of exercises to strengthen the body. His students always get visible results.",
	},
	{
		"first name": "Sofia",
		"last name": "Melnyk",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Swimming pool",
		category: "Specialist",
		experience: "6 years",
		description:
			"Sofia works with aqua gymnastics. She has learned different techniques and styles of swimming. Her classes help clients relax and improve their physical fitness.",
	},
	{
		"first name": "Dmytro",
		"last name": "Kovalchuk",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Kids club",
		category: "Master",
		experience: "10 years",
		description:
			"Dmytro specializes in the development of children's sports. He developed a unique program for children. His methods ensure the harmonious development of children.",
	},
	{
		"first name": "Olena",
		"last name": "Tkachenko",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Fight club",
		category: "specialist",
		experience: "5 years",
		description:
			"Olena is a well-known trainer in a women's fight club. She has learned various self-defense techniques. Her approach allows her students to feel confident in any situation.",
	},
];

DATA.forEach((el,index) => el.id = index + 1);
let initialData = [...DATA];

if (localStorage.getItem('sorted-data')){
	sortBy(localStorage.getItem('sorted-data'));
	document.querySelector('.sorting__btn--active').classList.remove('sorting__btn--active');
	document.querySelector(`[data-sort = "${localStorage.getItem('sorted-data')}"]`).classList.add('sorting__btn--active');
};

if (localStorage.getItem('filterDir')){
	document.querySelector(`[data-filter = "${localStorage.getItem('filterDir')}"]`).checked = true;
} 
	
if (localStorage.getItem('filterCat')){
	document.querySelector(`[data-filter = "${localStorage.getItem('filterCat')}"]`).checked = true;
}


const cardTemplate = document.querySelector('#trainer-card').content;
const modalWindowTemplate = document.querySelector('#modal-template').content
const cardsBlock = document.querySelector('.trainers-cards__container')
const sideMenu = document.querySelector('.sidebar')
const sortingMenu = document.querySelector('.sorting')
const filterForm = document.querySelector('.sidebar__filters');
const formInputs = filterForm.querySelectorAll('.filters__input');

function cardsRender(cardArr) {
    cardArr.forEach((trainer,index) => {
        const trainerCard = cardTemplate.cloneNode(true);
        trainerCard.querySelector('.trainer__name').innerText = `${trainer["first name"]} ${trainer["last name"]}`;
        trainerCard.querySelector('.trainer__img').src = trainer.photo;
		trainerCard.querySelector('.trainer').id = trainer.id;
		
        cardsBlock.append(trainerCard);
    });
}

const createModal = () => {
	document.querySelectorAll('.trainer__show-more').forEach(btn => btn.addEventListener('click', (event) =>{
	
		const modalWindowSpinParent = modalWindowTemplate.cloneNode(true);
		const modalWindowSpin = modalWindowSpinParent.querySelector('.modal');
		modalWindowSpin.innerHTML = '';
		const spinner = document.createElement('div');
		spinner.classList.add('loader');
		modalWindowSpin.appendChild(spinner);
		document.body.append(modalWindowSpinParent); 

		setTimeout(() => {
			const target = event.target;
			const card = target.closest('.trainer');
			const trainer = initialData.find(trainer => `${trainer.id}` === card.id);

			const modalWindow = modalWindowTemplate.cloneNode(true);
		
			modalWindow.querySelector('.modal__img').src = trainer.photo;
			modalWindow.querySelector('.modal__name').innerText = `${trainer["first name"]} ${trainer["last name"]}`;
			
			modalWindow.querySelector('.modal__point--category').innerText = "Category: " + trainer.category;
			modalWindow.querySelector('.modal__point--experience').innerText = "Experience: " + trainer.experience;
			modalWindow.querySelector('.modal__point--specialization').innerText = "Trainer specialization: " + trainer.specialization;
			modalWindow.querySelector('.modal__text').innerText = trainer.description;

			modalWindow.querySelector('.modal__close').addEventListener('click', () => {
				document.querySelector('.modal').remove();
				scrollOn();
			});
			document.querySelector('.modal').remove();
			document.body.append(modalWindow);
			scrollOff();
		}, 1500)
}))};

cardsRender(filterBy(initialData));
createModal();

let scrollPosition;

const scrollOff = () => {
	const body = document.body;
	scrollPosition = window.scrollY;

	body.style.overflow = 'hidden';
	body.style.position = 'fixed';
	body.style.width = '100%';
	body.style.top = `-${scrollPosition}px`;
}

const scrollOn = () => {
	const body = document.body;

	body.style.overflow = '';
	body.style.position = '';
	body.style.top = '';

	window.scrollTo(0, scrollPosition);
}

function sortBy (sortParam) {
	
	if (sortParam === 'lastName') {
		initialData.sort((a, b) => a["last name"].localeCompare(b["last name"]));
	}

	if (sortParam === 'experience') {
		initialData.sort( (a, b) => parseInt(b.experience) - parseInt(a.experience));
	} 

	if (sortParam === 'default') {
		initialData = [...DATA];
	}

	localStorage.setItem('sorted-data', sortParam);
}

document.querySelectorAll('.sorting__btn').forEach(btn => btn.addEventListener('click', (event) =>{
	const activeElem = document.querySelector('.sorting__btn--active');
	if (activeElem) {
		activeElem.classList.remove('sorting__btn--active');
	}

	event.target.classList.add('sorting__btn--active');
	sortBy(event.target.dataset.sort);
	const filteredData = filterBy();
    cardsBlock.innerHTML = '';
	cardsRender(filteredData);
	createModal();
}));

function filterBy () {
	const inputCheckedArr = Array.from(formInputs).filter(input => input.checked)
	
	localStorage.setItem('filterDir',inputCheckedArr[0].dataset.filter);
	localStorage.setItem('filterCat',inputCheckedArr[1].dataset.filter);

	return initialData.filter(trainer => 
		(inputCheckedArr[0].dataset.filter === "all direction" ? true : trainer.specialization.toLowerCase() === inputCheckedArr[0].dataset.filter) 
	&& (inputCheckedArr[1].dataset.filter === "all category" ? true : trainer.category.toLowerCase() === inputCheckedArr[1].dataset.filter));
}

filterForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const filteredData = filterBy();
	cardsBlock.innerHTML = '';
    cardsRender(filteredData);
	createModal();
})

sortingMenu.removeAttribute('hidden');
sideMenu.removeAttribute('hidden');