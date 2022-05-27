'use strict'

const btnNav = document.querySelector('.mobile_menu-btn')
const header = document.querySelector('.header')

btnNav.addEventListener('click', () => header.classList.toggle('nav_active'))
