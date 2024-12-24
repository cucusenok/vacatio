import './App.scss';
import EditorPage from "@/cv/editor/page";
import {AutosaveForm} from "@/app/components/home-cv/home-cv/autosave-form";

const user = {
	"id": "e2b7f9f7-818d-4505-bbb4-9e3bda81fa9d",
	"name": "John Doe",
	"jobTitle": "Software Engineer",
	"summary": "Experienced full-stack developer with expertise in JavaScript and Python.",
	"image": "https://example.com/images/john_doe.jpg",
	"email": "john.doe@example.com",
	"createdAt": "2024-12-16T12:34:56Z",
	"updatedAt": "2024-12-16T12:34:56Z",
	"contacts": [
		{
			"id": "f345dfe9-89fc-47d4-9b34-1cd4cf3d6354",
			"name": "LinkedIn",
			"value": "https://linkedin.com/in/johndoe",
			"icon": "linkedin-icon.svg"
		}
	],
	"skills": [
		{
			"id": "b512d394-bc98-4909-88a9-372e073e48c0",
			"name": "JavaScript",
			"value": "Advanced",
			"icon": "javascript-icon.svg"
		},
		{
			"id": "9a3d4cd1-b591-44f7-bb27-1c3bfe36f5e7",
			"name": "Python",
			"value": "Intermediate",
			"icon": "python-icon.svg"
		}
	],
	"languages": [
		{
			"id": "fd0f4281-bd1b-47b2-a219-cc7ac357b643",
			"name": "English",
			"value": "Fluent"
		}
	],
	"educations": [
		{
			"id": "2c3e4a56-fb88-4dfd-8c79-2b6a2bc9f49f",
			"place": "University of Example",
			"period": "2015-2019",
			"image": "university-image.jpg",
			"title": "Bachelor of Science in Computer Science"
		}
	],
	"experiences": [
		{
			"id": "de343ba5-d8b4-4f92-b7fa-b6358df8acbf",
			"place": "Tech Corp",
			"period": "2020-2023",
			"originalDescription": "Developed web applications and optimized existing software systems.",
			"image": "tech-corp-logo.png",
			"title": "Full Stack Developer",
			"userBulletPoints": [
				{
					"value": "Led a team of 5 developers to build a customer-facing app.",
					"userExperienceId": "de343ba5-d8b4-4f92-b7fa-b6358df8acbf"
				}
			]
		}
	]
}


function App(): JSX.Element {
	return <AutosaveForm user={user} />
}

export default App;
