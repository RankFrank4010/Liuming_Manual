# Registration and Login

LiuMing supports **multiple ways to log in**: you can log in with **username + password**, verify with **phone number + SMS**, or enable the more convenient and secure **Passkey** (passwordless fingerprint / face login) and **OTP** (dynamic verification codes). You can use just one of them, or bind several at the same time, whichever fits your habits.

::: tip Pick any method you like
When registering, you need to send an SMS from your phone to complete verification. After registration, as long as things are set up properly, everyday login can be done **without sending any more SMS messages or incurring SMS charges**: **password** login is the most straightforward, **Passkey** gives you one-tap passwordless login, and enabling **OTP** two-step verification adds extra security. Phone number + SMS login mainly serves as a backup (for when you forget your password or switch devices). All methods point to the same account and don't conflict with each other.
:::

This page is for new users on their first visit to LiuMing. It walks through, step by step, how to register, log in, change your phone number, and manage login methods, plus the security matters to watch out for during use. If you run into trouble, check the [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq) at the end of this page first; most questions are answered there.

## Introduction

LiuMing's account system is very intuitive. It can be summed up in one sentence:

> **One account, many methods. Your phone number is the foundation of your account.**

This sentence means two things:

- **Register once, choose your methods**. During registration you create your account (username + password) and bind your phone number; afterwards, log in with whichever of password, SMS, Passkey, or OTP you prefer.
- **Your phone number proves account ownership**. Your phone number is the most important credential for recovering your account, verifying your identity, and changing login methods. Please be sure to use a real phone number **in your own name**.

::: tip Why does SMS login require you to "actively send"?
LiuMing's SMS login works the opposite of most websites: **instead of waiting to receive a verification code, you actively send an SMS from your phone**. This is done to **prevent disposable phone numbers from being used to register bot accounts in bulk**: disposable numbers from code-receiving platforms can mostly only receive SMS, not send it, so they can't pass verification, and bulk registration is blocked at the source. For normal users, just send one SMS from your own phone as the page instructs; the process is simple.
:::

### Login Methods at a Glance

| Method | How to log in | Best for |
| --- | --- | --- |
| **Username + password** | Enter username / phone number and password | Everyday login; the most common |
| **Phone number + SMS** | Actively send an SMS from your phone to verify | Forgot password, switching devices, backup |
| **Passkey** | One-tap confirmation with fingerprint / face / device PIN | Quick passwordless login, convenient and secure |
| **OTP** | After logging in with password / Passkey, enter the 6-digit dynamic code from your authenticator app | Two-factor verification, an extra security lock for login |

Detailed steps for each method are in the corresponding sections below.

## Registration (First Use)

There are two ways to register for the first time; pick either one:

