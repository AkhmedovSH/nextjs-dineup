
import "./styles/bootstrap.css";
import "./styles/global.css";
import "./styles/styles.css";
import "./styles/adaptive.css";

export const metadata = {
	title: "DineUp",
	description: "Резерв столов",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body>
				{children}
			</body>
		</html>
	);
}
