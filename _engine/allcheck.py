import asyncio
from playwright.async_api import async_playwright
P=["intro/psychodrama.html","intro/hoarding.html"]
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        for f in P:
            pg=await b.new_page(viewport={"width":400,"height":900}); errs=[]
            pg.on("pageerror",lambda e:errs.append(str(e)))
            await pg.goto("file:///home/claude/lomdot-p-b-a.github.io/"+f); await pg.wait_for_timeout(300)
            n=0
            if f!="index.html":
                cards=await pg.query_selector_all(".tcard"); n=len(cards)
                # walk every topic fully once (answer first option), to catch broken q refs
                for i in range(n):
                    await pg.goto("file:///home/claude/lomdot-p-b-a.github.io/"+f); await pg.wait_for_timeout(150)
                    await pg.click(f".tcard >> nth={i}")
                    for _ in range(60):
                        if await pg.query_selector(".big"): break
                        o=await pg.query_selector(".opt:not([disabled])")
                        if o: await o.click()
                        await pg.click("button:has-text(\"המשך\") >> nth=-1"); await pg.wait_for_timeout(40)
            w=await pg.evaluate("document.documentElement.scrollWidth")
            print(f, "topics",n,"width",w,"errors",errs[:2])
        await b.close()
asyncio.run(main())
