import { useEffect } from 'react'
import { useMirroredStyles } from './MirroredPage.jsx'

import thirteenThoughtsHtml from '../../../mirror-source/13-pensamientos-distorsionados.html?raw'
import burnoutHtml from '../../../mirror-source/burn-out-desgaste-emocional.html?raw'
import awarenessHtml from '../../../mirror-source/consciencia-de-vida-en-amor.html?raw'
import reflectiveHtml from '../../../mirror-source/consciencia-reflexiva.html?raw'
import heartsHtml from '../../../mirror-source/cultivando-corazones-en-bienestar.html?raw'
import enoughHtml from '../../../mirror-source/cultivando-el-sentido-de-ser-suficientes.html?raw'
import disguisedGriefHtml from '../../../mirror-source/el-duelo-disfrazado-en-mis-hijos.html?raw'
import writingHtml from '../../../mirror-source/escribir-con-consciencia-libera-y-sana.html?raw'
import childrenGriefHtml from '../../../mirror-source/manejo-del-duelo-en-ninos-adolescentes.html?raw'
import historyHtml from '../../../mirror-source/mi-historia-tu-historia.html?raw'

const staticPages = {
  '13-pensamientos-distorsionados': thirteenThoughtsHtml,
  'burn-out-desgaste-emocional': burnoutHtml,
  'consciencia-de-vida-en-amor': awarenessHtml,
  'consciencia-reflexiva': reflectiveHtml,
  'cultivando-corazones-en-bienestar': heartsHtml,
  'cultivando-el-sentido-de-ser-suficientes': enoughHtml,
  'el-duelo-disfrazado-en-mis-hijos': disguisedGriefHtml,
  'escribir-con-consciencia-libera-y-sana': writingHtml,
  'manejo-del-duelo-en-ninos-adolescentes': childrenGriefHtml,
  'mi-historia-tu-historia': historyHtml,
}

export const staticPageSlugs = new Set(Object.keys(staticPages))

const uploadFiles = new Set([
  '2022/08/Recurso-9.png',
  '2022/08/Recurso-9-160x100.png',
  '2022/08/Jessica_3.jpg',
  '2022/08/evolucion-removebg-preview.png',
  '2022/08/CaslonCP.ttf',
  '2023/04/Cultivando-corazones.jpeg',
  '2023/04/Cultivando-corazones-150x150.jpeg',
  '2023/04/Cultivando-el-Sentido-de-ser-suficientes-scaled.jpg',
  '2023/04/Cultivando-el-Sentido-de-ser-suficientes-150x150.jpg',
  '2023/04/Escribir-con-sentido-libera-y-sana-scaled.jpg',
  '2023/04/Escribir-con-sentido-libera-y-sana-150x150.jpg',
  '2023/04/Manejo-de-duelo-en-ninos-y-adol-scaled.jpg',
  '2023/04/Manejo-de-duelo-en-ninos-y-adol-150x150.jpg',
  '2023/04/Tanatologia-Consciencia-de-vida-en-amor-scaled.jpg',
  '2023/04/Tanatologia-Consciencia-de-vida-en-amor-150x150.jpg',
  '2023/04/tired-businessman-suffering-from-headache-scaled.jpg',
  '2023/04/tired-businessman-suffering-from-headache-150x150.jpg',
  '2023/04/SourceSansPro-Regular.ttf',
  '2023/04/Heridas-emocionales.jpg',
  '2023/04/Liberarte-scaled.jpg',
  '2023/04/Amarte-en-libertad-scaled.jpg',
  '2023/06/Captura-de-Pantalla-2023-06-28-a-las-17.20.04.png',
  '2023/06/Captura-de-Pantalla-2023-06-28-a-las-17.20.04-150x150.png',
  '2023/06/image-1.png',
  '2023/06/image-2.png',
  '2023/07/Captura-de-Pantalla-2023-07-26-a-las-16.21.23.png',
  '2023/07/Captura-de-Pantalla-2023-07-26-a-las-16.21.23-150x150.png',
  '2023/07/WhatsApp-Image-2023-07-19-at-16.48.21.jpeg',
  '2023/07/WhatsApp-Image-2023-07-19-at-16.48.21-150x150.jpeg',
  '2023/07/WhatsApp-Image-2023-07-25-at-19.14.13-1.jpeg',
  '2023/09/Jessica_Handal_CV.pdf',
])

