localStorage
//presistent
> save wrt to browser
localStorage.setItem('_eejjktokm','57h56he54fbrbr5=rhrthh')
undefined
localStorage.getItem('_eejjktokm')
"57h56he54fbrbr5=rhrthh"
localStorage.removeItem('_eejjktokm')
undefined
localStorage.setItem('token','57h56he54fbrbr5=rhrthh')
undefined
localStorage.setItem('token','mytoken')
undefined


//////////
Session Storage
> save wrt to tab
> Its tab specific
> its not persistant as soon as tab close it will removed

sessionStorage.setItem("_token_","nnnnnn")
undefined
sessionStorage.removeItem("_token_")
undefined
sessionStorage.setItem("_token_","nnnnnn")
undefined
sessionStorage.getItem("_token_")
"nnnnnn"

/////cookies
cookies save wrt to website url
cookies have expire time

document.cookie="name=test user;expires=Fri, 26 Aug 2020 01:00:00 UTC; path=/"
document.cookie;