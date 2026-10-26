import asyncio,sys
from playwright.async_api import async_playwright
# usage: figshot.py file.html out.png topicIndex:blocks ...
async def main():
    f,out=sys.argv[1],sys.argv[2]; specs=sys.argv[3:]
    async with async_playwright() as p:
        b=await p.chromium.launch(); errs=[]
        pg=await b.new_page(viewport={"width":400,"height":900}); pg.on("pageerror",lambda e:errs.append(str(e)))
        shots=[]
        for k,s in enumerate(specs):
            ti,bl=map(int,s.split(':'))
            await pg.goto("file://"+f); await pg.wait_for_timeout(250)
            await pg.click(f".tcard >> nth={ti}"); await pg.wait_for_timeout(150)
            for _ in range(bl):
                await pg.click(".opt >> nth=0"); await pg.click("text=המשך"); await pg.wait_for_timeout(120)
            el=await pg.query_selector("figure.fig")
            p_=f"/tmp/_f{k}.png"
            if el: await el.screenshot(path=p_); shots.append(p_)
        print(errs); await b.close()
    from PIL import Image
    ims=[Image.open(x) for x in shots]; W=max(i.width for i in ims); H=sum(i.height for i in ims)
    c=Image.new('RGB',(W,H),'white'); y=0
    for i in ims: c.paste(i,(0,y)); y+=i.height
    c.save(out)
asyncio.run(main())
