import React, { useEffect } from "react";
import ReactAce from "react-ace";
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import tree from "../file.json";


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

function AppSideBar() {
	const [collapsed, setCollapsed] = React.useState(false);

	return (
		// 

		<div style={{ display: 'flex', height: '100%', minHeight: '400px', fontWeight: 'bold', overflow: 'auto' }}>
			<Sidebar backgroundColor="#111827" collapsed={collapsed}>
				<main style={{ padding: 10 }}>
					<div>
						<button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
							🗂
						</button>
					</div>
				</main>
				<Menu renderExpandIcon={({ open }) => <span className='text-lg font-bold'>{open ? '-' : '+'}</span>}
					menuItemStyles={{
						button: ({ level, active, disabled }) => {
							// only apply styles on first level elements of the tree
							if (level === 0)
								return {
									color: disabled ? '#ababab' : '#fff',
									backgroundColor: active ? '#969696' : '#080808',
								};
						},
					}}
				>
					{/* <SubMenu label="Charts" defaultOpen> */}
					<SubMenu
						label="Charts"
						rootStyles={{
							// Folder Button Styles for the parent ("Charts")
							['& > .' + menuClasses.button]: {
								backgroundColor: '#111827', // Dark background for the folder
								color: 'white', // White text for the folder
								'&:hover': {
									backgroundColor: '#1f2937', // Dark gray on hover
									color: 'black', // Black text when hovered
								},
							},

							// Submenu Content Container (doesn't change on hover)
							['.' + menuClasses.subMenuContent]: {
								backgroundColor: '#111827', // Dark background for submenu
								color: 'white', // Default text color for subitems
							},

							// Subitem Styles (Line charts, Bar charts)
							['.' + menuClasses.subMenuContent + ' .ps-menuitem-root']: {
								backgroundColor: '#111827', // Default background for subitems
								color: 'white', // Default text color for subitems
								'&:hover': {
									backgroundColor: '#1f2937', // Dark gray on hover for subitems
									color: 'white', // Keep white text for subitems
								},
							},
						}}
					>
						<SubMenu
							label="NewCharts"
							rootStyles={{
								// Styles for the folder button (Parent "NewCharts")
								['& > .' + menuClasses.button]: {
									backgroundColor: '#111827', // Dark background
									color: 'white', // White text for "NewCharts"
									'&:hover': {
										backgroundColor: '#1f2937', // Dark gray on hover for "NewCharts"
										color: 'black', // Black text for "NewCharts" when hovered
									},
								},

								// Submenu content container (Submenu items)
								['.' + menuClasses.subMenuContent]: {
									backgroundColor: '#111827', // Dark background for submenu
									color: 'white', // Default text color
								},

								// Subitem styles (Line charts, Bar charts)
								['.' + menuClasses.subMenuContent + ' .ps-menuitem-root']: {
									backgroundColor: '#111827', // Default subitem background
									color: 'white', // Default text color
									'&:hover': {
										backgroundColor: '#1f2937', // Dark gray on hover
										color: 'black', // White text on hover (to avoid parent text color change)
									},
								},
							}}
						>
							<MenuItem>Line charts</MenuItem>
							<MenuItem>Bar charts</MenuItem>
						</SubMenu>
					</SubMenu>

					<SubMenu label="Charts 2" defaultOpen>
						<MenuItem> Pie charts</MenuItem>
						<MenuItem> Line charts</MenuItem>
						<MenuItem> Bar charts</MenuItem>
					</SubMenu>

					<MenuItem suffix="🔥">Documentation</MenuItem>
					<MenuItem active > Calendar</MenuItem>
					<MenuItem disabled> E-commerce</MenuItem>
					<MenuItem component="div"> something</MenuItem>
					<MenuItem prefix="🔥"> Examples</MenuItem>
				</Menu>
			</Sidebar>

		</div >
	);
}

