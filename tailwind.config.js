module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '0px 104px 80px 32px rgba(33, 33, 33, 0.03)'
			},
			colors: {
				'cactus-dark-brown': '#212121',
				'light-white': '#ffffff'
			},
			backgroundImage: {
				headerPicture: "url('/src/img/HeaderPicture.jpg')",
				whyUsPicture: "url('/src/img/WhyUs.jpg')",
				servicePicture: "url('/src/img/Service3.jpg')"
			}
		}
	},
	plugins: []
};
