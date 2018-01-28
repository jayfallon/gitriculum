import { format } from "util"
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'


export default class Home extends React.Component {
    state = {
        username: null,
        user: null
    }
    handleSubmit = e => {
        e.preventDefault()

        const {username} = this.state

        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(user => this.setState({user}))
            .catch(err => console.error(err))
    }
    render() {
        const {user} = this.state
        return (
            <div>
                <Head>
                    <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                {user && (
                    <div>
                        <img src={user.avatar_url} alt={user.login} width={50}/>
                        <h3>{user.name}</h3>
                        <p>{user.company}</p>
                    </div>
                )}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="GitHub username…" onChange={e => this.setState({username: e.target.value})}/>
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
}