function CustomSidebar() {
	const [collapsed, setCollapsed] = React.useState(false);

	const generateMenuItems = (tree) => {
		const traverse = (node, key) => {
			// If the node is null, it's a file, return a MenuItem
			if (node === null) {
				return <MenuItem prefix='📁' key={key}>{key}</MenuItem>;
			}

			// Ensure the node is an object before calling Object.entries()
			if (typeof node === "object" && node !== undefined && node !== null) {
				return (
					<SubMenu key={key} label={key}
						rootStyles={{
							// Folder Button Styles for the parent ("Charts")
							['& > .' + menuClasses.button]: {
								backgroundColor: '#111827', // Dark background for the folder
								color: 'white', // White text for the folder
								'&:hover': {
									backgroundColor: '#1f2937', // Dark gray on hover
									color: 'black', // Black text when hovered
								},
							},

							// Submenu Content Container (doesn't change on hover)
							['.' + menuClasses.subMenuContent]: {
								backgroundColor: '#111827', // Dark background for submenu
								color: 'white', // Default text color for subitems
							},

							// Subitem Styles (Line charts, Bar charts)
							['.' + menuClasses.subMenuContent + ' .ps-menu-button']: {
								backgroundColor: '#111827', // Default background for subitems
								color: 'white', // Default text color for subitems
								'&:hover': {
									backgroundColor: '#1f2937', // Dark gray on hover for subitems
									color: 'white', // Keep white text for subitems
								},
							},
						}}>
						{Object.entries(node).map(([childKey, childNode]) => traverse(childNode, childKey))}
					</SubMenu>
				);
			}

			// If the node is neither null nor an object, return null (or handle as needed)
			return null;
		};

		// Ensure the tree itself is a valid object
		if (typeof tree !== "object" || tree === null) {
			console.error("Invalid tree structure:", tree);
			return null;
		}

		return Object.entries(tree).map(([key, node]) => traverse(node, key));
	};

	function CustomItems() {
		return (
			<Menu renderExpandIcon={({ open }) => <span className='text-lg font-bold'>{open ? '-' : '+'}</span>}
				menuItemStyles={{
					button: ({ level, active, disabled }) => {
						// only apply styles on first level elements of the tree
						if (level === 0)
							return {
								color: disabled ? '#ababab' : '#fff',
								backgroundColor: active ? '#969696' : '#080808',
							};
					},
				}}
			>

				{/* run a map function on the folder tree to get a folder structure */}
				{generateMenuItems(tree)}

			</Menu>
		);
	}

	return (
		<div style={{ display: 'flex', height: '100%', fontWeight: 'bold', overflow: 'hidden' }}>
			<Sidebar backgroundColor="#111827" collapsed={collapsed} style={{
				height: '100%', // Sidebar should match the parent height
				overflowY: 'auto', // Scroll within the sidebar for excess items
			}}>
				<main style={{ padding: 10 }}>
					<div>
						<button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
							🗂
						</button>
					</div>
				</main>
				<CustomItems />
			</Sidebar>

		</div>
	);
}

function App() {
	const code = "var message = 'Monaco Editor!' \nconsole.log(message);";
	function onChange(newValue) {
		console.log("change", newValue);
	}

	// console.log(tree)
	function handleClick() {
		alert();
	}
	return (

		<>
			<div id="code-editor" className="flex flex-row h-screen w-screen">
				<div id="side-bar" className="flex-none bg-red-800 text-white">
					<CustomSidebar />
					{/* <AppSideBar /> */}
				</div>

				<div id="editor" className="flex-grow flex">
					<ReactAce
						name="ace-editor"
						mode="javascript"
						theme="dracula"
						showPrintMargin={true}
						setReadOnly={false}
						fontSize={18}
						placeholder="Code here some Hello World!"
						value="console.log(`Hello World`)"
						showGutter={true}
						style={{
							height: "100%", // Full height of the container
							width: "100%",  // Full width of the container
						}}
						highlightActiveLine={true}
						onChange={onChange}
					/>
				</div>

				<div className="flex-none bg-gray-900 text-white">
					<AppTerminal />
				</div>
			</div>
		</>

	);
}

export default App;