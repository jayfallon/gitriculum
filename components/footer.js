import Link from 'next/link';

const Footer = () => (
	<footer>
		<div className="copyright-info">
			&copy;2018 -{' '}
			<Link href="https://undenary.com">
				<a>Undenary Creative</a>
			</Link>
		</div>
		<style jsx>{`
			footer {
				height: 80px;
				font-size: 0.9375rem;
				display: flex;
				justify-content: center;
				align-items: flex-end;
			}
			footer a {
				color: #4a4a4a;
				text-decoration: none;
			}
		`}</style>
	</footer>
);

export default Footer;
