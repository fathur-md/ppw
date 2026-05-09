export function initNavbar() {

  
  const header = document.querySelector("header");
  if (!header) return;

  const isLocal = window.location.hostname === "localhost";

  let root = isLocal ? "/" : "/ppw/uts/dist/";
  if (!root.endsWith("/")) root += "/";

  const menuItems = [
    { name: "Home", href: `${root}` },
    { name: "About", href: `${root}about/` },
    { name: "Contact", href: `${root}contact/` },
  ];

  const navLinks = menuItems
    .map((item) => {
      return `
      <li>
      <a href="${item.href}">
        ${item.name}
      </a></li>
    `;
    })
    .join("");

  header.innerHTML = `
    <nav class="flex w-full bg-gray-50">
        <div class="flex flex-col w-full items-center gap-2 p-4 max-w-5xl mx-auto text-sm font-normal">
            <a href="${root}">Logo</a>
            <ul class="hidden md:flex gap-4">
                ${navLinks}
            </ul>
        </div>
    </nav>
  `;
}
