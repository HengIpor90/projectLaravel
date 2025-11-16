import { Data, Navbar } from './data.js';

export class items {

    getNavLink() {
        Data();

        const DemoItems = document.querySelector(".navbar-nav");
        const brand = document.querySelector(".brand");
        const Main = document.querySelector(".overlay-d-flex");

        if (DemoItems && brand && Main) {

            const { NavLink, Logo, field } = Navbar();

            brand.innerHTML = Logo;

            // Create Navbar Links
            NavLink.forEach(item => {
                const li = document.createElement("li");
                const a = document.createElement("a");

                li.style.listStyle = "none";
                a.href = item.link;
                a.textContent = item.file;

                li.appendChild(a);
                DemoItems.appendChild(li);
            });

            // 🔥 LOOP to create multiple cards
            field.forEach(itemField => {
                const Card = document.createElement("div");
                const titles = document.createElement("div");
                const GetPara = document.createElement("div");
                const line = document.createElement("div");

                Card.classList.add("card");
                line.classList.add("line");

                titles.textContent = itemField.textGet;       // bottom
                GetPara.textContent = itemField.ItemsGet;     // top

                Card.append(GetPara, line, titles);
                Main.appendChild(Card);


            });
        }
    }
}

export const getNavLink = new items();
