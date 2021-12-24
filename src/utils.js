import $ from 'jquery'

export const scrollTo = (to, duration) => {
    $('html, body').animate(
        {
            scrollTop: +to - 126,
        },
        duration || 1300
    )
}
