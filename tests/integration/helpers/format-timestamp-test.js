import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-timestamp', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('myDate', '2020-10-19');

    await render(hbs`{{format-timestamp myDate}}`);

    assert.equal(this.element.textContent.trim(), 'Oct 19, 2020 03:00.00 AM');
  });
});
