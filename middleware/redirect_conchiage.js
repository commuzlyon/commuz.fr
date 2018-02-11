export default function ({ route, redirect }) {
  let urlConchiage = [ '/jambonbrie', '/jorick', '/rootz', '/commurge' ]
  if (urlConchiage.indexOf(route.fullPath) >= 0) {
    return redirect('/c' + route.fullPath)
  }
}
