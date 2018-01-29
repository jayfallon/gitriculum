import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';

const Layout = props => (
	<div className="wrapper">
		<Head>
			<meta charset="utf-8" />
			<meta http-equiv="x-ua-compatible" content="ie=edge" />
			<title>Gitriculum</title>
			<meta name="description" content="SPA for oogling GitHub users" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="stylesheet" href="/static/normalize.css" />
			<link rel="stylesheet" href="https://use.typekit.net/vfj8tkg.css" />
			<link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
			<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png" />
			<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />
			<link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
			<link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />
			<link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png" />
			<link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
			<link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
			<link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
			<link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
			<link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
			<link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
			<link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
			<meta name="application-name" content="&nbsp;" />
			<meta name="msapplication-TileColor" content="#FFFFFF" />
			<meta name="msapplication-TileImage" content="mstile-144x144.png" />
			<meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
			<meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
			<meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
			<meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
		</Head>
		<Nav />
		{props.children}
		<Footer />
		<style jsx global>{`
			html {
				height: 100%;
			}
			body {
				background-color: #1194f6;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%230c71bb' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
				height: 100%;
				color: #4a4a4a;
				font-size: 16px;
				font-family: 'calluna', serif;
			}
			.wrapper {
				background: #fff;
				padding: 16px;
			}
			@media screen and (min-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 1) {
				.wrapper {
					margin: 20px auto 0;
					width: 650px;
				}
			}

			@media screen and (min-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
				.wrapper {
					margin: 20px auto 0;
					width: 650px;
				}
			}
		`}</style>
	</div>
);

export default Layout;
