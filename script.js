const LinksSocialMedia = {
  github: 'matheusmrh',
  youtube: '/channel/UC1X08yl4lAvepo5AhewkOtg',
  facebook: 'marinho.mat',
  instagram: 'gxvulz',
  twitter: 'httposeidon'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userName.textContent = data.name
      userLogin.textContent = data.login
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()
