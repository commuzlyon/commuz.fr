// redirect vers une page temporaire lors du développement d'une nouvelle page
// Cette page existe pour cacher la page initiale tout en la rendant accessible aux memebres pour vérification
export default function ({ route, redirect }) {
  if (route.fullPath === 'unused') {
    return redirect('/enConstruction')
  }
}
