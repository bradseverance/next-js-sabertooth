import Link from "next/link"

export default function MainHeader() {
    return (
        <header>
          <div className="logo">
            <div id="logo">
              <Link href="/">
                <img id="logo-image" alt="POLYWOOD Scheduler" />
              </Link>
            </div>
          </div>
          <div id="header-right-container"></div>
        </header>
    )
}