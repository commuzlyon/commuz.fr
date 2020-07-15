export default function ({ route, redirect }) {
  if (route.fullPath === '/partenariats') {
    return redirect('/enConstruction')
  }
}
