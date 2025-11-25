//{!1} The Emitter manages all the particles.
class Emitter {

  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin.x, this.origin.y));
  }

  applyForce(force) {
    //{!3} Applying a force as a p5.Vector
    for (let particle of this.particles) {
      particle.applyForce(force);
    }
  }

  applyForceObject(fObj) {
    for (let particle of this.particles) {
      let force = fObj.getForce(particle);
      particle.applyForce(force);
    }
  }

  // applyAttractor(fObj) {
  //   for (let particle of this.particles) {
  //     let force = fObj.getForce(particle);
  //     particle.applyForce(force);
  //   }
  // }

  // applyRepeller(fObj) {
  //   //{!4} Calculating a force for each Particle based on a Repeller
  //   for (let particle of this.particles) {
  //     let force = fObj.getForce(particle);
  //     particle.applyForce(force);
  //   }
  // }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      particle.run();
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}