export default function ({ route, redirect }) {
  if (route.fullPath === '/gallerie') {
    return redirect('/gallerie/2017')
  }
}