const staticBodyClasses = [
  'wp-singular',
  'page-template-default',
  'wp-custom-logo',
  'wp-embed-responsive',
  'wp-theme-astra',
  'wp-child-theme-astra-child',
  'theme-astra',
  'woocommerce-js',
  'ehf-template-astra',
  'ehf-stylesheet-astra-child',
  'ast-desktop',
  'ast-page-builder-template',
  'ast-no-sidebar',
  'astra-4.13.0',
  'ast-single-post',
  'ast-inherit-site-logo-transparent',
  'ast-hfb-header',
  'elementor-default',
  'elementor-kit-277',
  'astra-addon-4.3.2',
]

function normalizeUploadPath(path) {
  const cleanPath = path.replace(/&.+$/, '').replace(/\?.+$/, '')

  if (uploadFiles.has(cleanPath)) {
    return cleanPath
  }

  const match = cleanPath.match(/^(.*)-(\d+)x(\d+)(\.[^.]+)$/)

  if (!match) {
    return cleanPath
  }

  const [, base, width, height, ext] = match
  const squareThumbnail = `${base}-150x150${ext}`
  const scaled = `${base}-scaled${ext}`
  const full = `${base}${ext}`

  if (width === height && uploadFiles.has(squareThumbnail)) {
    return squareThumbnail
  }

  if (uploadFiles.has(scaled)) {
    return scaled
  }

  if (uploadFiles.has(full)) {
    return full
  }

  if (uploadFiles.has(squareThumbnail)) {
    return squareThumbnail
  }

  return cleanPath
}

function normalizeHtml(source) {
  return source
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<link\b[^>]*>/gi, '')
    .replace(
      /https:\/\/jessicahandal\.com\/wp-content\/uploads\/([^"'\s<>),?]+)/g,
      (_, path) => `/public_clean/jessicahandal/wp-content/uploads/${normalizeUploadPath(path)}`,
    )
    .replace(/https:\/\/jessicahandal\.com\/producto\/([^/"'\s<>?]+)\/?/g, '/producto/$1/')
    .replace(/https:\/\/jessicahandal\.com\/mi-cuenta\/?/g, '/mi-cuenta/')
    .replace(/https:\/\/jessicahandal\.com\/?#/g, '/#')
    .replace(/https:\/\/jessicahandal\.com\/?/g, '/')
    .replace(/href="\/\/([^"]+)"/g, 'href="/$1"')
    .replace(/href="\/\/"/g, 'href="/"')
    .replace(/href="\/producto\/([^"?]+)\/\?add-to-cart=\d+"/g, 'href="/producto/$1/"')
    .replace(/data-thumb-srcset="[^"]*"/g, '')
}

function useStaticDocument(slug) {
  useEffect(() => {
    const previousLang = document.documentElement.getAttribute('lang')
    const previousItemType = document.body.getAttribute('itemtype')
    const previousItemScope = document.body.getAttribute('itemscope')
    const pageClasses =
      slug === 'consciencia-reflexiva'
        ? ['page', 'page-id-1607', 'elementor-page', 'elementor-page-1607']
        : ['single-product', 'woocommerce', 'woocommerce-page']

    document.documentElement.setAttribute('lang', 'es')
    document.body.setAttribute('itemtype', 'https://schema.org/WebPage')
    document.body.setAttribute('itemscope', 'itemscope')
    document.body.classList.add(...staticBodyClasses, ...pageClasses)

    return () => {
      if (previousLang === null) {
        document.documentElement.removeAttribute('lang')
      } else {
        document.documentElement.setAttribute('lang', previousLang)
      }

      if (previousItemType === null) {
        document.body.removeAttribute('itemtype')
      } else {
        document.body.setAttribute('itemtype', previousItemType)
      }

      if (previousItemScope === null) {
        document.body.removeAttribute('itemscope')
      } else {
        document.body.setAttribute('itemscope', previousItemScope)
      }

      document.body.classList.remove(...staticBodyClasses, ...pageClasses)
    }
  }, [slug])
}

export default function StaticMirroredPage({ slug }) {
  useMirroredStyles()
  useStaticDocument(slug)

  const html = normalizeHtml(staticPages[slug] || staticPages['consciencia-reflexiva'])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
