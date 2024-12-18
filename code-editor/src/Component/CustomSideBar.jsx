import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';
// import tree from "../../file.json";

function CustomSidebar({tree}) {
	const [collapsed, setCollapsed] = React.useState(false);

	const generateMenuItems = (tree) => {
		const traverse = (node, key) => {
			// If the node is null, it's a file, return a MenuItem
			if (node === null) {
				return <MenuItem prefix='📋' key={key}>{key}</MenuItem>;
			}

			console.log(menuClasses.button);

			// Ensure the node is an object before calling Object.entries()
			if (typeof node === "object" && node !== undefined && node !== null) {
				return (
					<SubMenu key={key} label={key}
					onClick={() => {
						console.log("Hello")
					  }}
						rootStyles={{
							// Folder Button Styles for the parent ("Charts")
							['& > .' + menuClasses.button]: {
								backgroundColor: '#111827', // Dark background for the folder
								color: 'orange', // White text for the folder
								'&:hover': {
									backgroundColor: '#1f2937', // Dark gray on hover
									color: 'black', // Black text when hovered
								},
							},

							// Submenu Content Container (doesn't change on hover)
							['.' + menuClasses.subMenuContent]: {
								backgroundColor: '#111827', // Dark background for submenu
								color: 'white', // Default text color for subitems
								'&:hover': {
									backgroundColor: '#1f2937', // Dark gray on hover for subitems
									color: 'black', // Keep white text for subitems
								},
							},
						}}
						>
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

export default CustomSidebar;

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