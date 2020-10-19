import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class TeamsRoute extends Route {
  @inject auth;

  async beforeModel(transition) {
    await super.beforeModel(transition);

    if (!this.auth.currentUserId) {
      this.transitionTo('login');
    }
  }
}
