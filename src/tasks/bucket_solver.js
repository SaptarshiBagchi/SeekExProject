class BucketSolver {
  constructor(buckets, balls) {
    this.buckets = buckets
    this.balls = balls

    // generate the results
    for (const bucket of this.buckets) this.putBallsInBucket(bucket)
  }
  /**
   * The bucket solver algorithm
   * @param {*} bucket The bucket in which we are trying to fit the balls
   */
  putBallsInBucket(bucket) {
    // first sort the balls to get the biggest ones first along with the remaining
    this.balls.sort((a, b) => a.size > b.size)
    //Iterate through all the available balls and try to fill the max ones first.
    // Since we are sorting the balls based on their sizes in DESC we can always guarentee the biggest balls are filled first and the auxilliary spaces are filled with the
    for (const ball of this.balls) {
      if (bucket.space) {
        const maxBallsCanBeAddedToThisBucket = Math.min(ball.quantity, Math.floor(bucket.space / ball.size))
        if (maxBallsCanBeAddedToThisBucket) {
          bucket.space -= maxBallsCanBeAddedToThisBucket * ball.size

          // we will store the result into these balls property of the buckets
          if (!bucket.balls) bucket.balls = []
          bucket.balls.push({ ball_name: ball.name, ball_size: ball.size, quantity: maxBallsCanBeAddedToThisBucket })
          ball.quantity -= maxBallsCanBeAddedToThisBucket
        }
      }
    }
  }
}

module.exports = BucketSolver
