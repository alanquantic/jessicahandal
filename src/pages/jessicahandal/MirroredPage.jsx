import { useEffect, useState } from 'react'
import './mirrored.css'

const mirroredStyles = [
  '/public_clean/jessicahandal/wp-content/themes/astra/assets/css/minified/frontend.min.css',
  '/public_clean/jessicahandal/wp-content/themes/astra/assets/css/minified/compatibility/learndash.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/instagram-feed/css/sbi-styles.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/header-footer-elementor/inc/widgets-css/frontend.css',
  '/public_clean/jessicahandal/wp-content/plugins/header-footer-elementor/inc/widgets-css/woo-products.css',
  '/public_clean/jessicahandal/wp-content/plugins/customize-my-account-for-woocommerce/assets/css/frontend-unique.css',
  '/public_clean/jessicahandal/wp-content/plugins/uncanny-learndash-toolkit/src/assets/frontend/dist/bundle.min.css',
  '/public_clean/jessicahandal/wp-content/themes/astra/assets/css/minified/compatibility/woocommerce/woocommerce-layout.min.css',
  '/public_clean/jessicahandal/wp-content/themes/astra/assets/css/minified/compatibility/woocommerce/woocommerce-smallscreen.min.css',
  '/public_clean/jessicahandal/wp-content/themes/astra/assets/css/minified/compatibility/woocommerce/woocommerce.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/sfwd-lms/themes/legacy/templates/learndash_quiz_front.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/sfwd-lms/assets/css/jquery.dropdown.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/sfwd-lms/themes/legacy/templates/learndash_lesson_video.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/header-footer-elementor/assets/css/header-footer-elementor.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/css/frontend.min.css',
  '/public_clean/jessicahandal/wp-content/uploads/elementor/css/post-277.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/css/widget-image.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/css/widget-heading.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/css/widget-menu-anchor.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor-pro/assets/css/widget-form.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/css/widget-spacer.min.css',
  '/public_clean/jessicahandal/wp-content/uploads/elementor/css/post-1304.css',
  '/public_clean/jessicahandal/wp-content/uploads/elementor/css/post-942.css',
  '/public_clean/jessicahandal/wp-content/uploads/elementor/css/post-1607.css',
  '/public_clean/jessicahandal/wp-content/uploads/astra-addon/astra-addon-654186979fddb5-82829187.css',
  '/public_clean/jessicahandal/wp-content/plugins/sfwd-lms/themes/ld30/assets/css/learndash.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor-pro/assets/css/conditionals/popup.min.css',
  '/public_clean/jessicahandal/wp-content/uploads/elementor/css/post-1315.css',
  '/public_clean/jessicahandal/wp-content/uploads/elementor/css/post-1313.css',
  '/public_clean/jessicahandal/wp-content/uploads/elementor/css/post-1594.css',
  '/public_clean/jessicahandal/wp-content/themes/astra-child/style.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/css/widget-video.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/lib/font-awesome/css/regular.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor-pro/assets/css/widget-blockquote.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/elementor-pro/assets/css/widget-mega-menu.min.css',
  '/public_clean/jessicahandal/wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks.css',
  '/public_clean/jessicahandal/wp-content/uploads/elementor/css/post-1339.css',
]

const mirroredBodyClasses = [
  'home',
  'wp-singular',
  'page-template-default',
  'page',
  'page-id-1304',
  'wp-custom-logo',
  'wp-embed-responsive',
  'wp-theme-astra',
  'wp-child-theme-astra-child',
  'theme-astra',
  'woocommerce-no-js',
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
  'elementor-page',
  'elementor-page-1304',
  'astra-addon-4.3.2',
]

export function useMirroredStyles() {
  useEffect(() => {
    const links = mirroredStyles.map((href) => {
      const existing = document.head.querySelector(`link[data-jessicahandal-style="${href}"]`)
      if (existing) {
        return existing
      }

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      link.dataset.jessicahandalStyle = href
      document.head.appendChild(link)
      return link
    })

    return () => {
      links.forEach((link) => {
        if (link && link.dataset?.jessicahandalStyle) {
          link.remove()
        }
      })
    }
  }, [])
}

function useMirroredDocument() {
  useEffect(() => {
    const previousLang = document.documentElement.getAttribute('lang')
    const previousItemType = document.body.getAttribute('itemtype')
    const previousItemScope = document.body.getAttribute('itemscope')

    document.documentElement.setAttribute('lang', 'es')
    document.body.setAttribute('itemtype', 'https://schema.org/WebPage')
    document.body.setAttribute('itemscope', 'itemscope')
    document.body.classList.add(...mirroredBodyClasses)

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

      document.body.classList.remove(...mirroredBodyClasses)
    }
  }, [])
}

