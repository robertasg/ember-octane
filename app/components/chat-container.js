import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';

import fetch from 'fetch';

export default class ChatContainerComponent extends Component {
  @inject auth

  @tracked
  messages = [];

  @action
  async loadMessages() {
    const { channel: { id, teamId } } = this.args;

    const response = await fetch(`/api/teams/${teamId}/channels/${id}/messages`);
    this.messages = [...(await response.json())];
  }

  @action
  async deleteMessage(messageId) {
    const response = await fetch(`/api/messages/${messageId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const messageIds = this.messages.map(message => message.id);
    const indexToDelete = messageIds.indexOf(messageId);
    this.messages.splice(indexToDelete, 1);
    this.messages = this.messages;
  }

  @action
  async createMessage(body) {
    const {
      channel: { id, teamId }
    } = this.args

    const userId = this.auth.currentUserId;

    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        teamId: teamId,
        channelId: id,
        userId: this.auth.currentUserId,
        body: body
      })
    })

    if (!response.ok) throw Error('Could not save chat message');
    const messageData = await response.json();
    const user = await (await fetch(`/api/users/${userId}`)).json();

    this.messages = [
      ...this.messages,
      {
        ...messageData,
        user
      }
    ]
  }
}
