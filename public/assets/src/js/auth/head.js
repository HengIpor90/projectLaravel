import { getNavLink } from '../data/field.js';

export class Group {

    renderNavbarLink() {
        getNavLink.getNavLink();
    }

    renderOutput() {
        this.renderNavbarLink();
    }
}
