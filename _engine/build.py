import sys,subprocess,os
d=os.path.dirname(os.path.abspath(__file__))
COURSE={'mgmt':None,'intro':('#6a46c2','#ad90f2'),'dev':('#2b8546','#6dcf8e')}
def build(m,title,out,site=True,course='mgmt'):
    r=lambda f:open(os.path.join(d,f)).read()
    js=r(f'{m}_cfg.js')+r('icons.js')+r(f'{m}_fig.js')+r('helpers.js')+r(f'{m}_T.js')+r(f'{m}_Q.js')+r('app.js')
    open('/tmp/_chk.js','w').write(js); subprocess.run(['node','--check','/tmp/_chk.js'],check=True)
    head=r('head.html').replace('__TITLE__',title)
    if COURSE.get(course):
        l,dk=COURSE[course]; head+=f'<style>:root{{--accent:{l}}}@media (prefers-color-scheme:dark){{:root:not([data-theme="light"]){{--accent:{dk}}}}}:root[data-theme="dark"]{{--accent:{dk}}}</style>\n'
    body='<div class="wrap" id="app"></div>\n<script>\n'+js+'</script>\n'
    if site:
        body=body.replace('<div class="foot"><span>','<div class="foot"><a href="../#'+course+'" style="color:var(--accent);font-weight:700;text-decoration:none">→ לקורס</a><span>')
        page=f'<!doctype html>\n<html lang="he" dir="rtl">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<meta name="robots" content="noindex,nofollow">\n<style>:root{{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}body{{margin:0}}img{{max-width:100%}}[hidden]{{display:none!important}}</style>\n{head}</head>\n<body>\n{body}</body>\n</html>\n'
    else: page=head+body
    open(out,'w').write(page)
if __name__=='__main__': build(*sys.argv[1:4], site=sys.argv[4]=='site', course=(sys.argv[5] if len(sys.argv)>5 else 'mgmt'))
