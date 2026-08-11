# Points and Rewards

LiuMing has a **contribution points** and **reward redemption** system. Your community contributions (accepted problems and problem lists) turn into points, and you can redeem them for rewards such as **three times the free plan quota** (weekly paper assembly / AI grading quota ×3).

## Where Points Come From

Each time your **contribution passes review**, you earn points. Common sources:

- **Accepted problem contributions**: problems submitted in the [Question Bank](/en/basic/bank#contributing-questions) award points once they pass review.
- **Accepted problem lists**: public problem lists award points once they pass review.

> The exact number of points awarded each time is **decided by the admin during review** (the reward value is filled in at review time). Points are credited automatically when a problem list / problem passes review; no manual claiming is needed.

## Viewing Points and Transaction History

View them under "Personal Center → My Points":

- **Current points**: your available balance.
- **Total earned / total redeemed**: all the points you've earned / redeemed over time.
- **Transaction history**: every change (amount, balance after the change, reason, type, and time) is recorded and fully traceable.

## Redeeming Rewards

Currently available for redemption: **three times the free plan quota (30 days)**, costing **15 points**:

- After redemption, your **paper assembly and AI grading quotas** are **×3** while active.
- **Duration**: 30 days. If you already have an active triple quota when you redeem, **30 days are added to the current expiry date**.
- Redemption requires **at least 15 points**; if your points are insufficient, you'll be told how many more you need.
- The status of redeemed rewards (whether active, the multiplier, and the expiry time) is shown in real time on the "My Points" page.

> The triple quota belongs to the [Quota Management](/en/basic/grading#quota-management) system: it temporarily multiplies the **weekly paper assembly quota** and **weekly AI grading quota** in your plan by 3, while all other billing rules stay the same.

## Why Quotas Are Limited

Paper assembly (the PDF is compiled from LaTeX on the backend) and AI grading (which calls large models) are both **compute-intensive** features. Every use consumes the server's computing resources. Without quotas, a few users consuming heavily could overload the server and leave **all users** (yourself included) unable to use the platform.

The quota system exists precisely to prevent this:

- **Stability**: it keeps computing consumption within what the whole platform can sustain, so everyone can use it smoothly at any time.
- **Fairness**: every user gets a fixed weekly quota according to their plan, so a few heavy users can't crowd out everyone else's usage.
- **Reasonable use encouraged**: the weekly quota is more than enough for the paper assembly and AI grading that normal study and practice require.

::: tip What doesn't count against your quota?
Only **paper export** and **AI grading**, the two compute-intensive features, are billed against your quota. Regular features like invite grading, self-grading, and online judging **don't consume** any quota, so feel free to use them.
:::

## This Site Offers No Paid Plans

LiuMing **offers no paid plans**, and quotas **can't be bought or topped up with money**.

- All users' plan quotas are **allocated by the platform, uniformly and free of charge**, issued on a fixed weekly schedule, equally to everyone.
- If you want more quota, the **only** official way is:
  1. **Redeem points**: spend points to redeem "three times the free plan quota" (see above);
  2. **Admin grants**: for users with special contributions to the platform, admins may grant extra quota at their discretion.
- The platform **will not** sell quotas, memberships, acceleration services, or paid privileges in any form. Any claim that you can "pay for quota / membership" has nothing to do with this site; don't believe it, and beware of scams.

::: danger Don't trust paid channels
There are no paid upgrade channels on this site. If someone sells you quota, membership, or acceleration services in the name of "LiuMing official", that's **a scam**. Report them to the admins in the discussion board right away.
:::

## Related

- The full flow of contributing problems / problem lists and going through review is covered in [Question Bank](/en/basic/bank) and [Problem List Details](/en/basic/problem-list).
- The quota billing for paper assembly and AI grading is covered in [Grading Center · Quota Management](/en/basic/grading#quota-management).
