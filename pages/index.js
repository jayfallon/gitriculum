import { format } from 'util';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/layout';
import Form from '../components/form';

export default class Home extends React.Component {
	state = {
		username: null,
		user: null,
	};
	handleSubmit = e => {
		e.preventDefault();

		const { username } = this.state;

		fetch(`https://api.github.com/users/${username}`)
			.then(res => res.json())
			.then(user => this.setState({ user }))
			.catch(err => console.error(err));
	};
	render() {
		const { user } = this.state;

		return (
			<Layout>
				<main>
					{!user && <div className="no-user">Type a GitHub username below to see their profile.</div>}
					<form onSubmit={this.handleSubmit}>
						<input
							className="username-input"
							type="text"
							placeholder="Search"
							onChange={e => this.setState({ username: e.target.value })}
						/>
					</form>
					{user && (
						<div className="user-wrapper">
							<div className="user-metadata">
								<div className="user-avatar">
									{user.hireable === true && (
										<div className="hire-me">
											<span>Hire me!</span>
										</div>
									)}
									<img src={user.avatar_url} alt={user.login} />
								</div>
								<div className="user-bio-wrapper">
									<div className="user-info">
										<h3>{user.name}</h3>
									</div>
									<div className="user-location">{user.location}</div>
									<div className="user-bio">{user.bio}</div>
									<div className="user-login">
										(<Link href={user.html_url}>
											<a>{user.login}</a>
										</Link>)
									</div>
								</div>
							</div>
							<div className="user-stats">
								<div className="public-repos">
									<span>Public Repos</span>
									<div>{user.public_repos}</div>
								</div>
								<div className="public-gists">
									<span>Public Gists</span>
									<div>{user.public_gists}</div>
								</div>
								<div className="followers">
									<span>Followers</span>
									<div>{user.followers}</div>
								</div>
								<div className="following">
									<span>Following</span>
									<div>{user.following}</div>
								</div>
							</div>
							<div className="user-contact">
								{user.email && (
									<div className="user-email">
										<span>email</span>
										<Link href={'mailto:' + user.email}>
											<a>{user.email}</a>
										</Link>
									</div>
								)}
								{user.blog && (
									<div className="user-blog">
										<span>blog</span>
										<Link href={user.blog}>
											<a>{user.blog}</a>
										</Link>
									</div>
								)}
								{user.company && (
									<div className="user-company">
										<span>company</span>
										<p>{user.company}</p>
									</div>
								)}
							</div>
						</div>
					)}
				</main>
				<style jsx>{`
					form .username-input {
						background-color: #ffffff;
						padding: 8px 12px;
						border: 1px solid #d2d2d2;
						width: calc(100% - 24px);
					}
					.no-user {
						padding: 12px;
						color: #4a4a4a;
						font-size: 1.55rem;
						text-align: center;
					}
					.user-wrapper {
						padding-top: 20px;
					}
					.user-metadata {
						display: grid;
						grid-template-columns: 207px auto;
					}
					.user-avatar {
						padding: 6px;
						position: relative;
					}
					.hire-me {
						background-image: url(/static/hireme.svg);
						background-repeat: no-repeat;
						background-size: contain;
						width: 50px;
						height: 50px;
						position: absolute;
						top: -8px;
						right: -8px;
					}
					.hire-me span {
						display: none;
					}
					.user-bio-wrapper {
						padding-left: 20px;
					}
					.user-bio-wrapper div {
						margin-top: 14px;
					}
					.user-info {
						margin-top: 0;
						display: flex;
						align-items: center;
					}
					.user-info h3 {
						margin: 0 22px 0 0;
						font-family: 'ff-tisa-sans-web-pro', sans-serif;
						font-size: 2rem;
					}
					.user-location {
						background-image: url(/static/location.svg);
						background-repeat: no-repeat;
						background-size: contain;
						background-position: 0 center;
						padding-left: 30px;
						font-size: 1.125rem;
					}
					.user-login {
						color: #1194f6;
						font-family: 'ff-tisa-sans-web-pro', sans-serif;
						font-weight: bold;
						font-size: 1.25rem;
					}
					.user-login a {
						color: #1194f6;
						text-decoration: none;
					}
					.user-bio {
						font-size: 1.125rem;
					}
					.user-stats {
						margin-top: 45px;
						padding-bottom: 12px;
						border-bottom: 1px solid #d2d2d2;
						display: grid;
						grid-template-columns: auto auto auto auto;
					}
					.user-stats > div {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
					.user-stats > div > span,
					.user-contact > div > span {
						color: #a4a4a4;
						font-family: 'ff-tisa-sans-web-pro', sans-serif;
						font-weight: bold;
						font-size: 0.875rem;
						text-transform: uppercase;
						text-align: center;
					}
					.user-stats > div > div {
						color: #1194f6;
						font-family: 'ff-tisa-sans-web-pro', sans-serif;
						font-weight: bold;
						font-size: 2rem;
					}
					.user-contact {
						margin-top: 50px;
						display: flex;
						justify-content: space-around;
					}
					.user-contact > div {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
					.user-contact p {
						margin: 6px 0 0 0;
					}
					.user-contact a {
						margin: 6px 0 0 0;
						color: #1194f6;
						font-size: 1.125rem;
						text-decoration: none;
					}
					@media screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
						.user-metadata {
							grid-template-columns: auto;
						}
						.hire-me {
							width: 80px;
							height: 80px;
						}
						.user-avatar img {
							width: 333px;
						}
						.user-stats {
							grid-template-columns: auto auto;
						}
						.user-stats > div > div {
							margin-bottom: 14px;
						}
					}
					@media screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
						.user-metadata {
							grid-template-columns: auto;
						}
						.hire-me {
							width: 80px;
							height: 80px;
						}
						.user-avatar img {
							width: 330px;
						}
						.user-stats {
							grid-template-columns: auto auto;
						}
						.user-stats > div > div {
							margin-bottom: 14px;
						}
					}
					@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
						.user-metadata {
							grid-template-columns: auto;
						}
						.hire-me {
							width: 80px;
							height: 80px;
						}
						.user-avatar img {
							width: 315px;
						}
						.user-stats {
							grid-template-columns: auto auto;
						}
						.user-stats > div > div {
							margin-bottom: 14px;
						}
					}
					@media screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {
						form .username-input {
							background-color: #ffffff;
							padding: 8px 12px;
							border: 1px solid #d2d2d2;
							width: 100px;
						}
						.hire-me {
							display: none;
						}
						.user-avatar img {
							width: 300px;
						}
					}
					@media screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
						.user-metadata {
							grid-template-columns: auto;
						}
						.hire-me {
							width: 80px;
							height: 80px;
						}
						.user-avatar img {
							width: 315px;
						}
						.user-stats {
							grid-template-columns: auto auto;
						}
						.user-stats > div > div {
							margin-bottom: 14px;
						}
					}
				`}</style>
			</Layout>
		);
	}
}
