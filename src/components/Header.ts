import Component from "../common/Component";
import { $ } from "../utils/dom";
import { logo } from "../assets/image";

interface HeaderProps {
  onSearchKeywordSubmit: (searchKeyword: string) => void;
  onLogoClick: () => void;
}

class Header extends Component<HeaderProps> {
  private formElement: HTMLFormElement | null = $<HTMLFormElement>("#search-form");

  protected getTemplate() {
    return /*html*/ `
      <h1 id="logo"><img src="${logo}" alt="MovieList 로고" /></h1>
      <div class="search-box">
          <form class="search-form">
            <input id="search-input" type="text" name="search-input" placeholder="검색" required/>
            <button id="search-button" type="submit" class="search-button">검색</button>
          </form>
      </div>
    `;
  }

  private resetSearchForm() {
    this.formElement && this.formElement.reset();
  }

  protected setEvent(): void {
    if (!this.props) return;

    const { onLogoClick, onSearchKeywordSubmit } = this.props;

    $<HTMLHeadingElement>("#logo")?.addEventListener("click", () => {
      onLogoClick();
      this.resetSearchForm();
    });

    const inputElment = $<HTMLInputElement>("#search-input");
    const searchForm = $<HTMLFormElement>(".search-form");

    searchForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (inputElment) {
        onSearchKeywordSubmit(inputElment.value);
      }
    });
  }
}

export default Header;
