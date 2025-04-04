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
							<li onClick={() => scrollToSection("whyUs")}>Nega biz</li>

							<li onClick={() => scrollToSection("forRestaraunts")}>Restoranlar uchun</li>
						</ul>
					</div>

					<Link href="/" className="header-block language">
						RU
					</Link>
				</div>
			</header>

			<main>

				<section className="block_01">
					<div className="image mobile-show">
						<img src="/block_01.png" alt="Картинка приложения DineUp" />
					</div>
					<div className="card">
						<div className="d-flex gap-10">
							<Image src="/star.svg" alt="Звездочка" width={32} height={36} />
							Tez kunda Toshkentda
						</div>

						<div>
							<h1>
								Bir necha soniya ichida stolni bron qiling.
							</h1>
							<p className="description">
								Sevimli restoraningizda stolni bron qilishning zamonaviy usuli
							</p>
						</div>

						<button>
							<img src="/play.svg" alt="Play" />
							Demo videoni tomosha qiling
						</button>

						<div className="top_left" />
						<div className="bottom_right" />
					</div>

					<div className="image mobile-hide">
						<img src="/block_01.png" alt="Картинка приложения DineUp" />
					</div>
				</section>

				<section className="block_02">
					<h2>
						Bu qanday <br /> ilova?
					</h2>
					<div className="description">
						<p>
							Biz cheksiz qo'ng'iroqlar qilish, xabarlar yuborish va bronni tasdiqlashni kutish qanchalik charchaganligini bilamiz. DineUp bir necha marta bosish orqali stolni bron qilishni tez, qulay va stresssiz qilish uchun yaratilgan.
						</p>
						<p className="text-white position-relative">
							Restoranga borish taksiga buyurtma berish yoki oziq-ovqat yetkazib berish kabi oson va yoqimli bo'lishi kerak.

							<img src="/star.svg" alt="Звездочка" className="icon" width={32} height={32} />
						</p>
						<p>
							DineUp - bu kechki ovqat siz stolga o'tirishdan oldin boshlanadi.
						</p>
					</div>
				</section>

				<section className="block_03">
					<div className="d-between mb-50">
						<h3>
							U qanday ishlaydi?
						</h3>

						<div className="description">
							faqat 3 qadam
						</div>
					</div>

					<div className="steps">
						<div className="step">
							<img src="/step_1.png" alt="1 Шаг приложения" />

							Ilovani oching
						</div>

						<div className="step">
							<img src="/step_2.png" alt="2 Шаг приложения" />

							Restoran va vaqtni tanlang
						</div>

						<div className="step">
							<img src="/step_3.png" alt="3 Шаг приложения" />

							Bandlovingizni tasdiqlang
						</div>
					</div>

					<div className="top_left" />
					<div className="top_right" />
					<div className="bottom_center" />
				</section>

				<section className="block_04" id="whyUs">
					<div className="d-between mb-50">
						<h4>
							Nima uchun <br />
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
								<img src="/logo.svg" alt="DineUp лого" />
							</div>
						</div>
					</div>

					<div className="custom-flex">
						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								📱
							</div>
							<p className="card">
								Hammasi bitta <br />
								ilovada
							</p>
							<p className="description">
								Qidiruvdan tasdiqlashgacha
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								⏱️
							</div>
							<p className="card">
								Tezkor bron qilish
							</p>
							<p className="description">
								Va keraksiz aloqasiz
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								📍
							</div>
							<p className="card">
								Faqat eng dolzarb
							</p>
							<p className="description">
								Joriy ma'lumotlar va bepul slotlar
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								🍴
							</div>
							<p className="card">
								Hamma narsaga sabab
							</p>
							<p className="description">
								Tushlik, kechki ovqat, tadbirlar uchun javob beradi
							</p>
						</div>

						<div className="d-center flex-column gap-20 w-100">
							<div className="icon">
								💬
							</div>
							<p className="card">
								Bildirishnomalar va eslatmalar
							</p>
							<p className="description">
								Biz sizni barcha bronlash holatlari haqida xabardor qilamiz.
							</p>
						</div>

					</div>
				</section>

				<section className="block_05">
					<div className="left_card">
						<div className="d-flex gap-10">
							<img src="/star.svg" alt="Звездочка" />
							Ilova AppStore va Google Play do'konlarida mavjud bo'ladi
						</div>

						<div>
							<h5>
								Mehmonlar uchun
							</h5>
							<p className="description">
								O'zingiz yoqtirgan joylardan tezda stollarni bron qiling - qulay va keraksiz shovqinsiz.
							</p>
						</div>

						<button>
							<img src="/play.svg" alt="Play" />
							Demo videoni tomosha qiling
						</button>

						<div className="top_right" />
						<div className="bottom_center" />
					</div>

					<div className="right_card" id="forRestaraunts">
						<div className="d-flex gap-10">
							<img src="/star.svg" alt="Звездочка" />
							Biz sizni barcha kerakli narsalar bilan bog'laymiz!!{')'}
						</div>

						<div>
							<h5>
								Restoranlar uchun
							</h5>
							<p className="description">
								Получайте подтверждённые брони, управляйте посадкой и автоматизируйте процесс.
							</p>
						</div>

						<Link href="https://t.me/xeoond">
							<button>
								<img src="/chat.svg" alt="Чат" />
								Hamkorlik uchun murojaat qiling
							</button>
						</Link>


						<div className="top_left" />
						<div className="bottom_right" />
					</div>
				</section>

				<section className="block_02">
					<div className="title">
						Stolingizni  <br />
						bron qiling
					</div>
					<div className="description">
						<p className="text-white position-relative">
							DineUp-ga qo'shiling va qulaylikning yangi darajasini kashf eting.

							<img src="/star.svg" alt="Звездочка" className="icon" width={32} height={32} />
						</p>
						<p>
							Jadvallarni qo'ng'iroqlar, yozishmalar va keraksiz shov-shuvlarsiz bron qiling - tez, qulay va bir necha marta bosish. Hech qanday oldindan aytib bo'lmaydigan narsa - faqat aniq tasdiqlash va hozirgi paytdan zavqlanish.						</p>

						<p className="text-white">
							Tez orada platformalarda
						</p>

						<div className="d-flex gap-10">
							<img src="/google_play.svg" alt="Google play" />
							<img src="/app_store.svg" alt="App store" />
						</div>
					</div>
				</section>

				<section className="block_03">
					<div className="d-between mb-50">
						<div className="title">
							Skrinshotlar
						</div>

						<div className="description">
							v0.1
						</div>
					</div>

					<ScrollContainer className="images">
						<img src="/screen_1.png" alt="Скриншот приложения 1" />
						<img src="/screen_2.png" alt="Скриншот приложения 2" />
						<img src="/screen_3.png" alt="Скриншот приложения 3" />
						<img src="/screen_4.png" alt="Скриншот приложения 4" />
						<img src="/screen_5.png" alt="Скриншот приложения 5" />
						<img src="/screen_6.png" alt="Скриншот приложения 6" />
					</ScrollContainer>
				</section>

			</main>

			<footer>
				<div className="custom-flex">
					<img src="/xeond_logo.png" alt="Xeond лого" />

					<div className="xeond">
						<span>designed & developed by</span> <br />
						XEOND© <span className="year">2025</span>
					</div>
				</div>

				<div className="social-medias">
					<Link className="social-media" href="https://t.me/Xe0nd" target="_blank" >
						Telegram

						<img src="/telegram.svg" alt="Telegram" width={60} height={60} />
					</Link>

					<Link className="social-media" href="https://www.instagram.com/xeond?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
						Instagram

						<img src="/instagram.svg" alt="Instagram" width={60} height={60} />
					</Link>
				</div>

				<div className="top_left" />
				<div className="bottom_right" />

			</footer>
		</div>
	);
}
