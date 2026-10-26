import sys,re
# convert "..." string literals that contain ${ into template literals.
p=sys.argv[1];s=open(p).read()
out=[];i=0;n=len(s);depth=[]  # track template literal nesting crudely
res=[]
i=0
while i<n:
    c=s[i]
    if c=='"' and (i==0 or s[i-1]!='\\'):
        # find end of this double-quoted string, allowing ${...} with nested quotes
        j=i+1;has=False
        while j<n:
            if s[j]=='\\': j+=2;continue
            if s[j:j+2]=='${':
                has=True;k=j+2;d=1
                while k<n and d>0:
                    if s[k]=='{':d+=1
                    elif s[k]=='}':d-=1
                    k+=1
                j=k;continue
            if s[j]=='"': break
            j+=1
        lit=s[i:j+1]
        if has:
            inner=lit[1:-1].replace('\\"','"')
            res.append('`'+inner+'`')
        else: res.append(lit)
        i=j+1;continue
    if c=='`':
        # copy template literal verbatim (with nested ${} handled by recursion-lite: process inside)
        res.append(c);i+=1;continue
    res.append(c);i+=1
open(p,'w').write(''.join(res))
