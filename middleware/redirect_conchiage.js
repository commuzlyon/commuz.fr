export default function ({ route, redirect }) {
  let urlConchiage = ['/commurge', '/casting', '/ship']
  if (urlConchiage.indexOf(route.fullPath) >= 0) {
    return redirect('/c' + route.fullPath)
  }
}
