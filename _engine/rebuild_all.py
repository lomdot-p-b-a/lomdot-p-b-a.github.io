"""Rebuilds the whole site from _engine/design.
- head.html  <- design/mod-base.css + design/skin.css (module styles)
- every module listed in design/courses.js, rebuilt with build.py (uses app.js)
- ../index.html <- design/hub.html with courses.js and the hub CSS inlined
To add a module: add its entry to design/courses.js, then run: python _engine/rebuild_all.py"""
import os, re, sys
ENG = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(ENG)
DES = os.path.join(ENG, 'design')
sys.path.insert(0, ENG)
import build

rd = lambda p: open(p, encoding='utf-8').read()
def wr(p, s): open(p, 'w', encoding='utf-8', newline='\n').write(s)

FONT = '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap">'
skin = rd(os.path.join(DES, 'skin.css'))
wr(os.path.join(ENG, 'head.html'), f'<title>__TITLE__</title>\n{FONT}\n<style>\n{rd(os.path.join(DES, "mod-base.css"))}\n{skin}\n</style>\n')

courses_js = rd(os.path.join(DES, 'courses.js')).strip()
key2mod = {}
for f in os.listdir(ENG):
    m = re.fullmatch(r'(m\d+)_cfg\.js', f)
    if m:
        k = re.search(r'key:"([^"]+)"', rd(os.path.join(ENG, f)))
        if k: key2mod[k.group(1)] = m.group(1)

built, skipped = [], []
for cm in re.finditer(r'\{id:"(\w+)",name:"([^"]+)".*?items:\[(.*?)\n \]\}', courses_js, re.S):
    cid, cname, body = cm.groups()
    for it in re.finditer(r'href:"([^"]+)",key:"([^"]+)"', body):
        href, key = it.groups()
        out = os.path.join(ROOT, href.replace('/', os.sep))
        mod = key2mod.get(key)
        if not mod or not os.path.exists(out):
            skipped.append(f'{href} ({key}: {"no engine module" if not mod else "no html yet"})'); continue
        title = re.search(r'<title>(.*?)</title>', rd(out), re.S).group(1).strip()
        build.build(mod, title, out, site=True, course=cid, course_name=cname)
        built.append(href)

hub = rd(os.path.join(DES, 'hub.html')).replace('/*COURSES*/', courses_js)
hub_css = '<style>\n' + rd(os.path.join(DES, 'hub-base.css')) + '\n' + skin + '\n</style>'
hub = hub.replace('__FONTS__', FONT.split('\n', 1)[1]).replace('<link rel="stylesheet" href="../shared/hub-base.css">\n<link rel="stylesheet" href="skin.css">', hub_css)
wr(os.path.join(ROOT, 'index.html'), hub)

print(f'built {len(built)} modules')
for s in skipped: print('skipped', s)
