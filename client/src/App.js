import TextEditor from './TextEditor';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { ObjectId } from 'bson';

function App() {
	const id = new ObjectId();

	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Redirect to={`/documents/${id.toHexString()}`} />
				</Route>
				<Route path="/documents/:id">
					<TextEditor />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
