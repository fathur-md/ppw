function Header() {
  const currentPage = window.location.pathname;
  const navItems = [
    {
      name: "Data Mahasiswa",
      href: "./",
    },
    {
      name: "Konversi Suhu",
      href: "konversisuhu.html",
    },
    {
      name: "Class",
      href: "class.html",
    },
    {
      name: "Functional",
      href: "functional",
    },
  ];
  return /*html*/ `
    <nav class="app-navbar">
        ${navItems
          .map(
            (item) =>
              `
                <a
                    href="${item.href}"
                    class="${
                      item.href === "./"
                        ? currentPage.endsWith("/")
                          ? "app-active"
                          : ""
                        : currentPage.endsWith(item.href)
                          ? "app-active"
                          : ""
                    }"
                    >
                    ${item.name}
                </a>
            `,
          )
          .join("")}
    </nav>
    `;
}

export function renderHeader() {
  const header = document.getElementById("header");
  header.innerHTML = Header();
}
