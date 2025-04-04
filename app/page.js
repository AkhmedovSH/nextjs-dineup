"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Squircle } from 'corner-smoothing'

const emojiArray = [
	"🥬", "🥐", "🥨", "🧀", "🍳", "🥞", "🍗", "🍖", "🍔", "🍕",
	"🥗", "🥙", "🥪", "🌮", "🌯", "🥘", "🍝", "🍜",
	"🍛", "🍤", "🍙", "🍘", "🍧", "🥧", "🍰", "🍦", "🍮", "🍪",
	"🍩", "🍱", "🧆"
];

function getRandomEmojis() {
	// Копируем массив и перемешиваем
	const shuffled = [...emojiArray].sort(() => Math.random() - 0.5);
	// Выбираем первые count элементов
	return shuffled.slice(0, 4);
}

export default function Home() {
	const [borderRadius, setBorderRadius] = useState(50);
	const [selectedEmojis, setSelectedEmojis] = useState([]);

	const scrollToSection = (target) => {
		const element = document.getElementById(target);
		if (element) {
			window.scrollTo({ top: element.offsetTop - 50, behavior: "smooth" });
		}
	};

	useEffect(() => {
		setSelectedEmojis(getRandomEmojis())
	}, []);

	useEffect(() => {
		if (window.innerWidth <= 576) {
			setBorderRadius(50)
		} else {
			setBorderRadius(100)
		}
	}, [window.innerWidth]);

	return (
		<div className="container">

			<header>
				<div className="d-flex">
					<div className="header-block logo">
						<Image
							src="/logo.svg"
							alt="DineUp лого"
							width={42}
							height={42}
							priority
						/>
					</div>
					<div className="header-block title mobile-hide">
						DineUp
					</div>
					<div className="header-block icon">
						{selectedEmojis[0]}
					</div>
					<div className="header-block icon">
						{selectedEmojis[1]}
					</div>
				</div>

				<div className="d-flex">
					<div className="header-block second mobile-hide">
						<ul>
							<li onClick={() => scrollToSection("whyUs")}>Почему мы</li>

							<li onClick={() => scrollToSection("forRestaraunts")}>Ресторанам</li>
						</ul>
					</div>

					<Link href="/uz" className="header-block language">
						UZ
					</Link>
				</div>
			</header>

			<main>

				<section className="block_01">
					<Squircle cornerRadius={borderRadius} className="image mobile-show">
						<img src="./block_01.png" alt="Картинка приложения DineUp" />
					</Squircle>
					<Squircle cornerRadius={borderRadius} className="card">
						<div className="d-flex gap-10">
							<Image src="./star.svg" alt="Звездочка" width={32} height={36} />
							Скоро доступно в Ташкенте
						</div>

						<div>
							<h1>
								Забронируйте
								столик за секунды.
							</h1>
							<p className="description">
								Cовременный способ забронировать столик в любимом ресторане
							</p>
						</div>

						<button>
							<img src="./play.svg" alt="Play" />
							Посмотреть демо-видео
						</button>

						<div className="top_left" />
						<div className="bottom_right" />
					</Squircle>

					<Squircle cornerRadius={borderRadius} className="image mobile-hide">
						<img src="./block_01.png" alt="Картинка приложения DineUp" />
					</Squircle>
				</section>

				<section className="block_02">
					<h2>
						Что это вообще за <br /> приложение?
					</h2>
					<div className="description">
						<p>
							Мы знаем, как утомляют бесконечные звонки, переписки и ожидание подтверждения брони. DineUp создан для того, чтобы быстро, удобно
							и без лишнего стресса бронировать столик в пару кликов.
						</p>
						<p className="text-white position-relative">
							Поход в ресторан должен быть таким же простым и приятным, как заказ такси или доставки еды.

							<img src="./star.svg" alt="Звездочка" className="icon" width={32} height={32} />
						</p>
						<p>
							DineUp — это когда ужин начинается ещё до того, как вы сели за стол.
						</p>
					</div>
				</section>

				<Squircle cornerRadius={borderRadius}>
					<section className="block_03">
						<div className="d-between mb-50">
							<h3>
								Как это работает?
							</h3>

							<div className="description">
								всего 3 шага
							</div>
						</div>

						<div className="steps">
							<div className="step">
								<img src="./step_1.png" alt="1 Шаг приложения" />

								Откройте приложение
							</div>

							<div className="step">
								<img src="./step_2.png" alt="2 Шаг приложения" />

								Выберите ресторан и время
							</div>

							<div className="step">
								<img src="./step_3.png" alt="3 Шаг приложения" />

								Подтвердите бронирование
							</div>
						</div>

						<div className="top_left" />
						<div className="top_right" />
						<div className="bottom_center" />
					</section>
				</Squircle>

				<section className="block_04" id="whyUs">
					<div className="d-between mb-50">
						<h4>
							Почему выбирают <br />
							DineUp
						</h4>

						<div className="d-flex mobile-hide">
							<div className="block">
								{selectedEmojis[2]}
							</div>
							<div className="block">
								{selectedEmojis[3]}
							</div>
							<div className="block">
								<img src="./logo.svg" alt="DineUp лого" />
							</div>
						</div>
					</div>

					<div className="custom-flex">
						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								📱
							</div>
							<p className="card">
								Всё в одном <br />
								приложении
							</p>
							<p className="description">
								От поиска
								до подтверждения
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								⏱️
							</div>
							<p className="card">
								Мгновенное
								бронирование
							</p>
							<p className="description">
								И без лишней
								коммуникации
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								📍
							</div>
							<p className="card">
								Только самое
								актуальное
							</p>
							<p className="description">
								Актуальные данные
								и свободные слоты
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								🍴
							</div>
							<p className="card">
								Повод <br />
								для всего
							</p>
							<p className="description">
								Подходит для обедов, ужинов, мероприятий
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								💬
							</div>
							<p className="card">
								Уведомления
								и напоминания
							</p>
							<p className="description">
								Мы уведомим вас
								о всех статусах брони
							</p>
						</div>

					</div>
				</section>

				<section className="block_05">
					<Squircle cornerRadius={borderRadius} className="left_card">
						<div className="d-flex gap-10">
							<img src="./star.svg" alt="Звездочка" />
							Приложение будет доступно в AppStore
							и Google Play Store
						</div>

						<div>
							<h5>
								Гостям
							</h5>
							<p className="description">
								Быстро бронируйте столики в любимых местах — удобно и без лишней суеты.
							</p>
						</div>

						<button>
							<img src="./play.svg" alt="Play" />
							Посмотреть демо-видео
						</button>

						<div className="top_right" />
						<div className="bottom_center" />
					</Squircle>

					<Squircle cornerRadius={borderRadius} className="right_card" id="forRestaraunts">
						<div className="d-flex align-items-start gap-10">
							<img src="./star.svg" alt="Звездочка" />
							Мы подключим вам всё что нужно!{')'} <br /> <br />
						</div>

						<div>
							<h5>
								Ресторанам
							</h5>
							<p className="description">
								Получайте подтверждённые брони, управляйте посадкой и автоматизируйте процесс.
							</p>
						</div>

						<Link href="https://t.me/xeoond">
							<button>
								<img src="./chat.svg" alt="Чат" />
								Связаться для сотрудничества
							</button>
						</Link>


						<div className="top_left" />
						<div className="bottom_right" />
					</Squircle>
				</section>

				<section className="block_02">
					<div className="title">
						Забронируйте <br />
						свой столик
					</div>
					<div className="description">
						<p className="text-white position-relative">
							Присоединяйтесь к DineUp и откройте для себя новый уровень комфорта.

							<img src="./star.svg" alt="Звездочка" className="icon" width={32} height={32} />
						</p>
						<p>
							Бронируйте столики без звонков, переписок и лишней суеты — быстро, удобно и в пару кликов. Никаких непредсказуемостей — только чёткое подтверждение и удовольствие от момента.
						</p>

						<p className="text-white">
							Скоро доступно на площадках
						</p>

						<div className="d-flex gap-10">
							<img src="./google_play.svg" alt="Google play" />
							<img src="./app_store.svg" alt="App store" />
						</div>
					</div>
				</section>

				<Squircle cornerRadius={borderRadius}>
					<section className="block_03">
						<div className="d-between mb-50">
							<div className="title">
								Скриншоты
							</div>

							<div className="description">
								v0.1
							</div>
						</div>

						<ScrollContainer className="images">
							<img src="./screen_1.png" alt="Скриншот приложения 1" />
							<img src="./screen_2.png" alt="Скриншот приложения 2" />
							<img src="./screen_3.png" alt="Скриншот приложения 3" />
							<img src="./screen_4.png" alt="Скриншот приложения 4" />
							<img src="./screen_5.png" alt="Скриншот приложения 5" />
							<img src="./screen_6.png" alt="Скриншот приложения 6" />
						</ScrollContainer>
					</section>
				</Squircle>
			</main>

			<Squircle cornerRadius={borderRadius}>
				<footer>
					<div className="custom-flex">
						<img src="./xeond_logo.png" alt="Xeond лого" />

						<div className="xeond">
							<span>designed & developed by</span>
							<div>XEOND© <span className="year">2025</span></div>
						</div>
					</div>

					<div className="social-medias">
						<Link className="social-media" href="https://t.me/Xe0nd" target="_blank" >
							Telegram

							<img src="./telegram.svg" alt="Telegram" width={60} height={60} />
						</Link>

						<Link className="social-media" href="https://www.instagram.com/xeond?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
							Instagram

							<img src="./instagram.svg" alt="Instagram" width={60} height={60} />
						</Link>
					</div>

					<div className="top_left" />
					<div className="bottom_right" />

				</footer>
			</Squircle>
		</div>
	);
}
