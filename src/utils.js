import { navigate } from 'gatsby'
import MarkdownIt from 'markdown-it'
import $ from 'jquery'

export const scrollTo = (to, duration) => {
    try {
        $('html, body').animate(
            {
                scrollTop: +to - 126,
            },
            duration || 1300
        )
    } catch {}
}

export const replaceAnchorsForLinks = element => {
    element.querySelectorAll('a').forEach(a => {
        if (a.href.indexOf('mailto:') !== -1) return

        if (a.host !== window.location.host) {
            a.target = '_blank'
        } else {
            a.onclick = e => {
                e.preventDefault()
                navigate(a.pathname)
            }
        }
    })
}

export const parser = new MarkdownIt({
    html: true,
})
