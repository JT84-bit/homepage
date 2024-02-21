import './style.css';

const projects = document.querySelector('.project-container')

const project1 = document.createElement('div')
const links1 = document.createElement('div')
links1.classList.add('links')
const projectInfo1 = document.createElement('div')
projectInfo1.classList.add('projectInfo')
const projectName1 = document.createElement('p')
projectName1.classList.add('projectName')
project1.classList.add('project')
const projectDescription1 = document.createElement('p')
const project1git = document.createElement('a')
const project1direct = document.createElement('a')
links1.append(project1git, project1direct)
project1git.classList.add('git')
project1direct.classList.add('direct')
projectName1.textContent = 'Project name'
projectDescription1.textContent = 'Short description of the project. Just couple sentences will do.'
const projectPic1 = document.createElement('div')
projectPic1.textContent = 'Screenshot of photo'
projectPic1.classList.add('project1Pic')
projectInfo1.append(projectName1, projectDescription1, links1)
project1.append(projectPic1, projectInfo1)
projects.appendChild(project1)

const project2 = document.createElement('div')
const links2 = document.createElement('div')
links2.classList.add('links')
const projectInfo2 = document.createElement('div')
projectInfo2.classList.add('projectInfo')
const projectName2 = document.createElement('p')
projectName2.classList.add('projectName')
const projectPic2 = document.createElement('div')
const projectDescription2 = document.createElement('p')
const project2git = document.createElement('a')
const project2direct = document.createElement('a')
project2.classList.add('project')
links2.append(project2git, project2direct)
project2git.classList.add('git')
project2direct.classList.add('direct')
projectName2.textContent = 'Project name'
projectDescription2.textContent = 'Short description of the project. Just couple sentences will do.'
projectPic2.textContent = 'Screenshot of photo'
projectPic2.classList.add('project2Pic')
projectInfo2.append(projectName2, projectDescription2, links2)
project2.append(projectPic2, projectInfo2)
projects.appendChild(project2)

const project3 = document.createElement('div')
const links3 = document.createElement('div')
links3.classList.add('links')
const projectInfo3 = document.createElement('div')
projectInfo3.classList.add('projectInfo')
const projectName3 = document.createElement('p')
projectName3.classList.add('projectName')
const projectPic3 = document.createElement('div')
const projectDescription3 = document.createElement('p')
const project3git = document.createElement('a')
const project3direct = document.createElement('a')
project3.classList.add('project')
links3.append(project3git, project3direct)
project3git.classList.add('git')
project3direct.classList.add('direct')
projectName3.textContent = 'Project name'
projectDescription3.textContent = 'Short description of the project. Just couple sentences will do.'
projectPic3.textContent = 'Screenshot of photo'
projectPic3.classList.add('project3Pic')
projectInfo3.append(projectName3, projectDescription3, links3)
project3.append(projectPic3, projectInfo3)
projects.appendChild(project3)

const project4 = document.createElement('div')
const links4 = document.createElement('div')
links4.classList.add('links')
const projectInfo4 = document.createElement('div')
projectInfo4.classList.add('projectInfo')
const projectName4 = document.createElement('p')
projectName4.classList.add('projectName')
const projectPic4 = document.createElement('div')
const projectDescription4 = document.createElement('p')
const project4git = document.createElement('a')
const project4direct = document.createElement('a')
project4.classList.add('project')
links4.append(project4git, project4direct)
project4git.classList.add('git')
project4direct.classList.add('direct')
projectName4.textContent = 'Project name'
projectDescription4.textContent = 'Short description of the project. Just couple sentences will do.'
projectPic4.textContent = 'Screenshot of photo'
projectPic4.classList.add('project4Pic')
projectInfo4.append(projectName4, projectDescription4, links4)
project4.append(projectPic4, projectInfo4)
projects.appendChild(project4)

const project5 = document.createElement('div')
const links5 = document.createElement('div')
links5.classList.add('links')
const projectInfo5 = document.createElement('div')
projectInfo5.classList.add('projectInfo')
const projectName5 = document.createElement('p')
projectName5.classList.add('projectName')
const projectPic5 = document.createElement('div')
const projectDescription5 = document.createElement('p')
const project5git = document.createElement('a')
const project5direct = document.createElement('a')
project5.classList.add('project')
links5.append(project5git, project5direct)
project5git.classList.add('git')
project5direct.classList.add('direct')
projectName5.textContent = 'Project name'
projectDescription5.textContent = 'Short description of the project. Just couple sentences will do.'
projectPic5.textContent = 'Screenshot of photo'
projectPic5.classList.add('project5Pic')
projectInfo5.append(projectName5, projectDescription5, links5)
project5.append(projectPic5, projectInfo5)
projects.appendChild(project5)

const project6 = document.createElement('div')
const links6 = document.createElement('div')
links6.classList.add('links')
const projectInfo6 = document.createElement('div')
projectInfo6.classList.add('projectInfo')
const projectName6 = document.createElement('p')
projectName6.classList.add('projectName')
const projectPic6 = document.createElement('div')
const projectDescription6 = document.createElement('p')
const project6git = document.createElement('a')
const project6direct = document.createElement('a')
project6.classList.add('project')
links6.append(project6git, project6direct)
project6git.classList.add('git')
project6direct.classList.add('direct')
projectName6.textContent = 'Project name'
projectDescription6.textContent = 'Short description of the project. Just couple sentences will do.'
projectPic6.textContent = 'Screenshot of photo'
projectPic6.classList.add('project6Pic')
projectInfo6.append(projectName6, projectDescription6, links6)
project6.append(projectPic6, projectInfo6)
projects.appendChild(project6)


