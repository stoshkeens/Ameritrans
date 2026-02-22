# 🚛 Ameritrans — Google Sheets Setup Guide

## How It Works

When a driver fills out the application form on your website and clicks **Submit**, the data is automatically sent to a Google Sheet called **"Driver Applications"** — one row per application, with all 30 fields.

---

## Setup Steps (5 minutes)

### Step 1: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+ Blank spreadsheet**
3. Name it whatever you want (e.g., "Ameritrans Driver Applications")
4. You do NOT need to add headers — the script creates them automatically

---

### Step 2: Add Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete everything in the editor (the default `myFunction` code)
3. Open the file **`google-apps-script.js`** that I provided
4. Copy ALL the code and paste it into the Apps Script editor
5. Click **💾 Save** (or Ctrl+S)

---

### Step 3: Test It

1. In the Apps Script editor, select **`testSetup`** from the function dropdown (top toolbar)
2. Click **▶ Run**
3. It will ask for permissions — click **Review Permissions → your Google account → Allow**
4. Go back to your Google Sheet — you should see a test row with headers!
5. Delete the test row if you want (keep the headers)

---

### Step 4: Deploy as Web App

1. In Apps Script, click **Deploy → New deployment**
2. Click the ⚙️ gear icon next to "Select type" → choose **Web app**
3. Set these options:
   - **Description**: `Driver Application Form`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Click **Deploy**
5. **COPY THE URL** that appears — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb...LONG_ID.../exec
   ```
MY URL: https://script.google.com/macros/s/AKfycbxPtWeVMtJ_vde2MnWptRZd9lV1IErqgTuHCXRLU3yAtyWwLm5bEJeRomqlw6zvYwzbxA/exec

MY DEPLOYMENT ID: AKfycbxPtWeVMtJ_vde2MnWptRZd9lV1IErqgTuHCXRLU3yAtyWwLm5bEJeRomqlw6zvYwzbxA
---

### Step 5: Add URL to Your Website

1. Open each of these 3 files in a text editor:
   - `index.html`
   - `about.html`
   - `services.html`

2. Find this line (use Ctrl+F to search):
   ```
   YOUR_GOOGLE_SCRIPT_URL_HERE
   ```

3. Replace it with the URL you copied in Step 4. For example:
   ```javascript
   var GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
   ```

4. Save all 3 files and upload them to your website

---

## ✅ That's It!

Every time someone submits a Driver Application, a new row appears in your Google Sheet with all their data.

---

## Google Sheet Columns

| # | Column | Example |
|---|--------|---------|
| 1 | Timestamp | 2/21/2026, 3:45:00 PM |
| 2 | Full Name | John Smith |
| 3 | Email | john@email.com |
| 4 | Phone | (815) 555-1234 |
| 5 | Date of Birth | 1985-06-15 |
| 6 | SSN | 123-45-6789 |
| 7 | Street Address | 456 Oak Ave |
| 8 | City | Chicago |
| 9 | State | Illinois |
| 10 | ZIP | 60601 |
| 11 | Position | Driver Only |
| 12 | License Number | D400-1234-5678 |
| 13 | License Class | Class A |
| 14 | License State | Illinois |
| 15 | License Expiration | 2027-03-15 |
| 16 | Endorsements | HazMat, Tanker |
| 17 | Driving Experience | Van: 2018-2024, 500k miles... |
| 18 | Most Recent Employer | ABC Trucking |
| 19 | Employment Start Date | 2020-01-15 |
| 20 | Employment End Date | 2024-12-01 |
| 21 | Position Held | OTR Driver |
| 22 | Reason for Leaving | Better opportunity |
| 23 | FMC Safety Regulations | Yes |
| 24 | Additional Employment | XYZ Logistics, 2018-2020... |
| 25 | License Suspended/Revoked | No |
| 26 | Substance Convictions | No |
| 27 | Accidents (3 years) | No |
| 28 | Authorized | Yes |
| 29 | Printed Name | John Smith |
| 30 | Signature Date | 2026-02-21 |

---

## Troubleshooting

**"Application Submitted!" but no row in Sheet?**
- Make sure you replaced `YOUR_GOOGLE_SCRIPT_URL_HERE` in ALL 3 HTML files
- Make sure you deployed as **Web app** with access set to **Anyone**

**Permission denied?**
- Re-run the `testSetup` function and accept permissions again
- Make sure "Execute as" is set to **Me** (not "User accessing the web app")

**Want to update the script later?**
- Edit in Apps Script → Deploy → **Manage deployments** → Edit → **New version** → Deploy
