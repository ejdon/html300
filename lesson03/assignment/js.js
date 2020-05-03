//Create objects from JSON file
const individuals = [
    { name: "Steve Smith", jobTitle: "Project Manager", company: "Front End Dev Co", experience: "3 years", school: "UW", major: "Marketing", email: "steve@fedc.com", linkedInUrl: "steve.linkedinprofile.com", codeLanguages: "HTML, CSS, JavaScript, .NET, C#"},
    { name: "Aaron Katz", jobTitle: "Full Stack Developer", company: "Web Sites and More", experience: "5 years", school: "SU", major: "Computer Science", email: "aaronNotMyemail@uw.com", linkedInUrl: "aaron.linkedinprofile.com", codeLanguages: "HTML, CSS, JavaScript, PHP, Twig"},
    { name: "Kyle Hendricks", jobTitle: "Starting Pitcher", company: "Chicago Cubs", experience: "12 years", school: "USC", major: "Pitching", email: "kyleH@cubs.com", linkedInUrl: "kyle.linkedinprofile.com", codeLanguages: "HTML, CSS, JavaScript, Ruby, Rails"},
    { name: "Michael Jordan", jobTitle: "Point Guard", company: "Chicago Bulls", experience: "20 years", school: "UNC", major: "Trash Talking", email: "mJordan@bulls.com", linkedInUrl: "mJordan.linkedinprofile.com", codeLanguages: "HTML, CSS, JavaScript, Java, Spring"},
];

//Create variable with HTML
const myPage = `
    ${individuals.map(individuals => `
      <main class="main">
        <div class="container">
          <div class="photo">
          <img src="img/unsplash-headshot.jpg" class="image" alt="Headshot for Steve Smith in blue shirt">
          <h1 class="name">${individuals.name}</h1>
          <h2 class="title">${individuals.jobTitle}</h2>
        </div>
      <div class="info">
          <p><strong>Company:</strong> ${individuals.company}</p>
          <p><strong>Experience:</strong> ${individuals.experience}</p>
          <p><strong>School:</strong> ${individuals.school}</p>
          <p><strong>Major:</strong> ${individuals.major}</p>
          <p><strong>Email:</strong> ${individuals.email}</p>
          <div class="linkedin">
          <img src="img/linkedin.svg" class="linkedin-image" alt="LinkedIn logo">
          <p>${individuals.linkedInUrl}</p>
          </div>
          <p><strong>Code languages:</strong> ${individuals.codeLanguages}</p>
      </div>
      </div>
    </main>`
    )}
`;
//Adding to document
$(".template-hook").append(myPage);
