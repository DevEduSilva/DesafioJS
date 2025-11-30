function updateProfileInfo(profileData) {
  // DECLARANDO VARIAVEIS
  const photo = document.getElementById("profile.photo");
  const name = document.getElementById("profile.name");
  const job = document.getElementById("profile.job");
  const location = document.getElementById("profile.location");
  const phone = document.getElementById("profile.phone");
  const email = document.getElementById("profile.email");

  // ALTERANDO FOTO
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  // ALTERANDO NOME
  name.innerText = profileData.name;

  // ALTERANDO CARGO
  job.innerText = profileData.job;

  // ALTERANDO LOCALIZAÇÃO
  location.innerText = profileData.location;

  // ALTERANDO TELFONE
  phone.innerText = profileData.phone;
  phone.href = `tel: +55 ${profileData.phone}`;

  // ALTERANDO email
  email.innerText = profileData.email;
  email.href = `mailto: ${profileData.email}`;
}

function updateSoftSkill(profileData) {
  // DECLARANDO VARIAVEIS
  const softSkills = document.getElementById("profile.skills.softSkills");

  // ALTERANDO LISTA DE SOFTSKILLS
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkill(profileData) {
  // DECLARANDO VARIAVEIS
  const hardSkills = document.getElementById("profile.skills.hardSkills");

  // ALTERANDO LISTA DE HARDSKILLS
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map((skill) => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`)
    .join("");
}

function updateAllInformations(profileData) {
  // DADOS PESSOAIS
  updateProfileInfo(profileData);
  // HARD SKILLS
  updateHardSkill(profileData)
  // SOFT SKILLS
  updateSoftSkill(profileData);
}

(async () => {
  const profileData = await fetchProfileData();
  updateAllInformations(profileData);
})();
