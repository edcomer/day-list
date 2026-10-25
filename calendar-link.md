# Making a Day List calendar link

Google sign-in only gives Day List access to your calendar for about an hour at a time. A calendar link avoids that: a tiny script runs in your own Google account and hands Day List your appointments whenever it asks. It's free, read-only, and stays connected.

Do this once, on a computer, signed in to the same Google account as your calendar.

1. Go to **script.google.com** and click **New project**.
2. Click **Untitled project** at the top and rename it `Day List calendar`.
3. Delete everything in the code box, then paste in the contents of [calendar-script.gs](calendar-script.gs). Click the **Save** icon.
4. **Limit the script to read-only.** Click the gear (**Project Settings**) in the left bar and check **Show "appsscript.json" manifest file in editor**. Go back to the code view (the **< >** icon), open **appsscript.json**, replace everything in it with the contents of [appsscript.json](appsscript.json), and click **Save**. Without this, Google gives the script permission to change your calendar as well as read it, even though it only reads.
5. Click **Deploy → New deployment**. Click the gear next to "Select type" and choose **Web app**.
   - **Description:** `Day List`
   - **Execute as:** Me
   - **Who has access:** Anyone
   - Click **Deploy**.
6. Google asks you to **Authorize access**. Choose your account. When it says Google hasn't verified the app, click **Advanced → Go to Day List calendar (unsafe)**, then **Allow**. The permission screen should say the script can *view* your calendars. This is your own script asking to read your own calendar.
7. Copy the **Web app URL**. It starts with `https://script.google.com/macros/s/` and ends with `/exec`.
8. In Day List, tap your initial button → **Calendar settings**, paste the URL into **Calendar link**, and tap **Save link**.

The link is saved to your account, so it works on your phone and your computer.

**Keep the URL private.** Anyone who has it can read your appointments (not change them). If it ever gets out, open the script and choose **Deploy → Manage deployments → Archive**, then make a new deployment and save the new URL in Day List.
