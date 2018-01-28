export default function ({ route, redirect }) {
  let urlConchiage = [ '/jambonbrie', '/jorick', '/rootz' ]
  console.log(route.fullPath)
  if (urlConchiage.indexOf(route.fullPath) >= 0) {
    return redirect('/c' + route.fullPath)
  }
}
