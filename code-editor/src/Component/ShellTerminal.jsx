import React, { useEffect} from "react";
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

function AppTerminal() {
	const commandHandler = (text) => {
		let response;
		let argsIndex = text.indexOf(' ');
		let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

		switch (command) {
			case 'date':
				response = 'Today is ' + new Date().toDateString();
				break;

			case 'greet':
				response = 'Hola ' + text.substring(argsIndex + 1) + '!';
				break;

			case 'random':
				response = Math.floor(Math.random() * 100);
				break;

			case 'clear':
				response = null;
				break;

			default:
				response = 'Unknown command: ' + command;
				break;
		}

		if (response)
			TerminalService.emit('response', response);
		else
			TerminalService.emit('clear');
	};

	useEffect(() => {
		TerminalService.on('command', commandHandler);

		return () => {
			TerminalService.off('command', commandHandler);
		};
	}, []);

	return (
		<div className="flex-grow card terminal-demo ">
			<Terminal
				welcomeMessage={`Shell ⌨`}
				prompt="user@13232ndfhdsd$"
				pt={{
					root: 'bg-gray-900 text-white border-none',
					prompt: 'text-gray-400 mr-2 font-bold',
					command: 'text-primary-300 font-bold',
					response: 'text-primary-300 font-bold',
					commandText: 'outline-none font-bold'
				}}
			/>
		</div>
	);
}

export default AppTerminal;