export function initNavbar() {
  const root = window.location.pathname.includes("/ppw/uts/")
    ? "/ppw/uts"
    : "/";
  const navbarHTML = `
    <nav class="flex w-full bg-gray-50">
        <div class="flex flex-col w-full items-center gap-2 p-4 max-w-5xl mx-auto text-sm font-normal">
            <a href="${root}">Logo</a>
            <ul class="hidden md:flex gap-4">
                <li><a href="${root}">Home</a></li>
                <li><a href="${root}about/">About</a></li>
                <li><a href="${root}contact/">Contact</a></li>
            </ul>
        </div>
    </nav>
  `;
  const header = document.querySelector("header");
  if (header) {
    header.innerHTML = navbarHTML;
  }
}
