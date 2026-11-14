import sys,subprocess,os,shutil,tempfile
d=os.path.dirname(os.path.abspath(__file__))
COURSE={'mgmt':'מבוא לניהול ומבנה ארגוני','intro':'מבוא לפסיכולוגיה','social':"פסיכולוגיה חברתית א'",'dev':"פסיכולוגיה התפתחותית א'",'phys':'יסודות פיזיולוגיים של התנהגות','mkt':'מבוא לניהול השיווק'}
def build(m,title,out,site=True,course='mgmt',course_name=None):
    r=lambda f:open(os.path.join(d,f),encoding='utf-8').read()
    opt=lambda f:r(f) if os.path.exists(os.path.join(d,f)) else ''
    js=r(f'{m}_cfg.js')+r('icons.js')+r(f'{m}_fig.js')+r('helpers.js')+r('acr.js')+r(f'{m}_T.js')+r(f'{m}_Q.js')+opt(f'{m}_H.js')+opt(f'{m}_sum.js')+opt(f'{m}_cards.js')+opt(f'{m}_maps.js')+r('app.js')
    if shutil.which('node'):
        chk=os.path.join(tempfile.gettempdir(),'_chk.js');open(chk,'w',encoding='utf-8').write(js);subprocess.run(['node','--check',chk],check=True)
    head=r('head.html').replace('__TITLE__',title)
    head+=f'<style>:root{{--accent:var(--{course})}}</style>\n<script>window.COURSE_ID="{course}";window.COURSE_NAME="{course_name or COURSE.get(course,"")}";</script>\n'
    body='<div class="wrap" id="app"></div>\n<script>\n'+js+'</script>\n'+('<script src="../_engine/ai-config.js"></script><script src="../_engine/ai.js"></script>\n' if site else '')
    if site:
        page=f'<!doctype html>\n<html lang="he" dir="rtl">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<meta name="robots" content="noindex,nofollow">\n<style>:root{{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}body{{margin:0}}img{{max-width:100%}}[hidden]{{display:none!important}}</style>\n{head}</head>\n<body>\n{body}</body>\n</html>\n'
    else: page=head+body
    open(out,'w',encoding='utf-8',newline='\n').write(page)
if __name__=='__main__': build(*sys.argv[1:4], site=sys.argv[4]=='site', course=(sys.argv[5] if len(sys.argv)>5 else 'mgmt'))
