// Projects Array
const projects = [
  {
    title: "Cool Project",
    screenshot: "images/code_image.jpeg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },

  {
    title: "Cool Project",
    screenshot: "images/code_image.jpeg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "images/code_image.jpeg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "images/code_image.jpeg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "images/code_image.jpeg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
];

// Create printToDom function
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// Print Array to DOM
const createProjectCards = (arrayOfObjects) => {
  let domString = "";

  arrayOfObjects.forEach((object, i) => {

    if (object.available === true) {
    domString += 
`<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${object.screenshot}" alt="project screenshot">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${object.title}</h5>
        <p class="card-text">${object.description}</p>
        <p class="card-text"><small class="text-muted">${object.technologiesUsed}</small></p>
        <p class="card-text"><small class="text-muted">${object.url}</small></p>
        <p class="card-text"><small class="text-muted">${object.githubUrl}</small></p>
      </div>
    </div>
  </div>
</div>`}
});
console.log(domString);

  printToDom("#projectsPage", domString);
};

const init = () => {
  createProjectCards(projects);
};

init();
