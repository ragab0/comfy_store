import React from 'react'

export default function Header() {
  return (
    <header class="container flex justify-between items-center">
        <div class="logo flex items-center">
            <object data="imgs/logo.svg" width="150"></object>
        </div>
        <nav>
            <ul class="header-items flex gap-4 capitalize">
                <li><a href="/">home</a></li>
                <li><a href="/about">about</a></li>
                <li><a href="/products">products</a></li>
            </ul>
        </nav>
        <div class="car">
            <span>Cart</span>
            <span class="cartImg"></span>
        </div>
    </header>
  )
}
