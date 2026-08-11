# Account and Security

This page introduces LiuMing's account system, the ban and appeal process, the reporting and ticket system, and the measures that prevent unreasonable waste of server resources, to help you understand the platform's governance and security design.

## Accounts and Login

- **Unified identity (phone number)**: multiple login methods are supported, including **username + password, phone number + SMS, Passkey (fingerprint / face, passwordless), and OTP one-time codes**, freely combinable (see [Registration and Login](/en/basic/account) for details). Secure login and automatic session renewal are supported. All you need is one verified phone number to access LiuMing; no extra registration is required.
- **Profile auto-sync**: your profile (username, email, name, avatar, roles, and so on) syncs automatically at every login; no manual maintenance is needed.
- **Roles**: users are either **regular users** or **admins**. Admins can enter the admin console to carry out governance and configuration.
- **Public profile**: others can view your practice heatmap, answer records, and recent problems through your profile page. The public information only includes what is allowed to be shown, and clearly displays your ban status.
- **Learning and editor settings**: in "Account Settings" you can maintain your **identity / school stage** (used for your learning profile), and in "Editor Mode" choose between **visual mode** and **code mode** (see [Input and Editor Details](/en/basic/editor)).

::: tip About privacy
Regular interfaces never return your private data. The **public profile** only exposes the fields that are allowed to be shown, and the ban status is visible to others.
:::

## Bans and Violation Periods

### Ban Tickets

Every ban is fully recorded as a **ticket**, showing "who initiated it → how it was handled → whether an appeal was filed → the final result". The entire process is traceable. The main statuses are:

- **Pending decision**: the admin hasn't made a decision yet.
- **Active ban**: the ban is in effect, including the duration (temporary, automatically lifted on expiry / permanent) and the specific restrictions (such as restricting practice, paper assembly, contests, and so on).
- **Under appeal / under review**: you've submitted an appeal and are waiting for the review.
- **Ended / revoked / no penalty / closed**: various final states.

### Violation Periods

Every ban you receive forms a **violation period**, which centrally records the violations within it:

- It records the start and end times, whether you are a **repeat offender** (repeated violations lead to harsher handling), and any manually extended duration.
- A period can contain multiple violation records (restrictions, explanations, penalty time).
- Current and historical violation periods are publicly queryable.

### Ban Feedback

::: danger What happens after a ban?
When your account is banned, accessing features that require login will show a **clear ban notice** (including the reason and ban status), and guide you into the appeal process.
:::

## Appeals

### Ban Appeals

Banned users can submit an **appeal** on their ban ticket with reasons attached:

- Admins can either **approve (lift the ban)**, **reject (uphold the ban)**, **adjust the penalty (change the ruling)**, or **request supplementary materials**.
- If supplementary materials are requested, you can add a **supplementary explanation** and the ticket is reviewed again; admins may also **revoke** the ban.

::: tip Want to improve your chances of a successful appeal?
Write the facts and your position clearly in your appeal. If supplementary materials are requested, provide them on time; otherwise, the appeal may not be processed further.
:::

### Content Appeals

For **rejected** problem / problem list contributions, you can file an appeal to request a review. Admins give the final result after handling it.

## Reports and the Ticket System

Reports and content review all flow through the **ticket system**, covering problems / problem lists:

- Every status change generates an **event** (operator, reason, time), forming a **traceable processing timeline**.
- Each ticket carries the target's title, creator, and latest events, making it easy to search and verify from the admin console.

### User Side

- **My tickets**: view the review status and events of all your problems / problem lists.
- **My contributions**: a summary of the review results for your problems and problem lists (including reasons for rejection).
- **File a report**: submit a report (with reasons) on violating problems / problem lists; a ticket and events are created at the same time.
- **Appeals**: only **rejected** tickets can be appealed.

### Admin Side

- Search all tickets by status and target type; view counts of pending / approved / rejected / under-appeal tickets.
- Handle appeals (approve / reject) and reports (confirmed and handled / no action taken, with an optional explanation).

## Preventing Unreasonable Waste of Server Resources

The platform has mechanisms in place to prevent behavior that unreasonably wastes server resources (such as bulk scraping or scripted access):

- For abnormal bulk requests, scripted access, and similar behavior, the platform **automatically applies temporary restrictions**; when necessary, admins impose access restrictions on the accounts or sources involved.
- Requests have reasonable timeouts to avoid long waits; ban status is clearly fed back and triggers a global notice.

::: tip
These measures are **transparent and invisible** to normal users: using the site and its features normally requires no extra action on your part. As long as you don't use scripts / bulk scraping, you won't be affected at all.
:::

::: danger Don't test the system
The exact detection methods are internal platform information and won't be disclosed. **Deliberately testing, bypassing, or attacking these mechanisms is itself a violation**, and will be handled under the [Community Rules and Penalties](/en/policies/rule).
:::

## Admin Console

Admins have the following console capabilities:

- **User management**: search users, view plans and quotas, adjust roles.
- **Ban management**: create bans, rule on them, review appeals, revoke bans.
- **Resource usage management**: maintain the restrictions that prevent unreasonable waste of server resources (the exact policies aren't disclosed publicly).
- **Content governance**: handle problem / problem list review, reports, and appeals.
- **Subject management**: configure subject code prefixes, school stages, and grading parameters (see [Question Bank](/en/basic/bank)).
- **Plan management**: maintain plan quotas, assign plans and extra quotas to users (see [Grading Center](/en/basic/grading#quota-management)).
- **AI grading configuration**: configure models, parameters, and limits (see [Grading Center](/en/basic/grading)).

::: note
The admin console isn't part of regular users' usage scope; this section is just for your understanding. For the relevant entry points and more details, see the corresponding feature docs.
:::

## Related

- For the contribution, review, and reporting flows for problems and problem lists, see [Question Bank](/en/basic/bank#contributing-questions) and [Problem List Details](/en/basic/problem-list).
- For quota details (plan / extra / usage), see [Grading Center Details](/en/basic/grading#quota-management).
- For parent supervision invitations and identity verification, see [Parental Supervision Details](/en/basic/guardian).
