export default function ({ route, redirect }) {
  let urlConchiage = [ '/jambonbrie', '/jorick', '/rootz' ]
  if (urlConchiage.indexOf(route.fullPath) >= 0) {
    return redirect('/c' + route.fullPath)
  }
}
