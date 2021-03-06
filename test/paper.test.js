'use strict';

const mock = require('egg-mock');

describe('test/paper.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/paper-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, paper')
      .expect(200);
  });
});
