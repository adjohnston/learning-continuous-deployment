# learning-continuous-deployment

Getting an understanding of how to continuously deploy with CirclCI &amp; Zeit Now

---

## Setup

* `master` is production and is protected from force pushes and requires pull requests to be up to date before merge. We can also require that status checks pass for jobs in the Circle CI workflow to have passed including `test` & `deploy-stage`.

* Create a `stage` branch and this branch will have development branches merged into it and requires pull requests to be up to date. We can also require that status checks pass for jobs in the Circle CI workflow to have passed including `test`.

* We generate a Now token and save that into Circle CI environment variables. Now when we go to deploy we can pass it through using `{NOW_TOKEN}`.
