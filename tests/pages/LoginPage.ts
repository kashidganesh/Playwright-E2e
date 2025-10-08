import { Page } from '@playwright/test';
import { BASE_URL } from '../utils/env';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(BASE_URL);
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}
