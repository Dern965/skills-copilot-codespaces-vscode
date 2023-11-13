function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberList = document.getElementById("memberList");
    var skillsList = document.getElementById("skillsList");
    var projectsList = document.getElementById("projectsList");
    var contactList = document.getElementById("contactList");
    var aboutList = document.getElementById("aboutList");

    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";

    memberList.style.color = "#fff";
    skillsList.style.color = "#000";
    projectsList.style.color = "#000";
    contactList.style.color = "#000";
    aboutList.style.color = "#000";
}