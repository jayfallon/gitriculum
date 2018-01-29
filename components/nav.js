import Link from 'next/link';

const Nav = () => (
	<nav>
		<h1>
			<Link href="/">
				<a>
					<span>Gitriculum</span>
				</a>
			</Link>
		</h1>
		<style jsx>{`
			nav {
				height: 75px;
				display: flex;
				justify-content: center;
			}
			h1 {
				background-image: url(/static/logo.svg);
				background-repeat: no-repeat;
				background-size: cover;
				margin: 0;
				width: 180px;
				height: 40px;
				position: relative;
			}
			a {
				width: 180px;
				height: 40px;
				position: absolute;
			}

			span {
				display: none;
			}
		`}</style>
	</nav>
);

export default Nav;
