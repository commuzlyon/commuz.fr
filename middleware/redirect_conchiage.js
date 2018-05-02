export default function ({ route, redirect }) {
  let urlConchiage = [ '/jambonbrie', '/jorick', '/rootz', '/commurge', '/karla' ]
  if (urlConchiage.indexOf(route.fullPath) >= 0) {
    return redirect('/c' + route.fullPath)
  }
}
