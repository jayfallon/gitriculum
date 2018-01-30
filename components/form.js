const Form = () => (
	<form onSubmit={this.handleSubmit}>
		<input
			className="username-input"
			type="text"
			placeholder="Type a GitHub username and press 'enter'"
			onChange={e => this.setState({ username: e.target.value })}
		/>
	</form>
);

export default Form;
