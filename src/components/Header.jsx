export default function Header() {
  return (
    <header>
      <div class="container py-4 mb-8 flex justify-between items-center capitalize">
        <img alt="logo" src="../assets/imgs/logo.svg" width="150" />
        <nav>
          <ul class="flex items-center gap-8">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">products</a>
            </li>
          </ul>
        </nav>
        <button>
          cart
          <i>1</i>
        </button>
      </div>
    </header>
  )
}
