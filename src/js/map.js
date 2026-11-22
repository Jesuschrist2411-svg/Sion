
import * as maplibregl from 'maplibre-gl'

// =========================================
// JÉRICHO SHIELD - CARTE INTERACTIVE
// =========================================

export function initialiserCarte() {

  // Vérifier que la zone de la carte existe
  const conteneur = document.getElementById('map')

  if (!conteneur) {
    console.log('La carte n’est pas présente sur cette page.')
    return
  }

  // Création de la carte centrée sur la Belgique
  const map = new maplibregl.Map({
    container: 'map',

    style: {
      version: 8,

      sources: {
        osm: {
          type: 'raster',
          tiles: [
            'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          ],
          tileSize: 256,
          attribution: '© les contributeurs d’OpenStreetMap',
        },
      },

      layers: [
        {
          id: 'osm',
          type: 'raster',
          source: 'osm',
        },
      ],
    },

    center: [4.47, 50.5],
    zoom: 7,
  })

  // Lieux de test temporaires
  const lieux = [
    { nom: 'Lieu test : bunker', lng: 4.35, lat: 50.85 },
    { nom: 'Lieu test : site abandonné', lng: 5.57, lat: 50.63 },
    { nom: 'Lieu test : bivouac en forêt', lng: 5.4, lat: 50.2 },
  ]

  // Ajouter les marqueurs sur la carte
  lieux.forEach((lieu) => {
    new maplibregl.Marker()
      .setLngLat([lieu.lng, lieu.lat])
      .setPopup(new maplibregl.Popup().setText(lieu.nom))
      .addTo(map)
  })

  return map
}