- **Method 1: Register with your phone number (recommended)**: enter your phone number, actively send an SMS from your phone as prompted, then set a username and password once verification passes. This also binds your phone number, which makes password recovery and changing login methods easier later.
- **Method 2: Register with a username and password**: set your username and password directly to finish registration. We recommend binding your phone number afterwards (see [Changing Your Phone Number](#changing-your-phone-number)) so you can recover your account in the future and strengthen security.

Below is the complete step-by-step flow using **Method 1 (phone number registration)** as an example.

### Step 1: Enter the Registration Page

- Open the LiuMing homepage and click the **Register** button in the top-right corner; you can also click **Log In** first, then switch to "Register" on the login page.
- On the registration page, choose **register with phone number** to enter the phone number verification screen.

::: tip Led to the registration page from a feature page?
If you were brought here from a specific feature (for example opening a problem, joining a contest, or viewing homework), the flow is exactly the same. Once you register and log in, you'll be redirected back to the page you originally wanted to visit, so nothing is lost.
:::

### Step 2: Enter Your Phone Number

- **Fill in your phone number** in the input box. Make sure the number is correct, has no extra spaces, and contains no stray symbols.
- For a mainland China phone number, just enter the **11-digit number** (for example `13800000000`); there's no need to add a country code manually.
- If your phone number includes a country code, fill it in following the format shown on the page; if you're unsure, start by entering the 11-digit number.

::: danger Don't enter someone else's number
Accounts and phone numbers correspond one to one. Entering someone else's phone number will fail verification, because the SMS can only be sent from the number you entered. Please enter **your own** phone number.
:::

### Step 3: Confirm Your Phone Number

- After you submit your phone number, the system will **display the formatted phone number** for you to double-check. For example, if you enter `13800000000`, it will be shown in a more readable grouped format on the page.
- Check every digit carefully, and only move on once it's correct.
- If the number is wrong, click **Back** or **Change** and re-enter it; there are no consequences.

::: tip Why confirm a second time?
This step is to prevent typos. The system only accepts **an SMS sent from the number you entered**; if the number is wrong, the SMS you send afterwards will be wasted. Spending three extra seconds to double-check can save you an entire round of operations later.
:::

### Step 4: Send the SMS

- After confirming the number, the page will show a **send instruction**: use your phone **`138****0000`** (the number you just entered) to send an SMS to a specified number; the SMS content may be a few strings of characters or a one-time code.
- Take out your phone, open the messaging app, and **compose a new SMS**: put the specified number shown on the page in the recipient field and the characters required by the page in the content field, then **send** it.
- After sending, the page will detect it automatically. Keep the page open and don't close it; wait for the platform to confirm it received your SMS.

::: warning About SMS charges
This SMS is **sent from your phone at the normal SMS rate**, consuming the SMS allowance in your phone plan (or charged per message, usually less than a dime). Sending it once is enough; the platform won't ask you to send it repeatedly.
:::

::: tip What to do after sending?
After you send the SMS, do nothing; just keep the page open and wait. Once the platform receives your SMS, verification is **completed automatically**, usually redirecting to the next step within seconds to a few dozen seconds. If nothing happens after a minute or two, you can re-initiate as the page prompts, or look up a fix in the [Frequently Asked Questions](#frequently-asked-questions-faq) at the end of this page.
:::

### Step 5: Set Username and Password

Once verification passes, you'll set up your account:

- **Username**: choose a name your classmates and teachers can recognize; it will be used for password login. This is the name everyone in the community sees, so choose carefully and avoid content that violates rules or is likely to cause controversy.
- **Password**: set your login password. We recommend a **sufficiently long password mixing letters and numbers**, and don't reuse passwords from other websites. Your password is used for everyday login (see [Password Login](#method-1-password-login-username--password)).

### Step 6: Complete Your Profile

The last step of registration guides you through completing your profile:

- **Role / grade level**: choose your grade (lower primary, upper primary, junior high, senior high). This determines your learning profile and affects the defaults for problem recommendations and grade-level filtering.
- **Avatar**: optional. Setting an avatar makes it easier for people to recognize you, but you can still use the platform normally without one.

::: tip You can change your profile anytime
Completing your profile the first time is only for a better experience; you can skip it or change it later in **Account Settings**. For details about account information, see [Account and Security](/en/basic/account-safety).
:::

::: tip Registration complete!
After completing the steps above, you're officially part of LiuMing. Next, you can browse [Feature Overview](/en/basic/features) to see what the platform can do, or open a problem and start your first practice. For community discussions, read the rules in the [Discussion Forum](/en/policies/rule) first, then join in.
:::

::: tip Logging in later costs nothing
Sending an SMS for verification at registration is a **one-time required step** (to confirm your phone number is real and valid). After registering, as long as you log in with **username + password** or **Passkey**, everyday logins no longer require SMS and incur no SMS charges; SMS login is only used in backup scenarios like forgetting your password or switching devices. We recommend logging in with your password once soon after registering to get familiar with your everyday login method.
:::

### Registration Summary

| Step | What you do | Key point |
| --- | --- | --- |
| Enter the registration page | Click **Register** in the top-right | Register with phone number or username + password |
| Enter your phone number | Fill in the 11-digit phone number | Make sure it's your own number |
| Confirm your phone number | Double-check the number shown | A wrong number means a wasted SMS |
| Send the SMS | Send the SMS as instructed on the page | Recipient and content must match the page |
| Set username and password | Create your account name and password | Password is used for everyday login |
| Complete your profile | Set grade level and avatar | Can be changed anytime later |

### Messages You May See During Registration

| Message | Meaning | What to do |
| --- | --- | --- |
| "Incorrect SMS content" | The SMS content you sent doesn't match the page requirement | Resend with the characters shown on the page |
| "Incorrect SMS recipient number" | The recipient number is wrong | Resend to the number shown on the page |
| "Verification timed out, please retry" | The wait timed out or the SMS didn't arrive | Re-initiate as the page prompts |
| "Too many requests" | Too many attempts in a short time | Wait a while and try again |
| "Phone number already registered" | This number already has an account | Just follow the login flow to log in |
| "Username already exists" | That username is taken | Choose a different username |
| "Please enter a valid phone number" | The number format is wrong | Check the digits and any spaces |

If you see a message not in the table above, follow the text on the page, or ask in the discussion forum.

## Logging In

LiuMing supports multiple login methods; choose whichever is most convenient. All methods log into the same account.

### Method 1: Password Login (Username + Password)

The most common everyday method:

1. Open the LiuMing website and click the **Log In** button in the top-right corner.
2. On the login page, enter your **username** (or bound **phone number**) and **password**.
3. Click log in; once verification passes, you're in the platform.

::: tip Forgot your password?
If you forget your password, you can select "Forgot password" on the login page and reset it after verifying your identity by **sending an SMS from your bound phone number**. This requires your phone number to be bound at registration, which is why we recommend binding it soon after registering.
:::

### Method 2: Phone Number + SMS Login

Use this when typing a password isn't convenient (forgot password, switched devices, or a public place where typing a password is awkward):

1. Select **phone number login** on the login page.
2. Enter your phone number and confirm the displayed number is correct.
3. Follow the instruction shown on the page and **actively send an SMS** from that phone number to the specified number (content as shown on the page).
4. Keep the page open and wait for the platform to confirm it received the SMS; once verified, you're logged in.

::: tip
The whole process usually takes under **30 seconds**. As long as your phone is at hand, has signal, and can send SMS, logging in is very fast. This is also the main way to recover your account when you forget your password.
:::

### Method 3: Passkey Login (Passwordless)

If you've already enabled Passkey, you can choose **Passkey login** on the login page:

1. Click **Log in with Passkey** (or "use passkey").
2. Complete on-device verification as prompted, usually **fingerprint or face recognition**, or entering your **device PIN**.
3. Once verified, you're logged in, with no password or SMS needed.

::: tip What is a Passkey?
A Passkey is a **passwordless login** method: your device (phone / computer) itself acts as the "key", and you confirm your identity with fingerprint, face, or device PIN. It's faster than a password and much harder to steal. See [Managing Login Methods](#managing-login-methods) for how to enable it.
:::

### Method 4: OTP Two-Factor Verification (Extra Security Lock)

OTP (one-time password) **cannot be used to log in by itself**; it only serves as **two-factor verification**: after logging in with a password (or Passkey), you additionally enter a dynamic code generated by your authenticator app, adding an extra security lock to your login.

Once OTP is enabled, password login becomes a two-step process:

1. Enter your username and password; verification passes.
2. Open your bound **authenticator app** (such as Google Authenticator, Microsoft Authenticator, etc.), read the current 6-digit dynamic code, and enter it.
3. Only after both verifications pass is the login complete.

::: tip Who is OTP for?
OTP suits users who want higher account security. Even if your password leaks, no one can log into your account without the dynamic code. See [Managing Login Methods](#managing-login-methods) for how to enable it.
:::
::: danger About recovery codes
When enabling OTP, be sure to **safely save the recovery / backup codes provided on the page**. If you change phones or accidentally delete your authenticator app, recovery codes are the only way to recover your account; if you lose the recovery codes and can't log in, your account may be unrecoverable.
:::

### Common Login Scenarios

- **Switched to a different device**: log in by sending an SMS from your phone number, or with username + password. Your login data is all stored in the account, so it isn't tied to any device.
- **Switched to a different browser**: verify with any method; everything works as usual once you're logged in.
- **Haven't logged in for a long time**: doesn't affect your account or data. After logging back in, your practice records, wrong answer notebook, points, and more are all still there.

::: warning Logging in on a shared device
If you're logging in on a shared device such as a classroom computer, computer lab, or public library machine, please **log out** before leaving and don't check options like "remember me". For security precautions on shared devices, see [Account Security Reminders](#account-security-reminders) below.
:::

## After Logging In

Once you log in, you have the full power of a LiuMing account. Here are the main entries you'll come across first:

- **Personal homepage**: click the avatar in the top-right corner to enter. It shows your practice heatmap, submission history, recent practice, favorites, and wrong answer notebook, and is also the entry for others to view your public profile.
- **Account settings**: find it in your personal menu. Maintain your **role / grade level**, **editor mode** (visual mode or code mode), and other personal configuration here.
- **Account center**: changing your phone number, changing your password, and managing Passkey / OTP all happen here.
- **Discussion forum**: you can only post, reply, and join community discussions after logging in. Please follow the [Community Rules](/en/policies/rule) when speaking.

::: tip Where are these entries?
The avatar or nickname menu in the top-right corner of various pages is the unified entry point. After logging in, a good first move is to browse this menu to get familiar with where everything is.
:::

### Quick Reference for Common Actions After Login

| What you want to do | Where to go | Notes |
| --- | --- | --- |
| Change your phone number | Account center → Phone number | See [Changing Your Phone Number](#changing-your-phone-number) below |
| Change your password | Account center → Password | Change it regularly; use a strong password |
| Enable Passkey | Account center → Login methods | See [Managing Login Methods](#managing-login-methods) below |
| Enable OTP | Account center → Login methods | See [Managing Login Methods](#managing-login-methods) below |
| Change nickname / grade level | Account settings | See [Account and Security](/en/basic/account-safety) |
| Switch editor mode | Account settings → Editor mode | Visual mode or code mode |
| View practice data | Personal homepage | Heatmap, submission history, recent practice |
| Join discussions | Discussion forum | Must follow [Community Rules](/en/policies/rule) |
| Log out | Avatar menu → Log out | Always do this on shared devices |

### Common Questions About Login State

- **How long does login state last**: your login state renews automatically while valid, so as long as you use the platform regularly, you'll rarely feel the need to log in again.
- **Does switching browsers log me out?** Yes. Login state is tied to the browser; after switching browsers or clearing browser data, you'll need to log in once again.
- **Does clearing cookies lose data?** No. Cookies only hold login state; your account data is stored on the server, and everything is exactly as before after you log back in.

## Managing Login Methods

In **Account center → Login methods**, you can manage all the login methods bound to your account:

- **Password**: change your password; we recommend a **sufficiently long strong password mixing letters and numbers**, and don't reuse passwords from other websites.
- **Phone number**: bind / change your phone number (see below). Your phone number is an important credential for recovering your account, so we recommend keeping it bound.
- **Passkey**: add or remove Passkeys. Once enabled, devices with fingerprint / face recognition can log in passwordlessly with one tap; we recommend adding one on each of your common devices (phone, laptop).
- **OTP**: enable or disable OTP (two-factor verification). When enabling, you first scan the QR code on the page with your authenticator app to complete the binding; afterwards, when logging in with a password (or Passkey), you also need to enter the dynamic code the app generates. OTP only serves as two-factor verification and cannot be used to log in by itself.

::: tip Suggested combinations
- For **convenience**: password + Passkey, everyday fingerprint / face one-tap login.
- For **security**: password + OTP two-step verification, or phone number SMS as a backup.
- Whatever combination you choose, we recommend **binding your phone number**; it's the fallback credential for recovering your account.
:::

## Logging Out

After using a shared device (classroom computer, computer lab, library computer), be sure to log out:

### Steps

- Click the **avatar** in the top-right corner to open your personal menu.
- Find **Log out** (or "Sign out") at the bottom of the menu and click it.
- When the page returns to the logged-out state, you've logged out successfully.

::: danger Always log out on shared devices
Logging in on a shared device and forgetting to log out is the same as leaving your account for the next user. If violations result from this, the platform treats the account as responsible; explaining "it wasn't me" won't get you off the hook. Take one more look before you leave to make sure you're logged out.
:::

### About Browser Autofill

- On shared devices, **don't** let the browser remember your username, password, or phone number.
- On your own devices, you may let the browser save login information for convenience, but make sure the device itself has a lock screen password.

## Changing Your Phone Number

When you get a new phone number, or want to switch to another number, you can complete the rebinding in the **Account center** without re-registering and without losing any data.

### Step 1: Open the Account Center

- After logging in, click your **avatar** or **nickname** in the top-right corner to enter the account center.
- In the account information area, find the **phone number** field and click **Change** or **Change phone number**.

### Step 2: Verify Your Identity

- For security, you usually need to verify your current identity before changing your phone number (such as entering your current password or sending an SMS as prompted), to confirm it's really you.
- Complete the verification as the page instructs.

### Step 3: Enter Your New Phone Number

- **Fill in the new phone number** you want to bind in the dialog.
- After submitting, check the formatted number the system displays to make sure it's correct.

::: danger The relationship between the old and new phone numbers
Changing your phone number **transfers the binding**, not merges accounts or re-registers. All your data, including practice records, wrong answer notebook, points, favorites, and teams, stays on the original account; only the phone number used for login changes to the new one.
Please be sure to use a new phone number **in your own name**. If you switch to someone else's number, you're effectively handing your account to that person, and you'll bear the consequences.
:::

### Step 4: Send an SMS from the New Phone Number

- The page will show the send instruction: send an SMS from the **new phone number** to the specified number (content as shown on the page).
- Take out your new phone and **send the SMS** as instructed on the page.
- Once the platform receives the SMS and confirms the number, your account binding is transferred.

::: tip Which phone sends the SMS?
Note: this SMS must be sent from the **new phone number**, not the old one. Make sure the new phone is at hand and can send SMS before starting the change, to avoid getting stuck at the sending step.
:::

### Step 5: Finish the Change

- After the page confirms the change succeeded, **use the new phone number** for SMS login or account recovery from now on.
- The old phone number is no longer associated with the account.

::: warning Confirm after the change
After the change, we recommend logging in end to end with the new phone number right away to confirm it works. Also remember your own account data (such as nickname and UID) in case you need to verify your identity later.
:::

### Scenarios for Changing Your Phone Number

- **Got a new number**: follow the steps above to rebind to the new number and keep using the platform normally.
- **Lost your old phone**: if you can still log into the account through another device, log in and change your phone number right away, so that if your new SIM falls into someone else's hands, they can't take over your account.
- **Old number deactivated, can't verify**: if you can't verify through the phone number, try logging in with **username + password** and then change it; if you've also forgotten your password, contact an admin in the discussion forum, explain the situation, and provide as much account information as you can (nickname, UID, common devices, etc.) so your identity can be verified.

### Changing Your Phone Number and Parental Supervision

- If your account already has a supervision relationship with a parent's account, changing your phone number **does not** remove the supervision relationship.
- Changing your phone number only changes the login credential; your learning data and the supervision binding all stay the same. See [Parental Supervision](/en/basic/guardian) for details.

## Account Security Reminders

Account security needs both you and the platform to work together. The following are the bottom line; please keep them firmly in mind:

- **Set and protect your password**. Use a **sufficiently long password mixing letters and numbers**, don't reuse passwords from other websites, and don't let the browser remember your password on shared devices.
- **Take good care of your phone number**. Your phone number is the foundation for recovering your account and verifying your identity. Don't casually hand your real-name phone number to others to register or log in on your behalf, and don't lend it out either.
- **Enabling Passkey / OTP gives more peace of mind**. Enable **Passkey** on your common devices, or turn on **OTP** two-factor verification, to noticeably improve account security (see [Managing Login Methods](#managing-login-methods)).
- **Don't leak SMS instructions**. When using phone number SMS login, the sending content shown on the page is equivalent to a temporary password; **don't forward it to anyone**. Platform staff will never ask you to send the SMS instruction to someone else.
- **Don't use autofill or "remember me"**. When using this site on a public computer, be sure **not** to check remember login state, and try not to let the browser autofill information; remember to **log out** before leaving.
- **You bear the consequences if others use your account**. If your account is used by someone else on a shared device because you didn't log out, and violations result, the account is treated as responsible, and appeals like "it wasn't me" won't be accepted. Guard your login state.
- **Deal with anomalies promptly**. If you suspect someone else logged into your account, change your password immediately, **change your phone number in the Account center**, and contact an admin in the discussion forum, while keeping an eye on whether the account shows abnormal activity records.

::: danger Notes on login credentials
Login credentials include **your password, your phone number and the SMS you send, your Passkey device, and OTP dynamic codes**. A leak of any of these can endanger your account: **don't tell anyone your password, don't lend your phone for someone to log in, don't forward SMS instructions shown on the page, and don't reveal OTP dynamic codes**. Treat these credentials like you would your bank card PIN.
:::

::: warning Don't use disposable phone numbers
Don't register with disposable phone numbers or numbers that others receive messages for. Such accounts have limited functionality, and once the number is reclaimed, you won't be able to log into your account, and there's no way to recover it.
:::

## Frequently Asked Questions (FAQ)

This section collects the most common questions from new users. If your question isn't covered below, you can post it in the discussion forum, and you're also welcome to check other documentation.

### Q: Which login method is best?

- For everyday use, **username + password** is recommended: it's the most universal and incurs no SMS charges.
- Also enable **Passkey** (passwordless fingerprint / face) on your common devices; it's convenient and secure.
- Users who want higher security can enable **OTP** two-factor verification on top of a password (you'll also enter a dynamic code when logging in).
- Keep **phone number + SMS** as a backup and recovery route; we recommend staying bound, though you don't necessarily have to use it for everyday login.

### Q: Do I need to set a password?

- **Yes**. Set a username and password during registration; the password is used for everyday login.
- If you don't want to type a password every time, enable **Passkey** and log in with one tap using fingerprint / face.

### Q: What if I forget my password?

- Select "Forgot password" on the login page and reset it after verifying your identity by **sending an SMS from your bound phone number**.
- That's why **binding your phone number** after registration matters; it's the key credential for recovering your password.

### Q: What is Passkey and how do I use it?

- Passkey is a **passwordless login** method: confirm your identity with your device's built-in **fingerprint, face, or device PIN**, with no password needed.
- After adding a Passkey in "Account center → Login methods", just choose **Passkey login** on the login page.
- We recommend adding one on each of your common devices, such as your phone and laptop.

### Q: What is OTP and how do I use it?

- OTP (one-time password / dynamic verification code) is a **two-factor verification** method: it **can't log you in alone**, but works together with a password (or Passkey), meaning after your password verifies, you also enter a 6-digit dynamic code generated by an authenticator app (such as Google Authenticator, Microsoft Authenticator).
- Enable OTP in "Account center → Login methods" and scan the QR code with the app as the page instructs to complete the binding.
- Once enabled, password login becomes two steps: enter the password first, then the dynamic code. Even if your password leaks, no one can log in without the dynamic code.
- Safely save the recovery / backup codes from binding, so you can still log in after changing phones.

### Q: Do I get charged for sending SMS?

- Yes. This SMS is **sent from your phone at the operator's normal SMS rate**, consuming the SMS allowance in your plan or charging per message (usually less than a dime).
- Make sure your phone has enough SMS allowance or balance, so the SMS doesn't fail to send due to insufficient funds.
- However, **everyday login doesn't require SMS**: you only verify once by SMS at registration; afterwards, logging in with **username + password** or **Passkey** incurs no SMS charges. SMS login is only used in backup scenarios like forgetting your password or switching devices.

### Q: I sent the SMS, but the page isn't responding. What should I do?

Check the following in order:

1. **Confirm the SMS was sent**: check your phone's "Sent" folder or message history to confirm the SMS really went out, and that the recipient and content match what the page shows.
2. **Check the recipient number**: make sure the recipient number of the SMS **matches exactly** the specified number shown on the page (no extra, missing, or wrong digits).
3. **Check the SMS content**: make sure the content matches the page requirement **exactly**, including case and special characters, and don't add extra spaces.
4. **Wait a moment**: the platform needs a little time to receive and recognize the SMS, usually seconds to a few dozen seconds; keep the page open and wait patiently.
5. **Retry as the page instructs**: after confirming all of the above, re-initiate verification as the page prompts.

::: warning
If repeated attempts still get no response, switch to **username + password** login, or contact an admin in the discussion forum to report the issue, mentioning your carrier and the region of your phone number so it can be investigated. Don't keep hammering the initiate button; this may trigger rate limiting.
:::

### Q: It says "This phone number is already registered"?

- This means the phone number **has already been verified before**, so you may already have an account.
- Just follow the **login** flow: log in with username + password, or enter that phone number and send an SMS to access your existing account.
- If you're sure this isn't your number, check whether you typed it wrong; if you confirm someone else registered it, contact an admin in the discussion forum to verify and handle it.

### Q: After changing my phone number, can the old one still be used?

- After a successful change, the account's binding credential transfers to the new number, and the **old number is no longer associated** with the account (password login is unaffected).
- Be sure to keep the new number safe and remember your own account data (such as nickname and UID) in case you need them.

### Q: Can minors register?

- Yes. LiuMing is a practice learning platform for primary and secondary school students; students are welcome to register and use it.
- Registration requires phone number verification, so use a number in your own or a guardian's name, and use the platform with your parents' knowledge and consent.
- Parents can bind a student account through the **parental supervision** feature to check their child's learning remotely. See [Parental Supervision](/en/basic/guardian) for details.

### Q: Can one phone number register multiple accounts?

- **No**. One phone number corresponds to one account; once verified, it's bound to that account, and the same number can't be used to register a new account again.
- If you want to manage multiple identities (for example, another account in addition to a student account), you need to register with different phone numbers; the two accounts are independent.

### Q: Will a new phone affect my login?

- No. You can log in with **username + password**; for devices where Passkey is enabled, just add a Passkey again after switching.
- If your old phone number is deactivated, **change your phone number** on your original device first, or contact an admin for help; otherwise SMS login won't be able to complete verification.

### Q: Can I use a non-mainland-China phone number?

- Accounts **without a verified mainland China phone number will have limited functionality** and may not be able to use all of the platform's services.
- We recommend registering with a real, valid **mainland China phone number** for the full experience.

### Q: Will I lose data if I accidentally log out?

- No. Your practice records, wrong answer notebook, points, favorites, team data, and more are all saved in your account; everything is exactly as before after you log back in.
- As long as you remember your password or phone number, you can log back in at any time. Data is never lost from logging out.

### Q: Can I be logged in on multiple devices at the same time?

- Yes. Login state isn't tied to a device; you can use the same account on your computer, phone, and other common devices.
- Always log out on shared devices, so your account isn't left available to others.

### Q: Why does the page jump to another screen after I click "Log in"?

- That's normal. Login verification may be done on a separate page; the jump you see is the verification screen. After completing password / SMS / Passkey / OTP verification on this page, you'll be redirected back to LiuMing automatically.
- As long as verification passes, you're logged in; there's no need to worry about "being taken to another website".

### Q: What if I forget which device I logged in on?

- No need to worry. Just open LiuMing and log in again with any method.
- If you suspect a login session is still lingering on some shared device, **change your password** and enable OTP as soon as possible, or contact an admin to help sign it out.

### Q: Will changing my phone number interrupt my current login?

- No. After changing your phone number, the login state on your current device stays valid; you don't need to log in again right away.
- But the **next time** you use SMS login, be sure to verify with the new phone number.

### Q: My phone is deactivated or I changed SIM cards. Can I still log in?

- Yes. As long as you remember your **username and password**, you can log in normally; Passkey devices are also unaffected.
- If you've also forgotten your password and can't receive SMS, contact an admin in the discussion forum, explain the situation, and provide your account information so your identity can be verified.

### Q: Will my account data be deleted if I don't log in for a long time?

- No. Accounts and data are kept long term; not logging in for a long time doesn't affect any records.
- As long as you can still log in with any method, you can use it at any time.

### Q: Why does it say "Too many verification requests"?

- This is a **rate limit** the platform sets to prevent abuse. Too many verification attempts to the same phone number in a short time trigger this message.
- Wait a few minutes and try again; don't keep hammering the button after the message appears.
- If it still doesn't work after waiting a long time, contact an admin in the discussion forum with your phone number (only the last four digits are needed) and the specific time.

### Q: Can I register with my parents' phone number?

- If you don't have your own phone, you can use a number in a guardian's name, but **be sure to get parental consent**.
- After registering with a parent's number, subsequent SMS login and account recovery will both go through that number, so talk it over with your parents in advance.

### Q: How do I find my UID?

- UID is the unique number the platform assigns to each account. You can find it on your **personal homepage** or in the **account center**.
- When contacting an admin or setting up a binding (such as parental supervision), you may need the UID to verify your identity.

### Q: Can I change my nickname?

- Yes, you can change your nickname in **Account settings**. See [Account and Security](/en/basic/account-safety) for details.
- Your nickname is your display name in the community. After changing it, others will see the new name; historical records don't trace name changes.

### Q: Can I delete my account?

- The platform doesn't currently offer self-service account deletion. If you need to deal with your account for special reasons, contact an admin in the discussion forum and explain the situation.
- Before deletion, please be aware that data in the account, such as practice records, points, and contributions, may not be preserved.

### Q: Why did my profile change after logging in?

- LiuMing automatically syncs profile information (username, email, name, avatar, etc.) when you log in.
- If you change your profile in another web service that's connected to LiuMing, it syncs when you log into LiuMing, and vice versa. This is normal; no manual action is needed.

### Q: Can I still log in after being banned?

- Yes, you can log in, but when accessing features that require login, you'll see a **clear ban notice** (including the reason and ban status) that guides you into the appeal process.
- Being banned doesn't mean you can't log into your account. See [Account and Security](/en/basic/account-safety) for the exact mechanism.

### Q: Registration says my phone number format is wrong?

- Make sure you entered an **11-digit** mainland China number containing only digits.
- Check whether spaces, hyphens, or other symbols slipped in; if your number has an international country code, fill it in following the format shown on the page.

## Related

- For detailed explanations of the account system, bans and appeals, reporting, and the ticket system, see [Account and Security](/en/basic/account-safety).
- For an overview of the platform and all its features, see [Feature Overview](/en/basic/features).
- Please read the [Community Rules](/en/policies/rule) before using the platform; violations will be penalized accordingly.
- To learn how parents bind a student account and keep track of their child's learning, see [Parental Supervision](/en/basic/guardian).
