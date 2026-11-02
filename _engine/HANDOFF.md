# הוראות המשך לשיחה הבאה (Claude)

## האתר
- רפו: lomdot-p-b-a/lomdot-p-b-a.github.io (GitHub Pages, ענף main). אתר: https://lomdot-p-b-a.github.io
- `index.html` = מרכז הקורסים. מערך `COURSES` עם הקורסים mgmt, intro, social, dev, phys. כל לומדה היא פריט `{title,sub,href,key,total[,type,en]}`.
- קבצי הלומדות: mgmt/, org/, intro/. בפסיכולוגיה התפתחותית יש לשים אותם ב-dev/.

## המנוע (התיקייה הזו)
- לכל לומדה ארבעה קבצים: mN_cfg.js (CONFIG), mN_fig.js (FIG + טבלאות), mN_T.js (נושאים ובלוקים), mN_Q.js (בנק שאלות, 2 גרסאות לכל שאלה).
- בנייה: `python3 build.py mN "לומדת חובת קריאה: <שם>" <repo>/dev/<file>.html site dev`
  - צריך להוסיף ב-build.py ל-COURSE את 'dev' עם צבע (בהאב: --dev).
- הכותרת היא תמיד "לומדת חובת קריאה: <שם>". עובדים בעברית, עם מונחים באנגלית בסוגריים. בתוך SVG בכיוון RTL: text-anchor=start/end מתהפכים, ומספרים עם מקף עוטפים ב-⁦...⁩.
- בשדות q/e של השאלות אין HTML (הם עוברים escape). מחרוזת שיש בה ${...} צריכה להיות בתוך backticks.
- בדיקה: figshot.py לאיורים, allcheck.py (מעבר על כל הנושאים ובדיקת שגיאות ורוחב 400).
- commit עם user Claude / noreply@anthropic.com.

## המשימה הבאה: פסיכולוגיה התפתחותית א'
ספר: ברק, מאיירס, בייט-מרום (עורכות), "פסיכולוגיה התפתחותית: ינקות, ילדות והתבגרות", האוניברסיטה הפתוחה 2022.
נגיש במודל של רופין: moodle.ruppin.ac.il/mod/lti/view.php?id=159812 (רשימת קריאה ← "צפייה אונליין").
עמודים לכל פרק (לומדה אחת לכל פרק):
- פרק 1: 3–13, 34–40, 42–64
- פרק 2: 92–111
- פרק 5: 245–250, 251–274
- פרק 6: 279–297, 311–319
- פרק 7: 341–381

## עוד פתוח
- תרגיל 3 במבוא: Ashton 2020 = m35 (intro/ex3-4.html, בחירה 2/4).
- "ארגונים - מבנים ארגוניים" עמ' 77–115 (סריקה) לקורס הניהול. מחכה ל-PDF מהמשתמש.

## Notes added (dev chapters 2, 5, 6, 7)
- Modules m18–m21 = dev/ch2, ch5, ch6, ch7 (keys lomda-dev-ch2/5/6/7).
- Do NOT run fixq.py on a T file whose html fields are already backtick strings that contain Hebrew quote marks (״ / האו"ם). It mis-pairs quotes. Write html as backticks from the start and use ״ for Hebrew abbreviations inside double-quoted helper args.
- Page ranges with en dash (92–111) render reversed in RTL. Wrap each range in ⁦…⁩ (hub `sub` and CONFIG `cite`), or write "X עד Y" in body text.
- In SVG legends/labels (RTL), text-anchor="start" puts the text to the LEFT of x; "end" to the right.

## Physiology course (phys/)
- Modules m30–m34 = phys/ch1–ch5 (keys lomda-phys-ch1..5): Carlson & Birkett, הפיזיולוגיה של ההתנהגות כרך א (מהד' 12, האו"פ), chapters 1–5 (book pp. 17–226). Book is on lamda (psik) book_id 6293, via Moodle course 2731 reading list (mod/lti/view.php?id=151791).
- build.py COURSE has 'phys' (#b5305a / #f07a9e). Build: python3 build.py mN "<title>" <repo>/phys/chN.html site phys
- Text extraction: pdf.js in the viewer iframe (PDFViewerApplication.pdfDocument), split columns by x; JS results are capped ~50KB, so return arrays of 800-char chunks.

## Weekly bar ("מה לומדים השבוע?")
- Data: /schedule.json — one row per lesson: c (course id), n (lesson #, counted by syllabus week slot), date (YYYY-MM-DD), topic, mods (hub keys), status ("" | "בוטל" | "נדחה"), newDate (for נדחה), note, est (estimated date).
- mgmt dates are estimated (syllabus has topics only; class is on Sundays). intro lectures are Wednesdays (syllabus printed 3.11–24.11 as Tuesdays).
- Module pages accept #sum (open summary) and #quiz (open final exam); patched in app.js startup line.
- A daily scheduled task reads college mail and edits status/newDate in schedule.json, then pushes.
