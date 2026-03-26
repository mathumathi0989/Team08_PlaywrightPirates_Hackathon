import { ReusableMethods } from '../utilities/ReusableMethods.js';

export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.helper = new ReusableMethods(page);

    this.navigationBar = page.locator('nav');
    this.navBarText = page.locator('nav').getByText('Dietician Project');
    this.homeIcon = page.locator('nav svg, nav [data-testid="home-icon"], nav .home-icon').first();

    this.myPatientsLink = page.getByRole('link', { name: /my patients/i });
    this.newPatientLink = page.getByRole('link', { name: /new patient/i });
    this.loginLink = page.getByRole('link', { name: /^login$/i });
    this.logoutLink = page.getByRole('link', { name: /logout/i });
  }

  async clickNavLink(linkName) {
    if (linkName == 'My Patients') {
      await this.helper.click(this.myPatientsLink);
    } 
    else if (linkName == 'New Patient') {
      await this.helper.click(this.newPatientLink);
    } 
    else if (linkName == 'Login') {
      await this.helper.click(this.loginLink);
    } 
    else if (linkName == 'Logout') {
      await this.helper.click(this.logoutLink);
    }
  }

  async clickHomeIcon() {
    await this.helper.click(this.homeIcon);
  }

  async verifyNavLink(linkName) {
    if (linkName == 'My Patients') {
      await this.helper.assertVisible(this.myPatientsLink);
    } 
    else if (linkName == 'New Patient') {
      await this.helper.assertVisible(this.newPatientLink);
    } 
    else if (linkName == 'Login') {
      await this.helper.assertVisible(this.loginLink);
    } 
    else if (linkName == 'Logout') {
      await this.helper.assertVisible(this.logoutLink);
    }
  }

  async verifyAllNavLinks() {
    await this.helper.assertVisible(this.myPatientsLink);
    await this.helper.assertVisible(this.newPatientLink);
    await this.helper.assertVisible(this.loginLink);
    await this.helper.assertVisible(this.logoutLink);
  }

  async getAllNavLinks() {
    return await this.page.locator('nav a').all();
  }
}