export default function MirroredPage() {
  useMirroredDocument()
  useMirroredStyles()
  const [showPopup1339, setShowPopup1339] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setShowScrollTop(scrolled > 0.1)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
<div>
  <a className="skip-link screen-reader-text" href="#content">
    Ir al contenido</a>
  <div className="hfeed site" id="page">
    <header data-elementor-type="header" data-elementor-id={1315} className="elementor elementor-1315 elementor-location-header" data-elementor-post-type="elementor_library">
      <section className="elementor-section elementor-top-section elementor-element elementor-element-2d3a0ed5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2d3a0ed5" data-element_type="section" data-e-type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6d1eaf96" data-id="6d1eaf96" data-element_type="column" data-e-type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-d2b7788 e-grid-align-right elementor-widget__width-initial elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="d2b7788" data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
                <div className="elementor-widget-container">
                  <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                    <span className="elementor-grid-item" role="listitem">
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-2d3349b" href="https://www.instagram.com/jessyhandal/" target="_blank">
                        <span className="elementor-screen-only">Instagram</span>
                        <i aria-hidden="true" className="fab fa-instagram" />					</a>
                    </span>
                    <span className="elementor-grid-item" role="listitem">
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-microphone-alt elementor-repeater-item-0732f05" href="https://open.spotify.com/episode/6ubvK1zJ3yqmDBJZ4Gt0yd?si=cb5e523791a9427f&nd=1" target="_blank">
                        <span className="elementor-screen-only">Microphone-alt</span>
                        <i aria-hidden="true" className="fas fa-microphone-alt" />					</a>
                    </span>
                    <span className="elementor-grid-item" role="listitem">
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-envelope elementor-repeater-item-4144b16" href="mailto:contacto@jessicahandal.com" target="_blank">
                        <span className="elementor-screen-only">Envelope</span>
                        <i aria-hidden="true" className="far fa-envelope" />					</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-7a31cd4 elementor-align-right elementor-widget__width-initial elementor-widget elementor-widget-button" data-id="7a31cd4" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-button-link elementor-size-sm" href="/mi-cuenta/">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Mi cuenta</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-69df886c elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="69df886c" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3b0f09e8" data-id="3b0f09e8" data-element_type="column" data-e-type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-26a61184 elementor-widget elementor-widget-image" data-id="26a61184" data-element_type="widget" data-e-type="widget" id="top" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <a href="/">
                    <img fetchpriority="high" width={293} height={183} src="/public_clean/jessicahandal/wp-content/uploads/2022/08/Recurso-9-160x100.png" className="attachment-full size-full wp-image-1168" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2022/08/Recurso-9.png 293w, /public_clean/jessicahandal/wp-content/uploads/2022/08/Recurso-9-160x100.png 160w" sizes="(max-width: 293px) 100vw, 293px" />								</a>
                </div>
              </div>
              <div className="elementor-element elementor-element-a39934d elementor-nav-menu__align-center elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="a39934d" data-element_type="widget" data-e-type="widget" data-settings="{&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\&quot;fas fa-caret-down\&quot; aria-hidden=\&quot;true\&quot;><\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">
                <div className="elementor-widget-container">
                  <nav aria-label="Menú" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade">
                    <ul id="menu-1-a39934d" className="elementor-nav-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1328"><a href="/#abriendo" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Abriendo caminos</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1330"><a href="/#evolucion" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Evolución de mi ser</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1329"><a href="/#tanatologia" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Tanatología</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1592"><a href="/consciencia-reflexiva/" className="elementor-item menu-link">Consciencia reflexiva</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1347"><a href="/#instituciones" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Instituciones</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1394"><a href="/#sobremi" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Sobre mi</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1348"><a href="/#contacto" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Contacto</a></li>
                    </ul>			</nav>
                  <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Alternar menú" aria-expanded="false">
                    <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--open eicon-menu-bar" /><i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close eicon-close" />		</div>
                  <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
                    <ul id="menu-2-a39934d" className="elementor-nav-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1328"><a href="/#abriendo" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Abriendo caminos</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1330"><a href="/#evolucion" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Evolución de mi ser</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1329"><a href="/#tanatologia" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Tanatología</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1592"><a href="/consciencia-reflexiva/" className="elementor-item menu-link" tabIndex={-1}>Consciencia reflexiva</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1347"><a href="/#instituciones" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Instituciones</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1394"><a href="/#sobremi" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Sobre mi</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1348"><a href="/#contacto" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Contacto</a></li>
                    </ul>			</nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-6742ab5f elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6742ab5f" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-30a49c53" data-id="30a49c53" data-element_type="column" data-e-type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-2934e1cb elementor-widget elementor-widget-theme-site-logo elementor-widget-image" data-id="2934e1cb" data-element_type="widget" data-e-type="widget" data-widget_type="theme-site-logo.default">
                <div className="elementor-widget-container">
                  <a href="/">
                    <img fetchpriority="high" width={293} height={183} src="/public_clean/jessicahandal/wp-content/uploads/2022/08/Recurso-9-160x100.png" className="attachment-full size-full wp-image-1168" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2022/08/Recurso-9.png 293w, /public_clean/jessicahandal/wp-content/uploads/2022/08/Recurso-9-160x100.png 160w" sizes="(max-width: 293px) 100vw, 293px" />				</a>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2bd2be9e" data-id="2bd2be9e" data-element_type="column" data-e-type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-791b90f8 elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="791b90f8" data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
                <div className="elementor-widget-container">
                  <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                    <span className="elementor-grid-item" role="listitem">
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-2d3349b" href="https://www.instagram.com/jessyhandal/" target="_blank">
                        <span className="elementor-screen-only">Instagram</span>
                        <i aria-hidden="true" className="fab fa-instagram" />					</a>
                    </span>
                    <span className="elementor-grid-item" role="listitem">
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-microphone-alt elementor-repeater-item-0732f05" href="https://open.spotify.com/episode/6ubvK1zJ3yqmDBJZ4Gt0yd?si=cb5e523791a9427f&nd=1" target="_blank">
                        <span className="elementor-screen-only">Microphone-alt</span>
                        <i aria-hidden="true" className="fas fa-microphone-alt" />					</a>
                    </span>
                    <span className="elementor-grid-item" role="listitem">
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-envelope elementor-repeater-item-9e5abce" href="mailto:contacto@jessicahandal.com" target="_blank">
                        <span className="elementor-screen-only">Envelope</span>
                        <i aria-hidden="true" className="fas fa-envelope" />					</a>
                    </span>
                    <span className="elementor-grid-item" role="listitem">
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-user elementor-repeater-item-d8656cd" href="/mi-cuenta/" target="_blank">
                        <span className="elementor-screen-only">User</span>
                        <i aria-hidden="true" className="far fa-user" />					</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-19a4600c" data-id="19a4600c" data-element_type="column" data-e-type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-d10c8b2 elementor-nav-menu--stretch elementor-nav-menu__text-align-center elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="d10c8b2" data-element_type="widget" data-e-type="widget" data-settings="{&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\&quot;fas fa-caret-down\&quot; aria-hidden=\&quot;true\&quot;><\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">
                <div className="elementor-widget-container">
                  <nav aria-label="Menú" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade">
                    <ul id="menu-1-d10c8b2" className="elementor-nav-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1328"><a href="/#abriendo" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Abriendo caminos</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1330"><a href="/#evolucion" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Evolución de mi ser</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1329"><a href="/#tanatologia" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Tanatología</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1592"><a href="/consciencia-reflexiva/" className="elementor-item menu-link">Consciencia reflexiva</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1347"><a href="/#instituciones" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Instituciones</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1394"><a href="/#sobremi" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Sobre mi</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1348"><a href="/#contacto" aria-current="page" className="elementor-item elementor-item-anchor menu-link">Contacto</a></li>
                    </ul>			</nav>
                  <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Alternar menú" aria-expanded="false">
                    <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--open eicon-menu-bar" /><i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close eicon-close" />		</div>
                  <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
                    <ul id="menu-2-d10c8b2" className="elementor-nav-menu"><li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1328"><a href="/#abriendo" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Abriendo caminos</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1330"><a href="/#evolucion" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Evolución de mi ser</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1329"><a href="/#tanatologia" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Tanatología</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1592"><a href="/consciencia-reflexiva/" className="elementor-item menu-link" tabIndex={-1}>Consciencia reflexiva</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1347"><a href="/#instituciones" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Instituciones</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1394"><a href="/#sobremi" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Sobre mi</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1348"><a href="/#contacto" aria-current="page" className="elementor-item elementor-item-anchor menu-link" tabIndex={-1}>Contacto</a></li>
                    </ul>			</nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
    <div id="content" className="site-content">
      <div className="ast-container">
        <div id="primary" className="content-area primary">
          <main id="main" className="site-main">
            <article className="post-1304 page type-page status-publish ast-article-single" id="post-1304" itemType="https://schema.org/CreativeWork" itemScope="itemscope">
              <header className="entry-header ast-no-title ast-header-without-markup">
              </header> {/* .entry-header */}
              <div className="entry-content clear" itemProp="text">
                <div data-elementor-type="wp-page" data-elementor-id={1304} className="elementor elementor-1304" data-elementor-post-type="page">
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-f2abf7a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f2abf7a" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0dfeef3" data-id="0dfeef3" data-element_type="column" data-e-type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-163ff08 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="163ff08" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0f7c505" data-id="0f7c505" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-31127ab elementor-widget elementor-widget-text-editor" data-id="31127ab" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <h4><span style={{fontSize: '1.5rem', fontStyle: 'inherit'}}>La magia de aprender por el amor de compartir</span></h4><p>Hola, soy Jessica Handal, psicoterapeuta y tanatóloga.</p><p>Te doy la bienvenida a este espacio creado con la intención de compartirte conocimiento y experiencias para acompañarte en el camino a cultivar tu bienestar integral.</p><p>Encontrarás conferencias y cursos sobre temas actuales que experimentamos en diferentes áreas de nuestra vida.</p>								</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a283f2e" data-id="a283f2e" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-d9054ad elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-id="d9054ad" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="icon.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-icon-wrapper">
                                        <a className="elementor-icon" href="#" onClick={(e) => { e.preventDefault(); setShowPopup1339(true) }}>
                                          <i aria-hidden="true" className="far fa-play-circle" />			</a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-41bd24e elementor-widget elementor-widget-image" data-id="41bd24e" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img decoding="async" width={720} height={960} src="/public_clean/jessicahandal/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-25-at-19.14.13-1.jpeg" className="attachment-large size-large wp-image-1788" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-25-at-19.14.13-1.jpeg 720w" sizes="(max-width: 720px) 100vw, 720px" />															</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-7f68ec1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7f68ec1" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f72c4eb" data-id="f72c4eb" data-element_type="column" data-e-type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-1956162 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id={1956162} data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f041b3e" data-id="f041b3e" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-dc90cc3 elementor-widget__width-initial elementor-widget elementor-widget-image" data-id="dc90cc3" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img decoding="async" width={100} height={100} src="/public_clean/jessicahandal/wp-content/uploads/2023/06/image-1.png" className="attachment-large size-large wp-image-1337" alt />															</div>
                                  </div>
                                  <div className="elementor-element elementor-element-93eeb2a elementor-widget elementor-widget-heading" data-id="93eeb2a" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h1 className="elementor-heading-title elementor-size-default">Abriendo caminos</h1>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-25bd761 elementor-widget elementor-widget-text-editor" data-id="25bd761" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Espacio para todos los que están en la aventura de guiar a niños y adolescentes en el <span style={{fontStyle: 'inherit', fontWeight: 'inherit'}}>camino de la vida.</span></p>								</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-5bd6e2e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5bd6e2e" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a816632" data-id="a816632" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap">
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-302f898" data-id="302f898" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-76b0efd elementor-widget elementor-widget-heading" data-id="76b0efd" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h3 className="elementor-heading-title elementor-size-default">Conferencias</h3>				</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-b1e6ea8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b1e6ea8" data-element_type="section" data-e-type="section" id="abriendo">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-df36212" data-id="df36212" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-b1d4d37 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="b1d4d37" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={150} height={150} src="/public_clean/jessicahandal/wp-content/uploads/2023/04/Cultivando-corazones-150x150.jpeg" className="attachment-thumbnail size-thumbnail wp-image-1143" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2023/04/Cultivando-corazones-150x150.jpeg 150w" sizes="(max-width: 150px) 100vw, 150px" />															</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6b58940" data-id="6b58940" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-6aac0bb elementor-widget elementor-widget-heading" data-id="6aac0bb" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">Cultivando corazones en bienestar</h4>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-3894882 elementor-widget elementor-widget-text-editor" data-id={3894882} data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Duración: 1 hora <br />Inversión $500 MXP</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-fcc5987 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="fcc5987" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="/producto/cultivando-corazones-en-bienestar/">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Ver más</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-c349b97 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c349b97" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-341a43a" data-id="341a43a" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-c1318e6 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="c1318e6" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={150} height={150} src="/public_clean/jessicahandal/wp-content/uploads/2023/06/Captura-de-Pantalla-2023-06-28-a-las-17.20.04-150x150.png" className="attachment-thumbnail size-thumbnail wp-image-1547" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2023/06/Captura-de-Pantalla-2023-06-28-a-las-17.20.04-150x150.png 150w" sizes="(max-width: 150px) 100vw, 150px" />															</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fbad2a1" data-id="fbad2a1" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-07854e7 elementor-widget elementor-widget-heading" data-id="07854e7" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">El duelo disfrazado en mis hijos</h4>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-7e7b850 elementor-widget elementor-widget-text-editor" data-id="7e7b850" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Duración: 45 minutos<br />Inversión $500 MXP</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-2e2fc8a elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="2e2fc8a" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="/producto/el-duelo-disfrazado-en-mis-hijos/">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Ver más</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-7987c4d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7987c4d" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a234587" data-id="a234587" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-83a5be9 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="83a5be9" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={150} height={150} src="/public_clean/jessicahandal/wp-content/uploads/2023/04/Manejo-de-duelo-en-ninos-y-adol-150x150.jpg" className="attachment-thumbnail size-thumbnail wp-image-1146" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2023/04/Manejo-de-duelo-en-ninos-y-adol-150x150.jpg 150w" sizes="(max-width: 150px) 100vw, 150px" />															</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-32bb4ba" data-id="32bb4ba" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-71bf7c8 elementor-widget elementor-widget-heading" data-id="71bf7c8" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">Manejo de duelo en niños y adolescentes</h4>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-6ca1136 elementor-widget elementor-widget-text-editor" data-id="6ca1136" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Duración: 2 hrs 30 minutos<br />Inversión $1,300 MXP&nbsp;</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-59d5462 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="59d5462" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="/producto/manejo-del-duelo-en-ninos-adolescentes/">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Ver más</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-b12dc52 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b12dc52" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f1c869d" data-id="f1c869d" data-element_type="column" data-e-type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-8a745f9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8a745f9" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-783ff1c" data-id="783ff1c" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-db6f592 elementor-widget elementor-widget-menu-anchor" data-id="db6f592" data-element_type="widget" data-e-type="widget" data-widget_type="menu-anchor.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-menu-anchor" id="evolucion" />
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-b6df71b elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="b6df71b" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={100} height={100} src="/public_clean/jessicahandal/wp-content/uploads/2022/08/evolucion-removebg-preview.png" className="attachment-full size-full wp-image-707" alt />															</div>
                                  </div>
                                  <div className="elementor-element elementor-element-e0b90d2 elementor-widget elementor-widget-heading" data-id="e0b90d2" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h1 className="elementor-heading-title elementor-size-default">Evolución de mi ser</h1>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-c2fedd7 elementor-widget elementor-widget-text-editor" data-id="c2fedd7" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Espacio para guiarte en la evolución de tu ser, creando consciencia del cuidado y desarrollo en tus diferentes áreas de vida para tu bienestar integral.</p>								</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-3e50974 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3e50974" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5105dd1" data-id="5105dd1" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap">
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3516b2b" data-id="3516b2b" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-c59d074 elementor-widget elementor-widget-heading" data-id="c59d074" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h3 className="elementor-heading-title elementor-size-default">Conferencias</h3>				</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-fc30181 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="fc30181" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a673a33" data-id="a673a33" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-264f1cf elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="264f1cf" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={150} height={150} src="/public_clean/jessicahandal/wp-content/uploads/2023/07/Captura-de-Pantalla-2023-07-26-a-las-16.21.23-150x150.png" className="attachment-thumbnail size-thumbnail wp-image-1818" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2023/07/Captura-de-Pantalla-2023-07-26-a-las-16.21.23-150x150.png 150w" sizes="(max-width: 150px) 100vw, 150px" />															</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-83f9c20" data-id="83f9c20" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-821b024 elementor-widget elementor-widget-heading" data-id="821b024" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">Transformando los 13 pensamientos distorsionados</h4>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-8128f50 elementor-widget elementor-widget-text-editor" data-id="8128f50" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Duración: 45 minutos<br />Inversión: $600 MXP</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-2eba6e5 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="2eba6e5" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="/producto/13-pensamientos-distorsionados/">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Ver más</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-0a53424 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0a53424" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ee9356f" data-id="ee9356f" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-eca84c1 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="eca84c1" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={150} height={150} src="/public_clean/jessicahandal/wp-content/uploads/2023/04/Cultivando-el-Sentido-de-ser-suficientes-150x150.jpg" className="attachment-thumbnail size-thumbnail wp-image-1154" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2023/04/Cultivando-el-Sentido-de-ser-suficientes-150x150.jpg 150w" sizes="(max-width: 150px) 100vw, 150px" />															</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9466172" data-id={9466172} data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-748d5c1 elementor-widget elementor-widget-heading" data-id="748d5c1" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">Cultivando el sentido de ser suficiente</h4>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-27b90b1 elementor-widget elementor-widget-text-editor" data-id="27b90b1" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Duración: 1 hora 30 minutos<br />Inversión $800 MXP</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-f4a56a1 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="f4a56a1" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="/producto/cultivando-el-sentido-de-ser-suficientes/">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Ver más</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-aeee67a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="aeee67a" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8a1df26" data-id="8a1df26" data-element_type="column" data-e-type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-0036144 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0036144" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-346fa3d" data-id="346fa3d" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-b203543 elementor-widget elementor-widget-menu-anchor" data-id="b203543" data-element_type="widget" data-e-type="widget" data-widget_type="menu-anchor.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-menu-anchor" id="tanatologia" />
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-54391c8 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="54391c8" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={100} height={100} src="/public_clean/jessicahandal/wp-content/uploads/2023/06/image-2.png" className="attachment-large size-large wp-image-1338" alt />															</div>
                                  </div>
                                  <div className="elementor-element elementor-element-0d50ba0 elementor-widget elementor-widget-heading" data-id="0d50ba0" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h1 className="elementor-heading-title elementor-size-default">Tanatología</h1>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-5fada4d elementor-widget elementor-widget-text-editor" data-id="5fada4d" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Espacio para acompañarte en la consciencia y procesos de duelo. Espacio para compartirte herramientas para afrontar las adversidades y regresar al amor de tu ser.</p>								</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-87c5637 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="87c5637" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1101d53" data-id="1101d53" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap">
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4491a3a" data-id="4491a3a" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-cc102d3 elementor-widget elementor-widget-heading" data-id="cc102d3" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h3 className="elementor-heading-title elementor-size-default">Conferencias</h3>				</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-5810d9a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5810d9a" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-dd68a69" data-id="dd68a69" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-8f324c1 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="8f324c1" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={150} height={150} src="/public_clean/jessicahandal/wp-content/uploads/2023/04/Tanatologia-Consciencia-de-vida-en-amor-150x150.jpg" className="attachment-thumbnail size-thumbnail wp-image-1156" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2023/04/Tanatologia-Consciencia-de-vida-en-amor-150x150.jpg 150w" sizes="(max-width: 150px) 100vw, 150px" />															</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9712018" data-id={9712018} data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-7e7298c elementor-widget elementor-widget-heading" data-id="7e7298c" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">Tanatología: conciencia de vida en amor</h4>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-18175fe elementor-widget elementor-widget-text-editor" data-id="18175fe" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Duración: 45 minutos<br />Inversión: $500 MXP</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-758af22 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="758af22" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="/producto/consciencia-de-vida-en-amor/">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Ver más</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-6d10e39 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6d10e39" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bcd4562" data-id="bcd4562" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-6b10d97 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="6b10d97" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={150} height={150} src="/public_clean/jessicahandal/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-19-at-16.48.21-150x150.jpeg" className="attachment-thumbnail size-thumbnail wp-image-1699" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-19-at-16.48.21-150x150.jpeg 150w" sizes="(max-width: 150px) 100vw, 150px" />															</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1512bb8" data-id="1512bb8" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-244f2cb elementor-widget elementor-widget-heading" data-id="244f2cb" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">Mi historia, Tu historia y la de todos los que somos tanatólogos de corazón</h4>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-dd8d61d elementor-widget elementor-widget-text-editor" data-id="dd8d61d" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>GRATUITA</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-d634ec5 elementor-widget elementor-widget-text-editor" data-id="d634ec5" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Duración: 35 minutos</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-cc9ffd8 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="cc9ffd8" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="/producto/mi-historia-tu-historia/">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Ver más</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-af42de2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="af42de2" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-130b91f" data-id="130b91f" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-3447c11 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="3447c11" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={150} height={150} src="/public_clean/jessicahandal/wp-content/uploads/2023/04/Escribir-con-sentido-libera-y-sana-150x150.jpg" className="attachment-thumbnail size-thumbnail wp-image-1157" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2023/04/Escribir-con-sentido-libera-y-sana-150x150.jpg 150w" sizes="(max-width: 150px) 100vw, 150px" />															</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ab58a91" data-id="ab58a91" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-2113394 elementor-widget elementor-widget-heading" data-id={2113394} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">Escribir con consciencia libera y sana</h4>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-635f061 elementor-widget elementor-widget-text-editor" data-id="635f061" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>GRATUITA</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-48421e2 elementor-widget elementor-widget-text-editor" data-id="48421e2" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Duración: 35 minutos</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-c6e043e elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="c6e043e" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="/producto/escribir-con-consciencia-libera-y-sana/">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Ver más</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-30a93d8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="30a93d8" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-27a0926" data-id="27a0926" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap">
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-40f788a" data-id="40f788a" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-1bff04f elementor-widget elementor-widget-heading" data-id="1bff04f" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h3 className="elementor-heading-title elementor-size-default">Cursos</h3>				</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-0978d27 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0978d27" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-07f67c2" data-id="07f67c2" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-69ee10c elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="69ee10c" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={150} height={150} src="/public_clean/jessicahandal/wp-content/uploads/2023/04/tired-businessman-suffering-from-headache-150x150.jpg" className="attachment-thumbnail size-thumbnail wp-image-1161" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2023/04/tired-businessman-suffering-from-headache-150x150.jpg 150w" sizes="(max-width: 150px) 100vw, 150px" />															</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-beeda9a" data-id="beeda9a" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-c5865c2 elementor-widget elementor-widget-heading" data-id="c5865c2" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">Burn-out: desgaste emocional</h4>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-ef3abf2 elementor-widget elementor-widget-text-editor" data-id="ef3abf2" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Próximamente</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-09efc24 elementor-widget elementor-widget-text-editor" data-id="09efc24" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <p>Duración: hora</p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-9df334f elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="9df334f" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="/producto/burn-out-desgaste-emocional/">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Ver más</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-bd02d09 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="bd02d09" data-element_type="section" data-e-type="section" id="instituciones" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-94d597a" data-id="94d597a" data-element_type="column" data-e-type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-59fa676 elementor-widget elementor-widget-menu-anchor" data-id="59fa676" data-element_type="widget" data-e-type="widget" data-widget_type="menu-anchor.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-menu-anchor" id="instituciones" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-5824571 elementor-widget elementor-widget-heading" data-id={5824571} data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <h1 className="elementor-heading-title elementor-size-default">Instituciones</h1>				</div>
                          </div>
                          <div className="elementor-element elementor-element-a1a613c elementor-widget elementor-widget-text-editor" data-id="a1a613c" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              <p>Este espacio es amor de mi para mayores informes comunícate con nosotros</p>								</div>
                          </div>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-30d71c3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="30d71c3" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-15b4076" data-id="15b4076" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-13c64ca elementor-widget elementor-widget-heading" data-id="13c64ca" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">Conferencias </h4>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-8c46a15 elementor-widget elementor-widget-text-editor" data-id="8c46a15" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <ul><li><span style={{color: '#7e7e7e'}}>Frente al espejo.<br /></span></li><li><span style={{color: '#7e7e7e'}}><span style={{color: '#7e7e7e'}}>Resiliencia como estilo de vida.</span></span></li><li><span style={{color: '#7e7e7e'}}><span style={{color: '#7e7e7e'}}>Manejo del estrés y ansiedad en el área laboral.</span></span></li><li><span style={{color: '#7e7e7e'}}><span style={{color: '#7e7e7e'}}>Burn-out: desgaste emocional.</span></span></li><li><span style={{color: '#7e7e7e'}}><span style={{color: '#7e7e7e'}}>El duelo envuelto por la obligación.</span></span></li><li><span style={{color: '#7e7e7e'}}>La dignidad en el liderazgo.</span></li></ul>								</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6ce738b" data-id="6ce738b" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-cab8f66 elementor-widget elementor-widget-heading" data-id="cab8f66" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h4 className="elementor-heading-title elementor-size-default">Talleres</h4>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-33913d2 elementor-widget elementor-widget-text-editor" data-id="33913d2" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <ul><li><span style={{color: '#7e7e7e'}}>La vulnerabilidad y la dignidad en el liderazgo.</span></li></ul>								</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-e203f0f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e203f0f" data-element_type="section" data-e-type="section" id="sobre" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4460b89" data-id="4460b89" data-element_type="column" data-e-type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-777f0ee elementor-widget elementor-widget-menu-anchor" data-id="777f0ee" data-element_type="widget" data-e-type="widget" data-widget_type="menu-anchor.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-menu-anchor" id="sobremi" />
                            </div>
                          </div>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-09ad655 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="09ad655" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-74bb517" data-id="74bb517" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-c5b4d8d elementor-widget elementor-widget-image" data-id="c5b4d8d" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                      <img loading="eager" decoding="async" width={600} height={600} src="/public_clean/jessicahandal/wp-content/uploads/2022/08/Jessica_3.jpg" className="attachment-large size-large wp-image-771" alt srcSet="/public_clean/jessicahandal/wp-content/uploads/2022/08/Jessica_3.jpg 600w" sizes="(max-width: 600px) 100vw, 600px" />															</div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-363720f" data-id="363720f" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-fac2c18 elementor-widget elementor-widget-text-editor" data-id="fac2c18" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                                    <div className="elementor-widget-container">
                                      <h4>Mi camino al conocimiento</h4>
                                      <p>Psicóloga con Maestría en Terapia Sistémica. Posgrado en Terapia Racional Emotiva Cognitiva - Conductual.&nbsp;</p>
                                      <p><span style={{fontStyle: 'inherit'}}>Diplomado en Tanatología y diversas certificaciones para el apoyo en pérdidas emocionales.&nbsp;</span>Diplomado en Logoterapia.<span style={{fontStyle: 'inherit'}}>&nbsp;Diplomado en Psicoterapia de Parejas.</span><span style={{fontStyle: 'inherit'}}>&nbsp;&nbsp;</span></p>
                                      <p><span style={{fontStyle: 'inherit'}}>Doctorado en Psicoterapia Gestalt</span></p>
                                      <p><span style={{fontStyle: 'inherit'}}>Cursos enfocados en la neurociencia, t</span>anatología,<span style={{fontStyle: 'inherit'}}>&nbsp;procesos emocionales y eventos traumáticos.</span><span style={{fontStyle: 'inherit'}}><br /></span></p>
                                      <p>Actualmente e<span style={{fontStyle: 'inherit', fontWeight: 'inherit'}}>specialidad en Intervención a eventos traumáticos.</span><span style={{fontStyle: 'inherit', fontWeight: 'inherit'}}>&nbsp;</span></p>								</div>
                                  </div>
                                  <div className="elementor-element elementor-element-8bb8903 elementor-align-center elementor-widget elementor-widget-button" data-id="8bb8903" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-button-wrapper">
                                        <a className="elementor-button elementor-button-link elementor-size-sm" href="/public_clean/jessicahandal/wp-content/uploads/2023/09/Jessica_Handal_CV.pdf" target="_blank">
                                          <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">Ver CV</span>
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-a49b3c7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a49b3c7" data-element_type="section" data-e-type="section" id="contacto" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a17c1ca" data-id="a17c1ca" data-element_type="column" data-e-type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-b79a36f elementor-widget elementor-widget-menu-anchor" data-id="b79a36f" data-element_type="widget" data-e-type="widget" data-widget_type="menu-anchor.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-menu-anchor" id="contacto" />
                            </div>
                          </div>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-711450d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="711450d" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-414035a" data-id="414035a" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-fb4a07a elementor-widget elementor-widget-heading" data-id="fb4a07a" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                                    <div className="elementor-widget-container">
                                      <h2 className="elementor-heading-title elementor-size-default">Comunícate con nosotros</h2>				</div>
                                  </div>
                                  <div className="elementor-element elementor-element-a8a1821 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="a8a1821" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
                                    <div className="elementor-widget-container">
                                      <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                          <span className="elementor-icon-list-icon">
                                            <i aria-hidden="true" className="fas fa-envelope" />						</span>
                                          <span className="elementor-icon-list-text">contacto@jessicahandal.com</span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="elementor-element elementor-element-79aa806 elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="79aa806" data-element_type="widget" data-e-type="widget" data-widget_type="social-icons.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-social-icons-wrapper elementor-grid">
                                        <span className="elementor-grid-item">
                                          <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-2488f92" href="https://www.instagram.com/jessyhandal/" target="_blank">
                                            <span className="elementor-screen-only">Instagram</span>
                                            <i aria-hidden="true" className="fab fa-instagram" />					</a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e0230fa" data-id="e0230fa" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-10c534f elementor-button-align-end elementor-widget elementor-widget-form" data-id="10c534f" data-element_type="widget" data-e-type="widget" data-settings="{&quot;step_next_label&quot;:&quot;Siguiente&quot;,&quot;step_previous_label&quot;:&quot;Anterior&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                                    <div className="elementor-widget-container">
                                      <form className="elementor-form" method="post" name="Nuevo formulario" aria-label="Nuevo formulario">
                                        <input type="hidden" name="post_id" defaultValue={1304} />
                                        <input type="hidden" name="form_id" defaultValue="10c534f" />
                                        <input type="hidden" name="referer_title" defaultValue />
                                        <input type="hidden" name="queried_id" defaultValue={1304} />
                                        <div className="elementor-form-fields-wrapper elementor-labels-above">
                                          <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                                            <label htmlFor="form-field-name" className="elementor-field-label">
                                              Nombre							</label>
                                            <input size={1} type="text" name="form_fields[name]" id="form-field-name" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Nombre" />
                                          </div>
                                          <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                                            <label htmlFor="form-field-email" className="elementor-field-label">
                                              Correo electrónico							</label>
                                            <input size={1} type="email" name="form_fields[email]" id="form-field-email" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Correo electrónico" required="required" />
                                          </div>
                                          <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_7901e81 elementor-col-100">
                                            <label htmlFor="form-field-field_7901e81" className="elementor-field-label">
                                              Telefono							</label>
                                            <input size={1} type="tel" name="form_fields[field_7901e81]" id="form-field-field_7901e81" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Teléfono" pattern="[0-9()#&+*-=.]+" title="Solo se aceptan números y caracteres de teléfono (#,-,*,etc)." />
                                          </div>
                                          <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                                            <label htmlFor="form-field-message" className="elementor-field-label">
                                              Mensaje							</label>
                                            <input size={1} type="text" name="form_fields[message]" id="form-field-message" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Mensaje" />
                                          </div>
                                          <div className="elementor-field-type-recaptcha elementor-field-group elementor-column elementor-field-group-field_170a4ba elementor-col-100">
                                            <div className="elementor-field" id="form-field-field_170a4ba"><div className="elementor-g-recaptcha" data-sitekey="6LcvuGQpAAAAAH34pDaw44YiOiiO6nU-BnLJ9LfV" data-type="v2_checkbox" data-theme="light" data-size="normal" /></div>				</div>
                                          <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                            <button className="elementor-button elementor-size-sm" type="submit">
                                              <span className="elementor-button-content-wrapper">
                                                <span className="elementor-button-text">Enviar</span>
                                              </span>
                                            </button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-a36f1a2 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a36f1a2" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-447d4aa" data-id="447d4aa" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-511984c elementor-widget elementor-widget-spacer" data-id="511984c" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-9d5f8cd" data-id="9d5f8cd" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-d653199 elementor-widget elementor-widget-spacer" data-id="d653199" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f589d55" data-id="f589d55" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-045b034 elementor-widget elementor-widget-spacer" data-id="045b034" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-d3679cf" data-id="d3679cf" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-676004f elementor-widget elementor-widget-spacer" data-id="676004f" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-845b8da elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="845b8da" data-element_type="section" data-e-type="section">
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-169cbb1" data-id="169cbb1" data-element_type="column" data-e-type="column">
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div className="elementor-element elementor-element-ee89b88 elementor-widget elementor-widget-shortcode" data-id="ee89b88" data-element_type="widget" data-e-type="widget" data-widget_type="shortcode.default">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-shortcode">		<div id="sbi_mod_error">
                                          <span>Este mensaje de error solo es visible para los administradores de WordPress</span><br />
                                          <p><strong>Error: No se ha encontrado ningún feed.</strong>
                                          </p><p>Por favor, ve a la página de ajustes de Instagram Feed para crear un feed.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>{/* .entry-content .clear */}
            </article>{/* #post-## */}
          </main>{/* #main */}
        </div>{/* #primary */}
      </div> {/* ast-container */}
    </div>{/* #content */}
    <div className="hfe-before-footer-wrap">
      <div className="footer-width-fixer" />		</div>
    <footer data-elementor-type="footer" data-elementor-id={1313} className="elementor elementor-1313 elementor-location-footer" data-elementor-post-type="elementor_library">
      <section className="elementor-section elementor-top-section elementor-element elementor-element-1a66645 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1a66645" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-562235d" data-id="562235d" data-element_type="column" data-e-type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-35f4cc5 elementor-widget elementor-widget-text-editor" data-id="35f4cc5" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>Aviso de privacidad</p>								</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>{/* #page */}

  {/* Popup 1339 - Video */}
  {showPopup1339 && (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }} onClick={() => setShowPopup1339(false)}>
      <div style={{ position: 'relative', width: '640px', maxWidth: '90vw', backgroundColor: 'white', boxShadow: '2px 8px 23px 3px rgba(0,0,0,0.2)' }} onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setShowPopup1339(false)} style={{ position: 'absolute', top: '-40px', right: 0, background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer', padding: 0, width: '30px', height: '30px' }}>×</button>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe src="https://www.youtube.com/embed/XHOmBV4js_E" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} allowFullScreen title="Presentación" />
        </div>
      </div>
    </div>
  )}

  {/* Popup 1594 - Scroll to Top */}
  {showScrollTop && (
    <a href="#top" style={{ position: 'fixed', bottom: '20px', right: '20px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', border: 'none', color: '#000', fontSize: '24px', cursor: 'pointer', zIndex: 99, animation: 'fadeIn 1.2s ease-in' }} className="elementor-button elementor-button-link elementor-size-sm">
      <i aria-hidden="true" className="fas fa-arrow-up" />
    </a>
  )}
  {/* Instagram Feed JS */}
  </div>


  )
}
