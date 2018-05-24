export default function ({ route, redirect }) {
  if (route.fullPath === '/galerie') {
    return redirect('/galerie/2018')
  }
}
