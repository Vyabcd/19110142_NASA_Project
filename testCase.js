const request = require('supertest');
const app = require('./server/src/app'); // Đây là tệp app.js của bạn

describe('Test API Endpoints', () => {
  it('GET ./planets', (done) => {
    request(app)
      .get('./planets')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        // Kiểm tra dữ liệu trả về khi GET ./planets
        done();
      });
  });

  it('POST ./launches', (done) => {
    request(app)
      .post('./launches')
      .send({ mission: 'Mission 1', rocket: 'Rocket 1', launchDate: '2023-11-05', target: 'Target 1' })
      .set('Content-Type', 'application/json')
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('GET ./launches', (done) => {
    request(app)
      .get('./launches')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('DELETE ./launches/:id', (done) => {
    const launchId = 1;

    request(app)
      .delete(`./launches/${launchId}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
