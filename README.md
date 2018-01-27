# learning-continuous-deployment

Getting an understanding of how to continuously deploy with CirclCI &amp; Zeit Now

---

## Setup

* `master` is production and is protected from force pushes and requires pull requests to be up to date before merge.

* Create a `stage` branch and this branch will have development branches merged into it and requires pull requests to be up to date.

* We generate a Now token and save that into Circle CI environment variables. Now when we go to deploy we can pass it through using `{NOW_TOKEN}`.
