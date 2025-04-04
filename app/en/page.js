"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollContainer from 'react-indiana-drag-scroll'

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
							<li onClick={() => scrollToSection("whyUs")}>Why us</li>

							<li onClick={() => scrollToSection("forRestaraunts")}>For restaurants</li>
						</ul>
					</div>

					<Link href="/uz" className="header-block language">
						UZ
					</Link>
				</div>
			</header>

			<main>

				<section className="block_01">
					<div className="image mobile-show">
						<img src="./block_01.png" alt="Картинка приложения DineUp" />
					</div>
					<div className="card">
						<div className="d-flex gap-10">
							<Image src="./star.svg" alt="Звездочка" width={32} height={36} />
							Coming soon in Tashkent
						</div>

						<div>
							<h1>
								Book a table in seconds.
							</h1>
							<p className="description">
								A modern way to reserve a table at your favorite restaurant
							</p>
						</div>

						<button>
							<img src="./play.svg" alt="Play" />
							Watch demo video
						</button>

						<div className="top_left" />
						<div className="bottom_right" />
					</div>

					<div className="image mobile-hide">
						<img src="./block_01.png" alt="Картинка приложения DineUp" />
					</div>
				</section>

				<section className="block_02">
					<h2>
						What kind of app is this <br /> anyway?
					</h2>
					<div className="description">
						<p>
							We know how tiring it is to call, text and wait for a reservation confirmation. DineUp is designed to make it quick, convenient and stress-free to book a table in a couple of clicks.
						</p>
						<p className="text-white position-relative">
							Going to a restaurant should be as easy and enjoyable as ordering a taxi or food delivery.

							<img src="./star.svg" alt="Звездочка" className="icon" width={32} height={32} />
						</p>
						<p>
							DineUp is when dinner starts before you even sit down at the table.
						</p>
					</div>
				</section>

				<section className="block_03">
					<div className="d-between mb-50">
						<h3>
							How does this work?
						</h3>

						<div className="description">
							just 3 steps
						</div>
					</div>

					<div className="steps">
						<div className="step">
							<img src="./step_1.png" alt="1 Шаг приложения" />

							Open the application
						</div>

						<div className="step">
							<img src="./step_2.png" alt="2 Шаг приложения" />

							Select a restaurant and time
						</div>

						<div className="step">
							<img src="./step_3.png" alt="3 Шаг приложения" />

							Confirm your booking
						</div>
					</div>

					<div className="top_left" />
					<div className="top_right" />
					<div className="bottom_center" />
				</section>

				<section className="block_04" id="whyUs">
					<div className="d-between mb-50">
						<h4>
							Why choose <br />
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
								All in one <br />
								app
							</p>
							<p className="description">
								From search to confirmation
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								⏱️
							</div>
							<p className="card">
								Instant booking
							</p>
							<p className="description">
								And without unnecessary communication
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								📍
							</div>
							<p className="card">
								Only the most relevant
							</p>
							<p className="description">
								Current data and free slots
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								🍴
							</div>
							<p className="card">
								A reason <br />
								for everything
							</p>
							<p className="description">
								Suitable for lunches, dinners, events
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								💬
							</div>
							<p className="card">
								Notifications and reminders
							</p>
							<p className="description">
								We will notify you of all booking statuses.
							</p>
						</div>

					</div>
				</section>

				<section className="block_05">
					<div className="left_card">
						<div className="d-flex gap-10">
							<img src="./star.svg" alt="Звездочка" />
							The application will be available in the AppStore and Google Play Store
						</div>

						<div>
							<h5>
								For guests
							</h5>
							<p className="description">
								Quickly book tables at your favorite places - conveniently and without unnecessary fuss.
							</p>
						</div>

						<button>
							<img src="./play.svg" alt="Play" />
							Watch demo video
						</button>

						<div className="top_right" />
						<div className="bottom_center" />
					</div>

					<div className="right_card" id="forRestaraunts">
						<div className="d-flex gap-10">
							<img src="./star.svg" alt="Звездочка" />
							We will connect you with everything you need!{')'}
						</div>

						<div>
							<h5>
								For restaurants
							</h5>
							<p className="description">
								Get confirmed bookings, manage boarding and automate the process.
							</p>
						</div>

						<Link href="https://t.me/xeoond">
							<button>
								<img src="./chat.svg" alt="Чат" />
								Contact for cooperation
							</button>
						</Link>


						<div className="top_left" />
						<div className="bottom_right" />
					</div>
				</section>

				<section className="block_02">
					<div className="title">
						Book your <br />
						table
					</div>
					<div className="description">
						<p className="text-white position-relative">
							Join DineUp and discover a new level of comfort.

							<img src="./star.svg" alt="Звездочка" className="icon" width={32} height={32} />
						</p>
						<p>
							Book tables without calls, correspondence and unnecessary fuss - quickly, conveniently and in a couple of clicks. No unpredictability - only clear confirmation and pleasure from the moment.
						</p>

						<p className="text-white">
							Coming soon to platforms
						</p>

						<div className="d-flex gap-10">
							<img src="./google_play.svg" alt="Google play" />
							<img src="./app_store.svg" alt="App store" />
						</div>
					</div>
				</section>

				<section className="block_03">
					<div className="d-between mb-50">
						<div className="title">
							Screenshots
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

			</main>

			<footer>
				<div className="custom-flex">
					<img src="./xeond_logo.png" alt="Xeond лого" />

					<div className="xeond">
						<span>designed & developed by</span> <br />
						XEOND© <span className="year">2025</span>
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
		</div>
	);
}
