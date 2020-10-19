import Route from '@ember/routing/route';
import { AVAILABLE_TEAMS } from '../teams'

export default class TeamsTeamRoute extends Route {
  async model({ teamId }) {
    return AVAILABLE_TEAMS.find(team => team.id == teamId)
  }
}
