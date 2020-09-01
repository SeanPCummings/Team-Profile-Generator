const defaultEmpl = (role) => [
	{
		type: "input",
		message: `What is the ${role}'s name?`,
		name: "name",
	},
	{
		type: "input",
		message: `What is the ${role}'s id?`,
		name: "id",
	},
	{
		type: "input",
		message: `What is the ${role}'s Email?`,
		name: "email",
	},
];

module.exports = {
	Manager: [
		...defaultEmpl("Manager"),
		{
			type: "input",
			message: "What is the Manager's office number?",
			name: "other",
		},
	],
	Engineer: [
		...defaultEmpl("Engineer"),
		{
			type: "input",
			message: "What is the Endingeer's GitHub?",
			name: "other",
		},
	],
	Intern: defaultEmpl("Intern").concat([
		{
			type: "input",
			message: "What is the Intern's school?",
			name: "other",
		},
	]),
	selectRole: {
		name: "role",
		type: "list",
		message: "What Employee would you like to add?",
		choices: ["Engineer", "Intern", "Exit"],
	},
};