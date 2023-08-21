import { githubUser } from "./githubUser.js";

// Classe que vai conter a logica dos dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();

    // githubUser.search("JuliodsGarcia").then((user) => console.log(user));
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];

    console.log(this.entries);
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries));
  }

  async add(username) {
    try {
      const userExists = this.entries.find((entry) => entry.login === username);

      if (userExists) {
        throw new Error("Usuário ja existe!");
      }

      const user = await githubUser.search(username);

      if (user.login === undefined) {
        throw new Error("Usuário nao encontrado");
      }

      this.entries = [user, ...this.entries];
      this.update();
      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    );

    this.entries = filteredEntries;
    this.update();
    this.save();
  }
}

// Classe que vai criar ha View da aplicação.
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    console.log(this.root);
    this.update();
    this.onadd();
  }

  onadd() {
    const addButton = this.root.querySelector(".search button");
    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input");

      this.add(value);
    };
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;

      row.querySelector(".user img").alt = `Imagem de ${user.name}`;
      row.querySelector(".user p").textContent = user.name;
      row.querySelector(".user a").href = `https://github.com/${user.login}`;
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("tem certeza que deseja deletar esta linha?");

        if (isOk) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="user">
        <img
          src="https://github.com/JuliodsGarcia.png"
          alt="Imagem do Usuário"
        />
        <a href="https://github.com/JuliodsGarcia" target="_blank">
          <p>Julio Cesar</p>
          <span>jdsgarcia</span>
        </a>
      </td>
        <td class="repositories">76</td>
        <td class="followers">1080</td>
        <td>
          <span class="remove">Excluir</span>
        </td>
    `;

    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
