function findAdmin(list, lang) {
    return list.filter(x=>x.language==lang&&x.githubAdmin=='yes')// thank you for checking out the Coding Meetup kata :)
  }