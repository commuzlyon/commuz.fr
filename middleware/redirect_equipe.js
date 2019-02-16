export default function ({ route, redirect }) {
  if (route.fullPath === '/equipe') {
    return redirect('/equipe/2019')
  }
}
